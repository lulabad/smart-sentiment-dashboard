"use client";

import { useState, useTransition } from "react";
import { analyzeSentiment } from "@/app/actions/analyze";
import { SentimentResult } from "@/lib/types";
import SentimentBadge from "./SentimentBadge";

export default function BatchAnalyzer() {
  const [texts, setTexts] = useState("");
  const [results, setResults] = useState<SentimentResult[]>([]);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");

  async function handleBatchAnalyze() {
    const textLines = texts
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    if (textLines.length === 0) {
      setError("Bitte geben Sie mindestens einen Text ein");
      return;
    }

    setError("");
    startTransition(async () => {
      // Process all texts concurrently for better performance
      const analysisPromises = textLines.map(async (text) => {
        const formData = new FormData();
        formData.append("text", text);
        return await analyzeSentiment(formData);
      });

      const batchResults = await Promise.all(analysisPromises);
      setResults(batchResults);
    });
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Texte zur Batch-Analyse (ein Text pro Zeile):
        </label>
        <textarea
          value={texts}
          onChange={(e) => setTexts(e.target.value)}
          placeholder="Text 1&#10;Text 2&#10;Text 3&#10;..."
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={8}
        />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800 text-sm">{error}</p>
        </div>
      )}

      <button
        onClick={handleBatchAnalyze}
        disabled={isPending}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium"
      >
        {isPending ? "Analysiere..." : "Batch-Analyse starten"}
      </button>

      {results.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">
            Ergebnisse ({results.length} Texte)
          </h3>
          <div className="space-y-3">
            {results.map((result, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-gray-800 mb-2">{result.text}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <SentimentBadge sentiment={result.sentiment} />
                    <span className="font-semibold text-gray-700">
                      {(result.confidence * 100).toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
