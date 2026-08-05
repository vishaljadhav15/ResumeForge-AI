function SummaryPreview({ summary }) {
  return (
    <div className="mt-8">
      <h3 className="mb-3 border-b border-slate-200 pb-2 text-sm font-bold uppercase tracking-wider text-blue-700">
        Summary
      </h3>

      <p className="text-sm leading-7 text-slate-700 whitespace-pre-line">
        {summary?.trim()
          ? summary
          : "Your professional summary will appear here."}
      </p>
    </div>
  );
}

export default SummaryPreview;