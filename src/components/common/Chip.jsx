function Chip({
  text,
  onDelete,
}) {
  return (
    <div className="flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
      <span>{text}</span>

      <button
        type="button"
        onClick={onDelete}
        className="font-bold text-red-500 hover:text-red-700"
      >
        ×
      </button>
    </div>
  );
}

export default Chip;