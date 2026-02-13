import DashboardCharts from "@/components/DashboardCharts";
import { DashboardData } from "@/lib/types";

// Platzhalter-Daten für die Demonstration
const mockData: DashboardData = {
  sentiments: {
    positive: 45,
    negative: 15,
    neutral: 20,
  },
  recentAnalyses: [],
};

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-lg text-gray-600">
          Visualisierung der Sentiment-Analysen
        </p>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <p className="text-yellow-800">
          ℹ️ <strong>Hinweis:</strong> Dies sind Platzhalter-Daten. In einer vollständigen
          Implementierung würden hier echte Daten aus einer Datenbank (z.B. mit Prisma)
          angezeigt werden.
        </p>
      </div>

      <DashboardCharts data={mockData} />

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Zukünftige Features
        </h2>
        <ul className="space-y-2 text-gray-700">
          <li>✅ Echte Daten aus Prisma + SQLite</li>
          <li>✅ Historie der letzten Analysen</li>
          <li>✅ Erweiterte Statistiken und Trends</li>
          <li>✅ Export-Funktionen (CSV, JSON)</li>
          <li>✅ Filter nach Zeitraum</li>
        </ul>
      </div>
    </div>
  );
}
