import { Button, Card, Input, SectionTitle } from "../../common";
import { useResume } from "../../../context/ResumeContext";

function ExperienceForm() {
  const {
    resumeData,
    addExperience,
    updateExperience,
    deleteExperience,
  } = useResume();

  const handleChange = (id, field, value) => {
    updateExperience(id, field, value);
  };

  return (
    <>
      <SectionTitle
        title="Experience"
        subtitle="Add your work experience."
      />

      <Card>
        <div className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-semibold text-slate-800">
              Experience Details
            </h3>

            <Button onClick={addExperience}>
              + Add Experience
            </Button>
          </div>

          {resumeData.experience.length === 0 ? (
            <div className="rounded-xl border-2 border-dashed border-slate-300 p-10 text-center">
              <h4 className="text-lg font-semibold text-slate-700">
                No Experience Added
              </h4>

              <p className="mt-2 text-slate-500">
                Click "Add Experience" to add your work experience.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {resumeData.experience.map((experience, index) => (
                <Card key={experience.id}>
                  <div className="p-6">
                    <div className="mb-5 flex items-center justify-between">
                      <h4 className="text-lg font-semibold">
                        Experience #{index + 1}
                      </h4>

                      <button
                        onClick={() =>
                          deleteExperience(experience.id)
                        }
                        className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                      <Input
                        label="Company Name"
                        placeholder="Google"
                        value={experience.company}
                        onChange={(e) =>
                          handleChange(
                            experience.id,
                            "company",
                            e.target.value
                          )
                        }
                      />

                      <Input
                        label="Job Title"
                        placeholder="Frontend Developer"
                        value={experience.jobTitle}
                        onChange={(e) =>
                          handleChange(
                            experience.id,
                            "jobTitle",
                            e.target.value
                          )
                        }
                      />

                      <Input
                        label="Employment Type"
                        placeholder="Full Time"
                        value={experience.employmentType}
                        onChange={(e) =>
                          handleChange(
                            experience.id,
                            "employmentType",
                            e.target.value
                          )
                        }
                      />

                      <Input
                        label="Location"
                        placeholder="Pune"
                        value={experience.location}
                        onChange={(e) =>
                          handleChange(
                            experience.id,
                            "location",
                            e.target.value
                          )
                        }
                      />

                      <Input
                        label="Start Date"
                        type="month"
                        value={experience.startDate}
                        onChange={(e) =>
                          handleChange(
                            experience.id,
                            "startDate",
                            e.target.value
                          )
                        }
                      />

                      <Input
                        label="End Date"
                        type="month"
                        value={experience.endDate}
                        onChange={(e) =>
                          handleChange(
                            experience.id,
                            "endDate",
                            e.target.value
                          )
                        }
                      />

                    </div>

                    <div className="mt-5">
                      <label className="mb-2 block text-sm font-medium">
                        Job Description
                      </label>

                      <textarea
                        rows={5}
                        value={experience.description}
                        onChange={(e) =>
                          handleChange(
                            experience.id,
                            "description",
                            e.target.value
                          )
                        }
                        placeholder="Describe your work..."
                        className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
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

export default ExperienceForm;