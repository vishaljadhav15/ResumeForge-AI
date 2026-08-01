import { useResume } from "../../context/ResumeContext";
import { Mail, Phone, Globe, MapPin, Link } from "lucide-react";

function ResumePreview() {
  const { resumeData } = useResume();

  return (
    <section className="w-[460px] bg-slate-100 border-l border-slate-200 p-8 overflow-y-auto">
      <h2 className="mb-6 text-xl font-semibold text-slate-800">
        Live Preview
      </h2>

      <div className="mx-auto h-[620px] w-full max-w-[430px] rounded-md bg-white shadow-2xl">
        <div className="h-full p-10">
          {/* Header */}

          <div className="border-b border-slate-200 pb-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
              {resumeData.fullName || "JOHN DOE"}
            </h1>

            <p className="mt-2 text-base font-semibold uppercase tracking-[5px] text-blue-600">
              {resumeData.professionalTitle || "Frontend Developer"}
            </p>

            <div className="mt-6 space-y-3 text-sm text-slate-600">
              {(resumeData.email || resumeData.phone) && (
                <div className="flex flex-wrap justify-center gap-6">
                  {resumeData.email && (
                    <div className="flex items-center gap-2">
                      <Mail size={14} />
                      <span>{resumeData.email}</span>
                    </div>
                  )}

                  {resumeData.phone && (
                    <div className="flex items-center gap-2">
                      <Phone size={14} />
                      <span>{resumeData.phone}</span>
                    </div>
                  )}
                </div>
              )}

              {(resumeData.linkedin || resumeData.portfolio) && (
                <div className="flex flex-wrap justify-center gap-6">
                  {resumeData.linkedin && (
                    <div className="flex items-center gap-2">
                      <Link size={14} />
                      <span>{resumeData.linkedin}</span>
                    </div>
                  )}

                  {resumeData.portfolio && (
                    <div className="flex items-center gap-2">
                      <Globe size={14} />
                      <span>{resumeData.portfolio}</span>
                    </div>
                  )}
                </div>
              )}

              {(resumeData.city || resumeData.country) && (
                <div className="flex justify-center">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />

                    <span>
                      {resumeData.city}
                      {resumeData.city && resumeData.country ? ", " : ""}
                      {resumeData.country}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Summary */}

          <div className="mt-8">
            <h3 className="mb-3 border-b border-slate-200 pb-2 text-sm font-bold uppercase tracking-wider text-blue-700">
              Summary
            </h3>

            <p className="text-sm leading-7 text-slate-700">
              Your professional summary will appear here.
            </p>
          </div>

          {/* Experience */}

          <div className="mt-8">
            <h3 className="mb-3 border-b border-slate-200 pb-2 text-sm font-bold uppercase tracking-wider text-blue-700">
              Experience
            </h3>

            <p className="text-sm text-slate-500">
              No experience added yet.
            </p>
          </div>

          {/* Education */}

          <div className="mt-8">
            <h3 className="mb-3 border-b border-slate-200 pb-2 text-sm font-bold uppercase tracking-wider text-blue-700">
              Education
            </h3>

            {resumeData.education.length === 0 ? (
              <p className="text-sm text-slate-500">
                No education added yet.
              </p>
            ) : (
              <div className="space-y-4">
                {resumeData.education.map((education) => (
                  <div key={education.id}>
                    <h4 className="text-sm font-semibold text-slate-800">
                      {education.degree || "Degree"}
                    </h4>

                    <p className="text-xs text-slate-600">
                      {education.institute || "Institute"}
                    </p>

                    <p className="text-xs text-slate-500">
                      {education.startYear}
                      {education.startYear && education.endYear ? " - " : ""}
                      {education.endYear}
                    </p>

                    {education.cgpa && (
                      <p className="text-xs text-slate-500">
                        CGPA: {education.cgpa}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Skills */}

          <div className="mt-8">
            <h3 className="mb-3 border-b border-slate-200 pb-2 text-sm font-bold uppercase tracking-wider text-blue-700">
              Skills
            </h3>

            <p className="text-sm text-slate-500">
              Skills will appear here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumePreview;