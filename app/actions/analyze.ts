"use server";

import { HfInference } from "@huggingface/inference";

const hf = new HfInference(process.env.HF_ACCESS_TOKEN);

export async function analyzeSentiment(formData: FormData) {
  const text = formData.get("text") as string;

  if (!text) {
    throw new Error("Text is required");
  }

  const result = await hf.textClassification({
    model: "distilbert-base-uncased-finetuned-sst-2-english",
    inputs: text,
  });

  return {
    text,
    sentiment: result[0].label,
    confidence: result[0].score,
    analyzedAt: new Date().toISOString(),
  };
}
