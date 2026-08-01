import { Button, Card, Input, SectionTitle } from "../../common";
import { useResume } from "../../../context/ResumeContext";

function EducationForm() {
  const { resumeData, addEducation, updateEducation, deleteEducation } =
    useResume();

  const handleChange = (id, field, value) => {
    updateEducation(id, field, value);
  };

  return (
    <>
      <SectionTitle
        title="Education"
        subtitle="Add your educational qualifications."
      />

      <Card>
        <div className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-semibold text-slate-800">
              Education Details
            </h3>

            <Button onClick={addEducation}>+ Add Education</Button>
          </div>

          {resumeData.education.length === 0 ? (
            <div className="rounded-xl border-2 border-dashed border-slate-300 p-10 text-center">
              <h4 className="text-lg font-semibold text-slate-700">
                No Education Added
              </h4>

              <p className="mt-2 text-slate-500">
                Click "Add Education" to create your first education entry.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {resumeData.education.map((education, index) => (
                <Card key={education.id}>
                  <div className="p-6">
                    <div className="mb-5 flex items-center justify-between">
                      <h4 className="text-lg font-semibold text-slate-800">
                        Education #{index + 1}
                      </h4>

                      <button
                        onClick={() => deleteEducation(education.id)}
                        className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                      <Input
                        label="Degree"
                        placeholder="Bachelor of Computer Science"
                        value={education.degree}
                        onChange={(e) =>
                          handleChange(education.id, "degree", e.target.value)
                        }
                      />

                      <Input
                        label="Institute"
                        placeholder="ABC University"
                        value={education.institute}
                        onChange={(e) =>
                          handleChange(
                            education.id,
                            "institute",
                            e.target.value,
                          )
                        }
                      />

                      <Input
                        label="Start Year"
                        placeholder="2021"
                        value={education.startYear}
                        onChange={(e) =>
                          handleChange(
                            education.id,
                            "startYear",
                            e.target.value,
                          )
                        }
                      />

                      <Input
                        label="End Year"
                        placeholder="2025"
                        value={education.endYear}
                        onChange={(e) =>
                          handleChange(education.id, "endYear", e.target.value)
                        }
                      />

                      <Input
                        label="CGPA"
                        type="number"
                        min={0}
                        max={10}
                        step="0.01"
                        placeholder="8.75"
                        value={education.cgpa}
                        onChange={(e) => {
                          const value = e.target.value;

                          if (value === "") {
                            handleChange(education.id, "cgpa", "");
                            return;
                          }

                          const number = Number(value);

                          if (number >= 0 && number <= 10) {
                            handleChange(education.id, "cgpa", value);
                          }
                        }}
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </Card>
    </>
  );
}

export default EducationForm;
