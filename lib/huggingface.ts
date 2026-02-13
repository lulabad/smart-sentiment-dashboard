import { HfInference } from "@huggingface/inference";

// Singleton HF Client with type safety
let hfClient: HfInference | null = null;

export function getHfClient(): HfInference {
  if (!hfClient) {
    const token = process.env.HF_ACCESS_TOKEN;
    
    if (!token) {
      throw new Error("HF_ACCESS_TOKEN is not set in environment variables");
    }
    
    hfClient = new HfInference(token);
  }
  
  return hfClient;
}

export const SENTIMENT_MODEL = "distilbert-base-uncased-finetuned-sst-2-english";
