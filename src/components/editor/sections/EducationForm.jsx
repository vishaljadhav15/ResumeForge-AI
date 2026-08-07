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

function EducationForm() {
  const {
    resumeData,
    addEducation,
    updateEducation,
    deleteEducation,
  } = useResume();

  const [errors, setErrors] = useState({});

  const handleChange = (id, field, value) => {
    updateEducation(id, field, value);
  };

  const handleBlur = (id, field, value, education) => {
    const error = validateField(field, value, {
      startYear: education.startYear,
    });

    setErrors((prev) => ({
      ...prev,
      [`${id}-${field}`]: error,
    }));
  };

  return (
    <>
      <SectionTitle
        title="Education"
        subtitle="Add your educational qualifications."
      />

      <Card>
        <div className="p-6">
          <SectionHeader
            title="Education Details"
            buttonText="+ Add Education"
            onClick={addEducation}
          />

          {resumeData.education.length === 0 ? (
            <EmptyState
              title="No Education Added"
              description="Click 'Add Education' to create your first education entry."
            />
          ) : (
            <div className="space-y-6">
              {resumeData.education.map((education, index) => (
                <Card key={education.id}>
                  <div className="p-6">

                    <div className="mb-5 flex items-center justify-between">
                      <h4 className="text-lg font-semibold text-slate-800">
                        Education #{index + 1}
                      </h4>

                      <DeleteButton
                        onClick={() =>
                          deleteEducation(education.id)
                        }
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                      <Input
                        label="Degree"
                        required
                        placeholder="Bachelor of Computer Science"
                        value={education.degree}
                        onChange={(e) =>
                          handleChange(
                            education.id,
                            "degree",
                            e.target.value
                          )
                        }
                        onBlur={(e) =>
                          handleBlur(
                            education.id,
                            "degree",
                            e.target.value,
                            education
                          )
                        }
                        error={
                          errors[
                            `${education.id}-degree`
                          ]
                        }
                      />

                      <Input
                        label="Institute"
                        required
                        placeholder="ABC University"
                        value={education.institute}
                        onChange={(e) =>
                          handleChange(
                            education.id,
                            "institute",
                            e.target.value
                          )
                        }
                        onBlur={(e) =>
                          handleBlur(
                            education.id,
                            "institute",
                            e.target.value,
                            education
                          )
                        }
                        error={
                          errors[
                            `${education.id}-institute`
                          ]
                        }
                      />
                                            <Input
                        label="Start Year"
                        required
                        type="number"
                        placeholder="2021"
                        value={education.startYear}
                        onChange={(e) =>
                          handleChange(
                            education.id,
                            "startYear",
                            e.target.value
                          )
                        }
                        onBlur={(e) =>
                          handleBlur(
                            education.id,
                            "startYear",
                            e.target.value,
                            education
                          )
                        }
                        error={
                          errors[
                            `${education.id}-startYear`
                          ]
                        }
                      />

                      <Input
                        label="End Year"
                        required
                        type="number"
                        placeholder="2025"
                        value={education.endYear}
                        onChange={(e) =>
                          handleChange(
                            education.id,
                            "endYear",
                            e.target.value
                          )
                        }
                        onBlur={(e) =>
                          handleBlur(
                            education.id,
                            "endYear",
                            e.target.value,
                            education
                          )
                        }
                        error={
                          errors[
                            `${education.id}-endYear`
                          ]
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
                            handleChange(
                              education.id,
                              "cgpa",
                              ""
                            );
                            return;
                          }

                          const number = Number(value);

                          if (
                            number >= 0 &&
                            number <= 10
                          ) {
                            handleChange(
                              education.id,
                              "cgpa",
                              value
                            );
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