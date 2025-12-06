import {
    doc,
    getDoc,
    setDoc,
    updateDoc,
    collection,
    getDocs,
    serverTimestamp,
    Timestamp,
    query,
    orderBy
} from 'firebase/firestore';
import { db } from '../firebase';
import type { TrainingProgress, QuizResult, ExamAttempt, UserProfile } from '../types';

// Helper to convert Firestore Timestamps to Dates
const convertTimestamp = (timestamp: Timestamp | Date | null): Date => {
    if (timestamp instanceof Timestamp) {
        return timestamp.toDate();
    }
    return timestamp || new Date();
};

// ================== User Profile ==================

export async function createUserProfile(
    uid: string,
    email: string,
    displayName: string,
    role: 'staff' | 'manager' = 'staff'
): Promise<UserProfile> {
    const userRef = doc(db, 'users', uid);
    const now = new Date();

    const profile: UserProfile = {
        uid,
        email,
        displayName,
        role,
        createdAt: now,
        lastActive: now
    };

    await setDoc(userRef, {
        ...profile,
        createdAt: serverTimestamp(),
        lastActive: serverTimestamp()
    });

    return profile;
}

export async function getUserProfile(uid: string): Promise<UserProfile | null> {
    const userRef = doc(db, 'users', uid);
    const snapshot = await getDoc(userRef);

    if (!snapshot.exists()) {
        return null;
    }

    const data = snapshot.data();
    return {
        uid: data.uid,
        email: data.email,
        displayName: data.displayName,
        role: data.role,
        createdAt: convertTimestamp(data.createdAt),
        lastActive: convertTimestamp(data.lastActive)
    };
}

export async function updateLastActive(uid: string): Promise<void> {
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef, {
        lastActive: serverTimestamp()
    });
}

// ================== Training Progress ==================

export async function getTrainingProgress(uid: string): Promise<TrainingProgress | null> {
    const progressRef = doc(db, 'progress', uid);
    const snapshot = await getDoc(progressRef);

    if (!snapshot.exists()) {
        return null;
    }

    const data = snapshot.data();
    return {
        userId: uid,
        completedSections: data.completedSections || [],
        quizScores: (data.quizScores || []).map((q: Record<string, unknown>) => ({
            ...q,
            completedAt: convertTimestamp(q.completedAt as Timestamp | Date)
        })),
        finalExamAttempts: (data.finalExamAttempts || []).map((e: Record<string, unknown>) => ({
            ...e,
            completedAt: convertTimestamp(e.completedAt as Timestamp | Date)
        })),
        currentSectionIndex: data.currentSectionIndex || 0,
        lastUpdated: convertTimestamp(data.lastUpdated)
    };
}

export async function initializeProgress(uid: string): Promise<TrainingProgress> {
    const progressRef = doc(db, 'progress', uid);

    const initialProgress: TrainingProgress = {
        userId: uid,
        completedSections: [],
        quizScores: [],
        finalExamAttempts: [],
        currentSectionIndex: 0,
        lastUpdated: new Date()
    };

    await setDoc(progressRef, {
        ...initialProgress,
        lastUpdated: serverTimestamp()
    });

    return initialProgress;
}

export async function markSectionComplete(
    uid: string,
    sectionIndex: number,
    shouldUnlockNext: boolean = true
): Promise<TrainingProgress> {
    const progressRef = doc(db, 'progress', uid);
    const current = await getTrainingProgress(uid);

    if (!current) {
        const newProgress = await initializeProgress(uid);
        newProgress.completedSections = [sectionIndex];
        if (shouldUnlockNext) {
            newProgress.currentSectionIndex = sectionIndex + 1;
        }
        await setDoc(progressRef, {
            ...newProgress,
            lastUpdated: serverTimestamp()
        });
        return newProgress;
    }

    const completedSections = [...new Set([...current.completedSections, sectionIndex])];
    const currentSectionIndex = shouldUnlockNext
        ? Math.max(current.currentSectionIndex, sectionIndex + 1)
        : current.currentSectionIndex;

    await updateDoc(progressRef, {
        completedSections,
        currentSectionIndex,
        lastUpdated: serverTimestamp()
    });

    return {
        ...current,
        completedSections,
        currentSectionIndex,
        lastUpdated: new Date()
    };
}

export async function saveQuizScore(
    uid: string,
    quizId: string,
    quizScores: [{
                ...quizResult,
        completedAt: serverTimestamp()
            }],
    lastUpdated: serverTimestamp()
        });
return;
    }

const quizScores = [...current.quizScores, quizResult];

await updateDoc(progressRef, {
    quizScores: quizScores.map(q => ({
        ...q,
        completedAt: q.completedAt instanceof Date ? Timestamp.fromDate(q.completedAt) : q.completedAt
    })),
    lastUpdated: serverTimestamp()
});
}

export async function saveFinalExamAttempt(
    uid: string,
    score: number,
    totalQuestions: number,
    passed: boolean
): Promise<number> {
    const progressRef = doc(db, 'progress', uid);
    const current = await getTrainingProgress(uid);

    const attemptNumber = current ? current.finalExamAttempts.length + 1 : 1;

    const examAttempt: ExamAttempt = {
        score,
        totalQuestions,
        passed,
        attemptNumber,
        completedAt: new Date()
    };

    if (!current) {
        const newProgress = await initializeProgress(uid);
        newProgress.finalExamAttempts = [examAttempt];
        await setDoc(progressRef, {
            ...newProgress,
            finalExamAttempts: [{
                ...examAttempt,
                completedAt: serverTimestamp()
            }],
            lastUpdated: serverTimestamp()
        });
        return attemptNumber;
    }

    const finalExamAttempts = [...current.finalExamAttempts, examAttempt];

    await updateDoc(progressRef, {
        finalExamAttempts: finalExamAttempts.map(e => ({
            ...e,
            completedAt: e.completedAt instanceof Date ? Timestamp.fromDate(e.completedAt) : e.completedAt
        })),
        lastUpdated: serverTimestamp()
    });

    return attemptNumber;
}

// ================== Manager Dashboard Queries ==================

export interface StaffProgressSummary {
    user: UserProfile;
    progress: TrainingProgress | null;
    completionPercentage: number;
    finalExamPassed: boolean;
    lastQuizScore: number | null;
}

export async function getAllStaffProgress(totalSections: number): Promise<StaffProgressSummary[]> {
    const usersRef = collection(db, 'users');
    const usersQuery = query(usersRef, orderBy('displayName'));
    const usersSnapshot = await getDocs(usersQuery);

    const staffProgress: StaffProgressSummary[] = [];

    for (const userDoc of usersSnapshot.docs) {
        const userData = userDoc.data();

        // Only include staff members, not managers
        if (userData.role === 'manager') continue;

        const user: UserProfile = {
            uid: userData.uid || userDoc.id,
            email: userData.email,
            displayName: userData.displayName,
            role: userData.role,
            createdAt: convertTimestamp(userData.createdAt),
            lastActive: convertTimestamp(userData.lastActive)
        };

        const progress = await getTrainingProgress(user.uid);

        const completedCount = progress?.completedSections.length || 0;
        const completionPercentage = Math.round((completedCount / totalSections) * 100);

        const finalExamPassed = progress?.finalExamAttempts.some(e => e.passed) || false;

        const lastQuiz = progress?.quizScores[progress.quizScores.length - 1];
        const lastQuizScore = lastQuiz
            ? Math.round((lastQuiz.score / lastQuiz.totalQuestions) * 100)
            : null;

        staffProgress.push({
            user,
            progress,
            completionPercentage,
            finalExamPassed,
            lastQuizScore
        });
    }

    return staffProgress;
}

export async function resetStaffProgress(uid: string): Promise<void> {
    const progressRef = doc(db, 'progress', uid);
    await setDoc(progressRef, {
        userId: uid,
        completedSections: [],
        quizScores: [],
        finalExamAttempts: [],
        currentSectionIndex: 0,
        lastUpdated: serverTimestamp()
    });
}
