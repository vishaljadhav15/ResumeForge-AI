import { Card, SectionTitle } from "../../common";
import { useResume } from "../../../context/ResumeContext";

function SummaryForm() {
  const { resumeData, updateResume } = useResume();

  const MAX_LENGTH = 500;

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
          </label>

          <textarea
            rows={8}
            maxLength={MAX_LENGTH}
            value={resumeData.summary}
            onChange={(e) =>
              updateResume("summary", e.target.value)
            }
            placeholder="Example: Frontend Developer with experience in React, JavaScript, Tailwind CSS and building modern responsive web applications..."
            className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />

          <div className="mt-2 text-right text-sm text-slate-500">
            {resumeData.summary.length} / {MAX_LENGTH}
          </div>
        </div>
      </Card>
    </>
  );
}

export default SummaryForm;