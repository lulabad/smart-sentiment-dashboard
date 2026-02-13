import { HfInference } from "@huggingface/inference";
import { NextRequest, NextResponse } from "next/server";

const hf = new HfInference(process.env.HF_ACCESS_TOKEN);

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json();

    if (!text || typeof text !== "string") {
      return NextResponse.json(
        { error: "Text is required" },
        { status: 400 }
      );
    }

    const result = await hf.textClassification({
      model: "distilbert-base-uncased-finetuned-sst-2-english",
      inputs: text,
    });

    return NextResponse.json({
      text,
      sentiment: result[0].label,
      confidence: result[0].score,
      analyzedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error analyzing sentiment:", error);
    return NextResponse.json(
      { error: "Failed to analyze sentiment" },
      { status: 500 }
    );
  }
}
