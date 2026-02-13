# Smart Sentiment Dashboard

Eine vollständige Next.js Fullstack-App für Sentiment-Analyse mit Hugging Face AI.

## 📖 Überblick

Das **Smart Sentiment Dashboard** ist eine moderne Web-Anwendung, mit der Nutzer Texte eingeben und sofort eine visuelle Analyse der Stimmung (Sentiment) erhalten. Die App nutzt die Hugging Face Inference API direkt aus Next.js API Routes – ohne separates Backend.

## 🎯 Was du dabei lernst

| Thema | Beschreibung |
|-------|--------------|
| **NLP Grundlagen** | Verstehen, wie vortrainierte Modelle für Natural Language Processing funktionieren |
| **Vortrainierte Modelle** | Nutzung von Hugging Face Modellen wie DistilBERT für Sentiment-Analyse |
| **Next.js App Router** | Moderne Routing-Architektur mit file-based routing |
| **Server Components** | React Server Components für bessere Performance |
| **API Routes** | Serverlose API-Endpoints in Next.js |
| **Server Actions** | Direkte Server-Funktionen ohne explizite API-Routes |
| **GitHub Copilot** | KI-gestützte Code-Vervollständigung und -Generierung |

## 🏗️ Architektur-Diagramm

```
┌─────────────────────────────────────────────────────────────┐
│                      Browser (Client)                        │
│  ┌────────────────┐  ┌──────────────┐  ┌─────────────────┐ │
│  │  TextInput     │  │ Dashboard    │  │  BatchAnalyzer  │ │
│  │  Component     │  │ Charts       │  │  Component      │ │
│  └────────┬───────┘  └──────┬───────┘  └────────┬────────┘ │
└───────────┼──────────────────┼───────────────────┼──────────┘
            │                  │                   │
            ├──────────────────┼───────────────────┘
            │                  │
            ▼                  ▼
┌───────────────────────────────────────────────────────────────┐
│              Next.js Server (App Router)                      │
│  ┌──────────────────────┐  ┌──────────────────────────────┐ │
│  │  Server Actions      │  │  API Routes                  │ │
│  │  /actions/analyze.ts │  │  /api/analyze/route.ts       │ │
│  └──────────┬───────────┘  └──────────┬───────────────────┘ │
│             │                          │                     │
│             └──────────────┬───────────┘                     │
│                            │                                 │
│                            ▼                                 │
│                  ┌──────────────────┐                        │
│                  │  HuggingFace     │                        │
│                  │  Client          │                        │
│                  └─────────┬────────┘                        │
└────────────────────────────┼──────────────────────────────────┘
                             │
                             ▼
                  ┌──────────────────────┐
                  │  Hugging Face API    │
                  │  (DistilBERT Model)  │
                  └──────────────────────┘
```

## 🛠️ Tech-Stack

- **Framework:** Next.js 14+ (App Router)
- **Sprache:** TypeScript
- **Styling:** Tailwind CSS
- **Charts:** Recharts
- **AI/ML:** Hugging Face Inference API
- **Modell:** distilbert-base-uncased-finetuned-sst-2-english
- **Optional:** Prisma + SQLite für History-Speicherung

## 📁 Projektstruktur

```
smart-sentiment-dashboard/
├── app/
│   ├── layout.tsx              # Root Layout mit Tailwind
│   ├── page.tsx                # Hauptseite (Server Component)
│   ├── loading.tsx             # Loading State
│   ├── globals.css             # Globale Styles
│   ├── api/
│   │   └── analyze/
│   │       └── route.ts        # API Route: POST /api/analyze
│   ├── actions/
│   │   └── analyze.ts          # Server Action (Alternative)
│   └── dashboard/
│       └── page.tsx            # Dashboard-Seite mit Charts
├── components/
│   ├── TextInput.tsx           # Client Component: Texteingabe
│   ├── SentimentResult.tsx     # Client Component: Ergebnis
│   ├── SentimentBadge.tsx      # Farbiges Badge (pos/neg/neutral)
│   ├── BatchAnalyzer.tsx       # Mehrere Texte analysieren
│   └── DashboardCharts.tsx     # Recharts Visualisierung
├── lib/
│   ├── huggingface.ts          # HF API Client
│   └── types.ts                # TypeScript Interfaces
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## ✨ Features

### Basis-Features
- ✅ **Einzeltext-Analyse:** Text eingeben und Sentiment analysieren
- ✅ **Farbige Badges:** Visuelle Darstellung von Positive/Negative/Neutral
- ✅ **Loading States:** Professionelle Lade-Animationen
- ✅ **Responsive Design:** Funktioniert auf allen Bildschirmgrößen

### Erweiterte Features
- ✅ **Dashboard mit Charts:** Pie- und Bar-Charts für Sentiment-Verteilung
- ✅ **Batch-Analyse:** Mehrere Texte gleichzeitig analysieren
- ✅ **Server Actions:** Alternative zu API Routes für moderne Next.js-Patterns
- 🔄 **History mit Prisma:** Analysen in SQLite-Datenbank speichern (optional)
- 🔄 **Wort-Highlighting:** Wichtige Wörter im Text hervorheben (optional)

### Bonus-Features
- 🔄 **CSV-Upload:** Texte aus CSV-Dateien importieren und analysieren
- 🔄 **Export-Funktionen:** Ergebnisse als CSV oder JSON exportieren
- 🔄 **Echtzeit-Updates:** Live-Aktualisierung des Dashboards

Legende: ✅ Implementiert | 🔄 Geplant

## 🎯 Meilensteine

| Phase | Beschreibung | Dauer | Next.js Lernfokus |
|-------|--------------|-------|-------------------|
| **Phase 1** | Next.js Projekt aufsetzen, Tailwind + Layout, HF API testen | ~1-2h | App Router, Layout, Env Variables |
| **Phase 2** | API Route `/api/analyze` bauen + TextInput Component | ~2-3h | Route Handlers, Client Components, fetch() |
| **Phase 3** | Server Action als Alternative implementieren | ~1-2h | Server Actions, useTransition, useActionState |
| **Phase 4** | Dashboard-Seite mit Recharts + Batch-Analyse | ~2-3h | Routing, Dynamic Routes, Data Fetching |
| **Phase 5** | History mit Prisma + SQLite (optional) | ~2-3h | Prisma Integration, Server Components für DB-Reads |

**Gesamtdauer:** ~8-13 Stunden (je nach Erfahrung)

## 💡 Konkretes Beispiel

### Input
```
"This movie was absolutely fantastic! I loved every minute of it."
```

### Output
```json
{
  "text": "This movie was absolutely fantastic! I loved every minute of it.",
  "sentiment": "POSITIVE",
  "confidence": 0.9998,
  "analyzedAt": "2024-02-13T10:30:00.000Z"
}
```

### Visuelle Darstellung
- 🟢 **POSITIVE** Badge
- **99.98%** Konfidenz-Score
- Zeitstempel der Analyse

## 🤖 Wo dir GitHub Copilot hilft

GitHub Copilot kann dich bei folgenden Aufgaben unterstützen:

1. **TypeScript Interfaces:** Automatische Generierung von Types basierend auf API-Responses
2. **React Components:** Boilerplate-Code für neue Components
3. **Tailwind Classes:** Vorschläge für Styling-Klassen
4. **API Routes:** Standard-Patterns für Error Handling und Validation
5. **Test Cases:** Automatische Generierung von Unit- und Integration-Tests
6. **Dokumentation:** JSDoc-Kommentare und README-Texte
7. **Refactoring:** Code-Verbesserungen und Best Practices

## 🚀 Getting Started

### Voraussetzungen

- Node.js 18+ installiert
- Hugging Face Account (kostenlos)
- Hugging Face Access Token ([hier erstellen](https://huggingface.co/settings/tokens))

### Installation

1. **Repository klonen:**
   ```bash
   git clone https://github.com/lulabad/smart-sentiment-dashboard.git
   cd smart-sentiment-dashboard
   ```

2. **Dependencies installieren:**
   ```bash
   npm install
   ```

3. **Environment Variables setzen:**
   ```bash
   cp .env.example .env
   ```
   
   Öffne `.env` und füge deinen Hugging Face Token ein:
   ```
   HF_ACCESS_TOKEN=hf_your_token_here
   ```

4. **Development Server starten:**
   ```bash
   npm run dev
   ```

5. **App öffnen:**
   Öffne [http://localhost:3000](http://localhost:3000) im Browser

### Build für Produktion

```bash
npm run build
npm start
```

## 📚 Verwendete Technologien im Detail

### Next.js App Router
Der moderne App Router von Next.js bietet:
- File-based routing
- Server und Client Components
- Streaming und Suspense
- Built-in API Routes

### Hugging Face Inference API
Vortrainiertes DistilBERT-Modell:
- **Modell:** `distilbert-base-uncased-finetuned-sst-2-english`
- **Task:** Text Classification (Sentiment Analysis)
- **Labels:** POSITIVE, NEGATIVE
- **Performance:** ~50ms Latenz, 99%+ Genauigkeit

### Tailwind CSS
Utility-first CSS Framework:
- Keine Custom CSS-Dateien nötig
- Responsive Design out-of-the-box
- Optimierte Build-Size durch Purging

### Recharts
React-basierte Chart-Bibliothek:
- Declarative API
- Responsive Charts
- Pie, Bar, Line Charts unterstützt

## 🔧 Erweiterte Konfiguration

### Prisma Integration (Optional)

1. **Prisma installieren:**
   ```bash
   npm install prisma @prisma/client
   npx prisma init --datasource-provider sqlite
   ```

2. **Schema definieren** (`prisma/schema.prisma`):
   ```prisma
   model Analysis {
     id          String   @id @default(cuid())
     text        String
     sentiment   String
     confidence  Float
     analyzedAt  DateTime @default(now())
   }
   ```

3. **Migration ausführen:**
   ```bash
   npx prisma migrate dev --name init
   ```

### Alternative Hugging Face Modelle

Das Projekt kann auch mit anderen Sentiment-Analyse-Modellen verwendet werden:
- `nlptown/bert-base-multilingual-uncased-sentiment` (Multilingual)
- `cardiffnlp/twitter-roberta-base-sentiment` (Twitter-optimiert)
- `finiteautomata/bertweet-base-sentiment-analysis` (Social Media)

Einfach den Modellnamen in `lib/huggingface.ts` anpassen.

## 🐛 Troubleshooting

### "HF_ACCESS_TOKEN is not set"
Stelle sicher, dass die `.env` Datei im Root-Verzeichnis existiert und den Token enthält.

### API-Rate-Limits
Hugging Face Free Tier hat Rate Limits. Bei vielen Anfragen auf Pro-Account upgraden.

### Build-Fehler
```bash
rm -rf .next node_modules
npm install
npm run build
```

## 📝 Lizenz

MIT License - siehe [LICENSE](LICENSE) Datei

## 🤝 Contributing

Contributions sind willkommen! Bitte erstelle einen Pull Request oder öffne ein Issue.

## 📧 Kontakt

Bei Fragen oder Feedback, öffne ein Issue auf GitHub.

---

**Happy Coding! 🚀**

Erstellt mit ❤️ und GitHub Copilot
