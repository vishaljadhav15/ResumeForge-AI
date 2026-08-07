import { validators } from "./validation";

export function validateField(field, value, extra = {}) {
  switch (field) {
    // =========================
    // Personal Information
    // =========================

    case "fullName":
      return validators.required(value) ? "" : "Full Name is required";

    case "professionalTitle":
      return validators.required(value) ? "" : "Professional Title is required";

    case "email":
      return validators.email(value) ? "" : "Please enter a valid email";

    case "phone":
      return validators.phone(value) ? "" : "Enter a valid phone number";

    case "linkedin":
    case "portfolio":
      return validators.url(value) ? "" : "Please enter a valid URL";

    case "city":
      return validators.required(value) ? "" : "City is required";

    case "country":
      return validators.required(value) ? "" : "Country is required";

    // =========================
    // Education
    // =========================

    case "degree":
      return validators.required(value) ? "" : "Degree is required";

    case "institute":
      return validators.required(value) ? "" : "Institute is required";

    case "startYear":
      return validators.required(value) ? "" : "Start Year is required";

    case "endYear":
      if (!validators.required(value)) {
        return "End Year is required";
      }

      if (extra.startYear && Number(value) < Number(extra.startYear)) {
        return "End Year cannot be before Start Year";
      }

      return "";

    // =========================
    // Experience
    // =========================

    case "company":
      return validators.required(value) ? "" : "Company Name is required";

    case "jobTitle":
      return validators.required(value) ? "" : "Job Title is required";

    case "employmentType":
      return validators.required(value) ? "" : "Employment Type is required";

    case "location":
      return validators.required(value) ? "" : "Location is required";

    case "startDate":
      return validators.required(value) ? "" : "Start Date is required";

    case "endDate":
      if (!validators.required(value)) {
        return "End Date is required";
      }

      if (extra.startDate && value < extra.startDate) {
        return "End Date cannot be before Start Date";
      }

      return "";

    // =========================
    // Projects
    // =========================

    case "title":
      return validators.required(value) ? "" : "Project Title is required";

    case "description":
      return validators.required(value)
        ? ""
        : "Project Description is required";

    case "githubUrl":
      return validators.url(value) ? "" : "Please enter a valid GitHub URL";

    case "liveUrl":
      return validators.url(value) ? "" : "Please enter a valid Live Demo URL";

    // =========================
    // Certificates
    // =========================

    case "name":
      return validators.required(value) ? "" : "Certificate Name is required";

    case "organization":
      return validators.required(value) ? "" : "Organization is required";

    case "issueDate":
      return validators.required(value) ? "" : "Issue Date is required";

    case "credentialUrl":
      return validators.url(value) ? "" : "Please enter a valid Credential URL";
      
    // =========================
    // Summary
    // =========================

    case "summary":
      if (!validators.required(value)) {
        return "Professional Summary is required";
      }

      if (value.trim().length < 50) {
        return "Summary should be at least 50 characters";
      }

      return "";
    default:
      return "";
  }
}
