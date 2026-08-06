function Input({
  label,
  placeholder,
  type = "text",
  value = "",
  onChange,
  onBlur,
  onKeyDown,
  name,
  min,
  max,
  step,
  disabled = false,
  required = false,
  autoFocus = false,
  error = "",
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        {label}

        {required && (
          <span className="ml-1 text-red-500">*</span>
        )}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        required={required}
        autoFocus={autoFocus}
        aria-invalid={!!error}
        aria-describedby={
          error ? `${name}-error` : undefined
        }
        className={`
          w-full
          rounded-xl
          border
          bg-white
          px-4
          py-3
          text-gray-900
          placeholder:text-gray-400
          outline-none
          transition

          ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-200"
              : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
          }

          focus:ring-2

          disabled:cursor-not-allowed
          disabled:bg-gray-100
          disabled:text-gray-500
        `}
      />

      {error && (
        <p
          id={`${name}-error`}
          className="mt-1 text-sm text-red-500"
        >
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;