import { Button, Card, Input, SectionTitle } from "../../common";
import { useState } from "react";
import { useResume } from "../../../context/ResumeContext";
import { validators } from "../../../utils/validation";
function PersonalForm() {
  const { resumeData, updateResume } = useResume();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    updateResume(e.target.name, e.target.value);
  };

  const handleBlur = (field, value) => {
    let error = "";

    switch (field) {
      case "fullName":
        if (!validators.required(value)) {
          error = "Full Name is required";
        }
        break;

      case "professionalTitle":
        if (!validators.required(value)) {
          error = "Professional Title is required";
        }
        break;

      case "email":
        if (!validators.email(value)) {
          error = "Please enter a valid email";
        }
        break;

      case "phone":
        if (!validators.phone(value.replace(/\s+/g, ""))) {
          error = "Enter a valid phone number";
        }
        break;

      case "portfolio":
        if (!validators.url(value)) {
          error = "Please enter a valid URL";
        }
        break;

      case "linkedin":
        if (!validators.url(value)) {
          error = "Please enter a valid URL";
        }
        break;

      case "city":
        if (!validators.required(value)) {
          error = "City is required";
        }
        break;

      case "country":
        if (!validators.required(value)) {
          error = "Country is required";
        }
        break;

      default:
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [field]: error,
    }));
  };

  return (
    <>
      <SectionTitle
        title="Personal Information"
        subtitle="Start building your professional resume."
      />

      <Card>
        <div className="p-6">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Input
              label="Full Name"
              name="fullName"
              placeholder="John Doe"
              value={resumeData.fullName}
              onChange={handleChange}
              onBlur={(e) => handleBlur("fullName", e.target.value)}
              error={errors.fullName}
            />

            <Input
              label="Professional Title"
              name="professionalTitle"
              placeholder="Frontend Developer"
              value={resumeData.professionalTitle}
              onChange={handleChange}
              onBlur={(e) => handleBlur("professionalTitle", e.target.value)}
              error={errors.professionalTitle}
            />

            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="john@example.com"
              value={resumeData.email}
              onChange={handleChange}
              onBlur={(e) => handleBlur("email", e.target.value)}
              error={errors.email}
            />

            <Input
              label="Phone"
              name="phone"
              placeholder="+91 9876543210"
              value={resumeData.phone}
              onChange={handleChange}
              onBlur={(e) => handleBlur("phone", e.target.value)}
              error={errors.phone}
            />

            <Input
              label="LinkedIn"
              name="linkedin"
              placeholder="linkedin.com/in/johndoe"
              value={resumeData.linkedin}
              onChange={handleChange}
              onBlur={(e) => handleBlur("linkedin", e.target.value)}
              error={errors.linkedin}
            />

            <Input
              label="Portfolio Website"
              name="portfolio"
              placeholder="https://yourportfolio.com"
              value={resumeData.portfolio}
              onChange={handleChange}
              onBlur={(e) => handleBlur("portfolio", e.target.value)}
              error={errors.portfolio}
            />

            <Input
              label="City"
              name="city"
              placeholder="Mumbai"
              value={resumeData.city}
              onChange={handleChange}
              onBlur={(e) => handleBlur("city", e.target.value)}
              error={errors.city}
            />

            <Input
              label="Country"
              name="country"
              placeholder="India"
              value={resumeData.country}
              onChange={handleChange}
              onBlur={(e) => handleBlur("country", e.target.value)}
              error={errors.country}
            />
          </div>

          <div className="mt-8 flex justify-end">
            <Button>Save & Continue →</Button>
          </div>
        </div>
      </Card>
    </>
  );
}

export default PersonalForm;
