import React, { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { getAllStaffProgress, resetStaffProgress, type StaffProgressSummary } from '../services/trainingProgress';
import { Button } from './Button';
import { ProgressBar } from './ProgressBar';

interface ManagerDashboardProps {
    totalSections: number;
    onBack: () => void;
}

export const ManagerDashboard: React.FC<ManagerDashboardProps> = ({ totalSections, onBack }) => {
    const { userProfile } = useAuth();
    const [staffProgress, setStaffProgress] = useState<StaffProgressSummary[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [resettingUserId, setResettingUserId] = useState<string | null>(null);

    const loadStaffProgress = useCallback(async () => {
        try {
            setLoading(true);
            const data = await getAllStaffProgress(totalSections);
            setStaffProgress(data);
            setError(null);
        } catch (err) {
            console.error('Error loading staff progress:', err);
            setError('Failed to load staff data. Please try again.');
        } finally {
            setLoading(false);
        }
    }, [totalSections]);

    useEffect(() => {
        loadStaffProgress();
    }, [loadStaffProgress]);

    const handleResetProgress = async (userId: string, displayName: string) => {
        if (!confirm(`Are you sure you want to reset progress for ${displayName}? This cannot be undone.`)) {
            return;
        }

        try {
            setResettingUserId(userId);
            await resetStaffProgress(userId);
            await loadStaffProgress();
        } catch (err) {
            console.error('Error resetting progress:', err);
            setError('Failed to reset progress. Please try again.');
        } finally {
            setResettingUserId(null);
        }
    };

    const formatDate = (date: Date | null): string => {
        if (!date) return 'Never';
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit'
        });
    };

    if (userProfile?.role !== 'manager') {
        return (
            <div className="text-center py-12">
                <p className="text-gray-600">You do not have permission to view this page.</p>
                <Button onClick={onBack} variant="outline" className="mt-4">
                    Go Back
                </Button>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Manager Dashboard</h2>
                    <p className="text-gray-600 mt-1">Track staff training progress and completion</p>
                </div>
                <div className="flex gap-3">
                    <Button onClick={loadStaffProgress} variant="outline" disabled={loading}>
                        Refresh
                    </Button>
                    <Button onClick={onBack} variant="outline">
                        &larr; Back to Training
                    </Button>
                </div>
            </div>

            {error && (
                <div
                    className="bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3 rounded-lg"
                    role="alert"
                >
                    {error}
                </div>
            )}

            {loading && staffProgress.length === 0 ? (
                <div className="text-center py-12">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
                    <p className="mt-4 text-gray-600">Loading staff data...</p>
                </div>
            ) : staffProgress.length === 0 ? (
                <div className="bg-white border rounded-lg p-8 text-center">
                    <p className="text-gray-600">No staff members have signed up yet.</p>
                </div>
            ) : (
                <>
                    {/* Summary Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white border rounded-lg p-5">
                            <p className="text-sm text-gray-600 mb-1">Total Staff</p>
                            <p className="text-3xl font-bold text-gray-900">{staffProgress.length}</p>
                        </div>
                        <div className="bg-white border rounded-lg p-5">
                            <p className="text-sm text-gray-600 mb-1">Completed Training</p>
                            <p className="text-3xl font-bold text-green-600">
                                {staffProgress.filter(s => s.finalExamPassed).length}
                            </p>
                        </div>
                        <div className="bg-white border rounded-lg p-5">
                            <p className="text-sm text-gray-600 mb-1">In Progress</p>
                            <p className="text-3xl font-bold text-indigo-600">
                                {staffProgress.filter(s => !s.finalExamPassed && s.completionPercentage > 0).length}
                            </p>
                        </div>
                    </div>

                    {/* Staff Table */}
                    <div className="bg-white border rounded-lg overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full" role="table">
                                <thead className="bg-gray-50 border-b">
                                    <tr>
                                        <th scope="col" className="text-left text-sm font-semibold text-gray-900 px-4 py-3">
                                            Staff Member
                                        </th>
                                        <th scope="col" className="text-left text-sm font-semibold text-gray-900 px-4 py-3">
                                            Progress
                                        </th>
                                        <th scope="col" className="text-left text-sm font-semibold text-gray-900 px-4 py-3">
                                            Exam Status
                                        </th>
                                        <th scope="col" className="text-left text-sm font-semibold text-gray-900 px-4 py-3">
                                            Last Active
                                        </th>
                                        <th scope="col" className="text-right text-sm font-semibold text-gray-900 px-4 py-3">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {staffProgress.map((staff) => (
                                        <tr key={staff.user.uid} className="hover:bg-gray-50">
                                            <td className="px-4 py-4">
                                                <div>
                                                    <p className="font-medium text-gray-900">{staff.user.displayName}</p>
                                                    <p className="text-sm text-gray-500">{staff.user.email}</p>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4">
                                                <div className="w-40">
                                                    <div className="flex items-center justify-between text-sm mb-1">
                                                        <span className="text-gray-700">{staff.completionPercentage}%</span>
                                                        <span className="text-gray-500">
                                                            {staff.progress?.completedSections.length || 0}/{totalSections}
                                                        </span>
                                                    </div>
                                                    <ProgressBar
                                                        value={staff.completionPercentage}
                                                        total={100}
                                                        color={staff.completionPercentage === 100 ? 'bg-green-600' : 'bg-indigo-600'}
                                                    />
                                                </div>
                                            </td>
                                            <td className="px-4 py-4">
                                                {staff.finalExamPassed ? (
                                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                        ✓ Passed
                                                    </span>
                                                ) : staff.progress?.finalExamAttempts.length ? (
                                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                                                        {staff.progress.finalExamAttempts.length} attempt(s)
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                                                        Not started
                                                    </span>
                                                )}
                                            </td>
                                            <td className="px-4 py-4">
                                                <p className="text-sm text-gray-600">
                                                    {formatDate(staff.user.lastActive)}
                                                </p>
                                            </td>
                                            <td className="px-4 py-4 text-right">
                                                <Button
                                                    variant="ghost"
                                                    onClick={() => handleResetProgress(staff.user.uid, staff.user.displayName)}
                                                    disabled={resettingUserId === staff.user.uid}
                                                    className="text-rose-600 hover:text-rose-700 hover:bg-rose-50"
                                                >
                                                    {resettingUserId === staff.user.uid ? 'Resetting...' : 'Reset'}
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
