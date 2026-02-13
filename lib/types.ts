export interface SentimentResult {
  text: string;
  sentiment: string;
  confidence: number;
  analyzedAt?: string;
}

export interface AnalysisRequest {
  text: string;
}

export interface BatchResult {
  results: SentimentResult[];
  totalAnalyzed: number;
  averageConfidence: number;
}

export interface DashboardData {
  sentiments: {
    positive: number;
    negative: number;
    neutral: number;
  };
  recentAnalyses: SentimentResult[];
}
