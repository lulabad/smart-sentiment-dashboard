"use client";

import { useState, useTransition } from "react";
import { analyzeSentiment } from "@/app/actions/analyze";
import SentimentResult from "./SentimentResult";
import { SentimentResult as SentimentResultType } from "@/lib/types";

export default function TextInput() {
  const [result, setResult] = useState<SentimentResultType | null>(null);
  const [isPending, startTransition] = useTransition();

  async function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const analysis = await analyzeSentiment(formData);
      setResult(analysis);
    });
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form action={handleSubmit} className="space-y-4">
        <textarea
          name="text"
          placeholder="Text zur Analyse eingeben..."
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={6}
          required
        />
        <button
          type="submit"
          disabled={isPending}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium"
        >
          {isPending ? "Analysiere..." : "Analysieren"}
        </button>
      </form>

      {result && (
        <div className="mt-8">
          <SentimentResult result={result} />
        </div>
      )}
    </div>
  );
}
