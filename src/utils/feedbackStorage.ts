import type { FeedbackSubmission } from '../types/feedback';

const STORAGE_KEY = 'akash_portfolio_feedbacks_records_v1';
const PIN_STORAGE_KEY = 'akash_portfolio_admin_pin_v1';
const DEFAULT_PIN = '8660';

export const getStoredFeedbacks = (): FeedbackSubmission[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error('Failed to load stored feedbacks:', error);
    return [];
  }
};

export const saveFeedbackToStorage = (
  feedbackData: Omit<FeedbackSubmission, 'id' | 'createdAt'>
): FeedbackSubmission => {
  const newSubmission: FeedbackSubmission = {
    ...feedbackData,
    id: `fb_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    createdAt: new Date().toISOString(),
  };

  try {
    const currentList = getStoredFeedbacks();
    const updatedList = [newSubmission, ...currentList];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
  } catch (error) {
    console.error('Failed to save feedback to storage:', error);
  }

  return newSubmission;
};

export const deleteFeedbackFromStorage = (id: string): FeedbackSubmission[] => {
  try {
    const currentList = getStoredFeedbacks();
    const updated = currentList.filter((item) => item.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (error) {
    console.error('Failed to delete feedback from storage:', error);
    return [];
  }
};

export const clearAllFeedbacksFromStorage = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear feedbacks from storage:', error);
  }
};

export const getAdminPin = (): string => {
  try {
    const stored = localStorage.getItem(PIN_STORAGE_KEY);
    if (!stored || stored === '2026') {
      return DEFAULT_PIN;
    }
    return stored;
  } catch {
    return DEFAULT_PIN;
  }
};

export const setAdminPin = (newPin: string): boolean => {
  try {
    if (newPin.trim().length >= 4) {
      localStorage.setItem(PIN_STORAGE_KEY, newPin.trim());
      return true;
    }
    return false;
  } catch {
    return false;
  }
};

export const verifyAdminPin = (enteredPin: string): boolean => {
  const currentPin = getAdminPin();
  return enteredPin.trim() === currentPin;
};

export const exportFeedbacksToCSV = (feedbacks: FeedbackSubmission[]): void => {
  if (feedbacks.length === 0) return;

  const headers = ['Date', 'Rating', 'Category', 'Reviewer Role', 'Name', 'Email', 'Feedback'];
  const rows = feedbacks.map((item) => [
    `"${new Date(item.createdAt).toLocaleString().replace(/"/g, '""')}"`,
    `"${item.rating}/5"`,
    `"${item.category.replace(/"/g, '""')}"`,
    `"${item.reviewerRole.replace(/"/g, '""')}"`,
    `"${(item.isAnonymous ? 'Anonymous' : item.name || 'Anonymous').replace(/"/g, '""')}"`,
    `"${(item.isAnonymous ? 'N/A' : item.email || 'N/A').replace(/"/g, '""')}"`,
    `"${item.feedback.replace(/"/g, '""')}"`,
  ]);

  const csvContent = [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `portfolio_feedback_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
