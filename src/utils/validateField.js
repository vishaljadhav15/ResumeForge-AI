import { validators } from "./validation";

export function validateField(field, value, extra = {}) {
  switch (field) {
    case "fullName":
      return validators.required(value)
        ? ""
        : "Full Name is required";

    case "professionalTitle":
      return validators.required(value)
        ? ""
        : "Professional Title is required";

    case "email":
      return validators.email(value)
        ? ""
        : "Please enter a valid email";

    case "phone":
      return validators.phone(value)
        ? ""
        : "Enter a valid phone number";

    case "linkedin":
    case "portfolio":
      return validators.url(value)
        ? ""
        : "Please enter a valid URL";

    case "city":
      return validators.required(value)
        ? ""
        : "City is required";

    case "country":
      return validators.required(value)
        ? ""
        : "Country is required";

    case "degree":
      return validators.required(value)
        ? ""
        : "Degree is required";

    case "institute":
      return validators.required(value)
        ? ""
        : "Institute is required";

    case "startYear":
      return validators.required(value)
        ? ""
        : "Start Year is required";

    case "endYear":
      if (!validators.required(value)) {
        return "End Year is required";
      }

      if (
        extra.startYear &&
        Number(value) < Number(extra.startYear)
      ) {
        return "End Year cannot be before Start Year";
      }

      return "";

    default:
      return "";
  }
}