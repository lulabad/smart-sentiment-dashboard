"use client";

import { SentimentResult as SentimentResultType } from "@/lib/types";
import SentimentBadge from "./SentimentBadge";

interface Props {
  result: SentimentResultType;
}

export default function SentimentResult({ result }: Props) {
  const confidencePercent = (result.confidence * 100).toFixed(2);

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Analyse-Ergebnis</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Text:
          </label>
          <p className="text-gray-800 bg-gray-50 p-3 rounded border border-gray-200">
            {result.text}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Sentiment:
            </label>
            <SentimentBadge sentiment={result.sentiment} />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Konfidenz:
            </label>
            <p className="text-2xl font-bold text-gray-800">
              {confidencePercent}%
            </p>
          </div>
        </div>

        {result.analyzedAt && (
          <div className="text-sm text-gray-500">
            Analysiert am: {new Date(result.analyzedAt).toLocaleString("de-DE")}
          </div>
        )}
      </div>
    </div>
  );
}
