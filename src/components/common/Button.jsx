function Button({
  children,
  variant = "primary",
  type = "button",
  onClick,
  disabled = false,
}) {
  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white",

    secondary:
      "bg-white border border-gray-300 hover:bg-gray-100 text-gray-800",

    success:
      "bg-green-600 hover:bg-green-700 text-white",

    danger:
      "bg-red-600 hover:bg-red-700 text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        px-5
        py-2.5
        rounded-xl
        font-medium
        transition-all
        duration-200
        ${variants[variant]}
        ${
          disabled
            ? "cursor-not-allowed opacity-50"
            : ""
        }
      `}
    >
      {children}
    </button>
  );
}

export default Button;