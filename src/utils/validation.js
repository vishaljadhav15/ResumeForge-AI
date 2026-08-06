export const validators = {
  required: (value) =>
    value.trim() !== "",

  email: (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),

  phone: (value) => {
  const cleaned = value.replace(/[^\d]/g, "");
  return cleaned.length >= 10 && cleaned.length <= 15;
},

  url: (value) =>
    value === "" ||
    /^https?:\/\/.+/i.test(value),
};