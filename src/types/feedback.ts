export type ReviewerRole =
  | 'Recruiter'
  | 'Hiring Manager'
  | 'Tech Lead / Senior Dev'
  | 'Peer Developer'
  | 'Designer'
  | 'Visitor / Other';

export type FeedbackCategory =
  | 'Design & Visuals'
  | 'Projects & Code'
  | 'Performance & UX'
  | 'Hireability & Resume'
  | 'Bug / Improvement'
  | 'General Thoughts';

export interface FeedbackSubmission {
  id: string;
  rating: number; // 1 to 5
  category: FeedbackCategory;
  feedback: string;
  reviewerRole: ReviewerRole;
  name?: string;
  email?: string;
  isAnonymous: boolean;
  createdAt: string; // ISO date string
}
