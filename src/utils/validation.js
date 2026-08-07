export const validators = {
  // =========================
  // Required Field
  // =========================
  required: (value) => {
    return String(value ?? "").trim() !== "";
  },

  // =========================
  // Email
  // =========================
  email: (value) => {
    if (String(value ?? "").trim() === "") {
      return false;
    }

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  },

  // =========================
  // Phone Number
  // Supports:
  // +91 9876543210
  // 9876543210
  // 98765 43210
  // =========================
  phone: (value) => {
    const cleaned = String(value ?? "").replace(/[^\d]/g, "");

    return cleaned.length >= 10 && cleaned.length <= 15;
  },

  // =========================
  // URL
  // Supports:
  // https://...
  // http://...
  // Empty value allowed
  // =========================
  url: (value) => {
    const url = String(value ?? "").trim();

    if (url === "") {
      return true;
    }

    return /^https?:\/\/.+/i.test(url);
  },
};