import {
  Card,
  SectionTitle,
} from "../../common";

import { useState } from "react";
import { useResume } from "../../../context/ResumeContext";
import { validateField } from "../../../utils/validateField";

function SummaryForm() {
  const { resumeData, updateResume } = useResume();

  const MAX_LENGTH = 500;

  const [error, setError] = useState("");

  const handleChange = (e) => {
    updateResume("summary", e.target.value);
  };

  const handleBlur = (e) => {
    setError(
      validateField(
        "summary",
        e.target.value
      )
    );
  };

  return (
    <>
      <SectionTitle
        title="Professional Summary"
        subtitle="Write a short summary about yourself."
      />

      <Card>
        <div className="p-6">

          <label className="mb-2 block text-sm font-medium text-slate-700">
            Summary
            <span className="ml-1 text-red-500">*</span>
          </label>

          <textarea
            rows={8}
            maxLength={MAX_LENGTH}
            value={resumeData.summary}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Example: Frontend Developer with experience in React, JavaScript, Tailwind CSS and building modern responsive web applications..."
                        className={`w-full rounded-xl border p-4 outline-none transition focus:ring-2 ${
              error
                ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
            }`}
          />

          {error && (
            <p className="mt-2 text-sm text-red-500">
              {error}
            </p>
          )}

          <div className="mt-3 flex items-center justify-between">

            <div
              className={`text-sm ${
                resumeData.summary.trim().length >= 50
                  ? "text-green-600"
                  : "text-amber-600"
              }`}
            >
              Minimum 50 characters
            </div>

            <div className="text-sm text-slate-500">
              {resumeData.summary.length} / {MAX_LENGTH}
            </div>

          </div>

        </div>
      </Card>
    </>
  );
}

export default SummaryForm;