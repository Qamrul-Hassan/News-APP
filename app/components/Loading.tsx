export default function Loading() {
  return (
    <div className="flex min-h-[40vh] w-full flex-col items-center justify-center gap-4" role="status" aria-live="polite" aria-label="Loading content">
      <div className="h-12 w-12 rounded-full border-4 border-slate-200 border-t-slate-700 motion-safe:animate-spin" />
      <p className="text-sm font-semibold text-slate-600">Loading latest stories...</p>
    </div>
  );
}
