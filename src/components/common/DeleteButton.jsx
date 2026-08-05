function DeleteButton({
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        rounded-lg
        bg-red-500
        px-4
        py-2
        text-white
        transition
        hover:bg-red-600
      "
    >
      Delete
    </button>
  );
}

export default DeleteButton;