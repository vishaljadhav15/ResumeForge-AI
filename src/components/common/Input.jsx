function Input({
  label,
  placeholder,
  type = "text",
  value = "",
  onChange,
  onKeyDown,
  name,
  min,
  max,
  step,
  disabled = false,
  required = false,
  autoFocus = false,
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        required={required}
        autoFocus={autoFocus}
        className="
          w-full
          rounded-xl
          border
          border-gray-300
          bg-white
          px-4
          py-3
          text-gray-900
          placeholder:text-gray-400
          outline-none
          transition
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-200
          disabled:cursor-not-allowed
          disabled:bg-gray-100
          disabled:text-gray-500
        "
      />
    </div>
  );
}

export default Input;