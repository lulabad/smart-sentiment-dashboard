export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="space-y-4 text-center">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="text-gray-600 font-medium">Lädt...</p>
      </div>
    </div>
  );
}
