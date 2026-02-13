"use client";

interface Props {
  sentiment: string;
}

export default function SentimentBadge({ sentiment }: Props) {
  const normalized = sentiment.toUpperCase();
  
  const getStyles = () => {
    switch (normalized) {
      case "POSITIVE":
        return {
          emoji: "🟢",
          text: "POSITIVE",
          className: "bg-green-100 text-green-800 border-green-300"
        };
      case "NEGATIVE":
        return {
          emoji: "🔴",
          text: "NEGATIVE",
          className: "bg-red-100 text-red-800 border-red-300"
        };
      default:
        return {
          emoji: "🟡",
          text: "NEUTRAL",
          className: "bg-yellow-100 text-yellow-800 border-yellow-300"
        };
    }
  };

  const styles = getStyles();

  return (
    <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border font-semibold text-sm ${styles.className}`}>
      <span className="text-lg">{styles.emoji}</span>
      {styles.text}
    </span>
  );
}
