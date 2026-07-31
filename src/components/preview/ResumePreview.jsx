import { useResume } from "../../context/ResumeContext";

function ResumePreview() {
  const { resumeData } = useResume();
  return (
    <section className="w-[460px] bg-slate-100 border-l border-slate-200 p-8 overflow-y-auto">
      <h2 className="mb-6 text-xl font-semibold text-slate-800">
        Live Preview
      </h2>

      <div className="mx-auto w-full max-w-[430px] h-[620px] bg-white rounded-md shadow-2xl">
        <div className="h-full p-10">
          {/* Header */}

          <div className="border-b border-slate-200 pb-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
              {resumeData.fullName || "JOHN DOE"}
            </h1>

            <p className="mt-2 text-base font-semibold uppercase tracking-[5px] text-blue-600">
              {resumeData.professionalTitle || "Frontend Developer"}
            </p>

            <div className="mt-6 space-y-2 text-sm text-slate-600">
              <div className="flex flex-wrap justify-center gap-4">
                {resumeData.email && <span>{resumeData.email}</span>}

                {resumeData.phone && <span>{resumeData.phone}</span>}
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                {resumeData.linkedin && <span>{resumeData.linkedin}</span>}

                {resumeData.portfolio && <span>{resumeData.portfolio}</span>}
              </div>

              <div>
                {(resumeData.city || resumeData.country) && (
                  <span>
                    {resumeData.city}

                    {resumeData.city && resumeData.country ? ", " : ""}

                    {resumeData.country}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Summary */}

          <div className="mt-8">
            <h3 className="mb-3 border-b border-slate-200 pb-2 text-sm font-bold uppercase tracking-wider text-blue-700">
              Summary
            </h3>

            <p className="text-sm leading-7 text-slate-700">
              Your resume preview will appear here as you fill the information
              from the editor panel.
            </p>
          </div>

          {/* Experience */}

          <div className="mt-8">
            <h3 className="mb-3 border-b border-slate-200 pb-2 text-sm font-bold uppercase tracking-wider text-blue-700">
              Experience
            </h3>

            <p className="text-sm text-slate-500">No experience added yet.</p>
          </div>

          {/* Education */}

          <div className="mt-8">
            <h3 className="mb-3 border-b border-slate-200 pb-2 text-sm font-bold uppercase tracking-wider text-blue-700">
              Education
            </h3>

            <p className="text-sm text-slate-500">No education added yet.</p>
          </div>

          {/* Skills */}

          <div className="mt-8">
            <h3 className="mb-3 border-b border-slate-200 pb-2 text-sm font-bold uppercase tracking-wider text-blue-700">
              Skills
            </h3>

            <p className="text-sm text-slate-500">
              HTML • CSS • JavaScript • React
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumePreview;
