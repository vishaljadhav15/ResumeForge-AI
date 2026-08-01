function Input({
  label,
  placeholder,
  type = "text",
  value = "",
  onChange,
  name,
  min,
  max,
  step,
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
        placeholder={placeholder}
        min={min}
        max={max}
        step={step}
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
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-200
          outline-none
          transition
        "
      />
    </div>
  );
}

export default Input;