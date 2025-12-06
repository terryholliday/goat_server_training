import type { TrainingProgress, QuizResult, ExamAttempt, UserProfile } from '../types';

// Demo mode flag - uses localStorage instead of Firestore
const DEMO_MODE = true;

// ================== localStorage Helpers ==================

function getFromStorage<T>(key: string, defaultValue: T): T {
    if (typeof window === 'undefined') return defaultValue;
    const stored = localStorage.getItem(key);
    if (!stored) return defaultValue;
    try {
        const parsed = JSON.parse(stored);
        // Convert date strings back to Date objects
        if (parsed.lastUpdated) parsed.lastUpdated = new Date(parsed.lastUpdated);
        if (parsed.createdAt) parsed.createdAt = new Date(parsed.createdAt);
        if (parsed.lastActive) parsed.lastActive = new Date(parsed.lastActive);
        if (parsed.quizScores) {
            parsed.quizScores = parsed.quizScores.map((q: QuizResult) => ({
                ...q,
                completedAt: new Date(q.completedAt)
            }));
        }
        if (parsed.finalExamAttempts) {
            parsed.finalExamAttempts = parsed.finalExamAttempts.map((e: ExamAttempt) => ({
                ...e,
                completedAt: new Date(e.completedAt)
            }));
        }
        return parsed;
    } catch {
        return defaultValue;
    }
}

function saveToStorage<T>(key: string, value: T): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(key, JSON.stringify(value));
}

// ================== User Profile ==================

export async function createUserProfile(
    uid: string,
    email: string,
    displayName: string,
    role: 'staff' | 'manager' = 'staff'
): Promise<UserProfile> {
    const now = new Date();
    const profile: UserProfile = {
        uid,
        email,
        displayName,
        role,
        createdAt: now,
        lastActive: now
    };

    if (DEMO_MODE) {
        saveToStorage(`user_${uid}`, profile);
        return profile;
    }

    // Firebase version would go here
    return profile;
}

export async function getUserProfile(uid: string): Promise<UserProfile | null> {
    if (DEMO_MODE) {
        return getFromStorage<UserProfile | null>(`user_${uid}`, null);
    }
    // Firebase version would go here
    return null;
}

export async function updateLastActive(uid: string): Promise<void> {
    if (DEMO_MODE) {
        const profile = await getUserProfile(uid);
        if (profile) {
            profile.lastActive = new Date();
            saveToStorage(`user_${uid}`, profile);
        }
        return;
    }
    // Firebase version would go here
}

// ================== Training Progress ==================

export async function getTrainingProgress(uid: string): Promise<TrainingProgress | null> {
    if (DEMO_MODE) {
        return getFromStorage<TrainingProgress | null>(`progress_${uid}`, null);
    }
    // Firebase version would go here
    return null;
}

export async function initializeProgress(uid: string): Promise<TrainingProgress> {
    const initialProgress: TrainingProgress = {
        userId: uid,
        completedSections: [],
        quizScores: [],
        finalExamAttempts: [],
        currentSectionIndex: 0,
        lastUpdated: new Date()
    };

    if (DEMO_MODE) {
        saveToStorage(`progress_${uid}`, initialProgress);
        return initialProgress;
    }

    // Firebase version would go here
    return initialProgress;
}

export async function markSectionComplete(
    uid: string,
    sectionIndex: number,
    shouldUnlockNext: boolean = true
): Promise<TrainingProgress> {
    let current = await getTrainingProgress(uid);

    if (!current) {
        current = await initializeProgress(uid);
    }

    const completedSections = [...new Set([...current.completedSections, sectionIndex])];
    const currentSectionIndex = shouldUnlockNext
        ? Math.max(current.currentSectionIndex, sectionIndex + 1)
        : current.currentSectionIndex;

    const updatedProgress: TrainingProgress = {
        ...current,
        completedSections,
        currentSectionIndex,
        lastUpdated: new Date()
    };

    if (DEMO_MODE) {
        saveToStorage(`progress_${uid}`, updatedProgress);
    }

    return updatedProgress;
}

export async function saveQuizScore(
    uid: string,
    quizId: string,
    score: number,
    totalQuestions: number
): Promise<void> {
    let current = await getTrainingProgress(uid);

    if (!current) {
        current = await initializeProgress(uid);
    }

    const passed = (score / totalQuestions) >= 0.8;
    const quizResult: QuizResult = {
        quizId,
        score,
        totalQuestions,
        passed,
        completedAt: new Date()
    };

    const quizScores = [...current.quizScores, quizResult];
    const updatedProgress: TrainingProgress = {
        ...current,
        quizScores,
        lastUpdated: new Date()
    };

    if (DEMO_MODE) {
        saveToStorage(`progress_${uid}`, updatedProgress);
    }
}

export async function saveFinalExamAttempt(
    uid: string,
    score: number,
    totalQuestions: number,
    passed: boolean
): Promise<number> {
    let current = await getTrainingProgress(uid);

    if (!current) {
        current = await initializeProgress(uid);
    }

    const attemptNumber = current.finalExamAttempts.length + 1;

    const examAttempt: ExamAttempt = {
        score,
        totalQuestions,
        passed,
        attemptNumber,
        completedAt: new Date()
    };

    const finalExamAttempts = [...current.finalExamAttempts, examAttempt];
    const updatedProgress: TrainingProgress = {
        ...current,
        finalExamAttempts,
        lastUpdated: new Date()
    };

    if (DEMO_MODE) {
        saveToStorage(`progress_${uid}`, updatedProgress);
    }

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
    if (DEMO_MODE) {
        // In demo mode, just return empty array (no staff to manage)
        return [];
    }
    // Firebase version would go here
    return [];
}

export async function resetStaffProgress(uid: string): Promise<void> {
    if (DEMO_MODE) {
        const resetProgress: TrainingProgress = {
            userId: uid,
            completedSections: [],
            quizScores: [],
            finalExamAttempts: [],
            currentSectionIndex: 0,
            lastUpdated: new Date()
        };
        saveToStorage(`progress_${uid}`, resetProgress);
        return;
    }
    // Firebase version would go here
}
