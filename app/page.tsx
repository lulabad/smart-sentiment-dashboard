import TextInput from "@/components/TextInput";

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Smart Sentiment Dashboard
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Analysiere die Stimmung deiner Texte mit KI-gestützter Sentiment-Analyse.
          Powered by Hugging Face und Next.js.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Text-Analyse
        </h2>
        <TextInput />
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">
          ℹ️ Wie funktioniert es?
        </h3>
        <p className="text-blue-800">
          Gib einen Text ein und klicke auf &quot;Analysieren&quot;. Das System verwendet
          ein vortrainiertes DistilBERT-Modell von Hugging Face, um die Stimmung
          (positiv, negativ oder neutral) zu erkennen und eine Konfidenz-Bewertung
          zu liefern.
        </p>
      </div>
    </div>
  );
}
