import {
  Card,
  Input,
  SectionTitle,
  EmptyState,
  DeleteButton,
  SectionHeader,
} from "../../common";

import { useState } from "react";
import { useResume } from "../../../context/ResumeContext";
import { validateField } from "../../../utils/validateField";

function ExperienceForm() {
  const {
    resumeData,
    addExperience,
    updateExperience,
    deleteExperience,
  } = useResume();

  const [errors, setErrors] = useState({});

  const handleChange = (id, field, value) => {
    updateExperience(id, field, value);
  };

  const handleBlur = (id, field, value, experience) => {
    let error = "";

    if (field === "endDate") {
      error = validateField(field, value, {
        startDate: experience.startDate,
      });
    } else {
      error = validateField(field, value);
    }

    setErrors((prev) => ({
      ...prev,
      [`${id}-${field}`]: error,
    }));
  };

  return (
    <>
      <SectionTitle
        title="Experience"
        subtitle="Add your work experience."
      />

      <Card>
        <div className="p-6">

          <SectionHeader
            title="Experience Details"
            buttonText="+ Add Experience"
            onClick={addExperience}
          />

          {resumeData.experience.length === 0 ? (
            <EmptyState
              title="No Experience Added"
              description="Click 'Add Experience' to add your work experience."
            />
          ) : (
            <div className="space-y-6">

              {resumeData.experience.map((experience, index) => (

                <Card key={experience.id}>
                  <div className="p-6">

                    <div className="mb-5 flex items-center justify-between">

                      <h4 className="text-lg font-semibold">
                        Experience #{index + 1}
                      </h4>

                      <DeleteButton
                        onClick={() =>
                          deleteExperience(experience.id)
                        }
                      />

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
                        onBlur={(e) =>
                          handleBlur(
                            experience.id,
                            "company",
                            e.target.value,
                            experience
                          )
                        }
                        error={
                          errors[
                            `${experience.id}-company`
                          ]
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
                        onBlur={(e) =>
                          handleBlur(
                            experience.id,
                            "jobTitle",
                            e.target.value,
                            experience
                          )
                        }
                        error={
                          errors[
                            `${experience.id}-jobTitle`
                          ]
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
                        onBlur={(e) =>
                          handleBlur(
                            experience.id,
                            "employmentType",
                            e.target.value,
                            experience
                          )
                        }
                        error={
                          errors[
                            `${experience.id}-employmentType`
                          ]
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
                        onBlur={(e) =>
                          handleBlur(
                            experience.id,
                            "location",
                            e.target.value,
                            experience
                          )
                        }
                        error={
                          errors[
                            `${experience.id}-location`
                          ]
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
                        onBlur={(e) =>
                          handleBlur(
                            experience.id,
                            "startDate",
                            e.target.value,
                            experience
                          )
                        }
                        error={
                          errors[
                            `${experience.id}-startDate`
                          ]
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
                        onBlur={(e) =>
                          handleBlur(
                            experience.id,
                            "endDate",
                            e.target.value,
                            experience
                          )
                        }
                        error={
                          errors[
                            `${experience.id}-endDate`
                          ]
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
                        className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
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