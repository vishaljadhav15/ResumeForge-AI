import {
  Card,
  Input,
  SectionTitle,
  EmptyState,
  DeleteButton,
  SectionHeader,
} from "../../common";

import { useResume } from "../../../context/ResumeContext";

function EducationForm() {
  const {
    resumeData,
    addEducation,
    updateEducation,
    deleteEducation,
  } = useResume();

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
                        onClick={() => deleteEducation(education.id)}
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                      <Input
                        label="Degree"
                        placeholder="Bachelor of Computer Science"
                        value={education.degree}
                        onChange={(e) =>
                          handleChange(
                            education.id,
                            "degree",
                            e.target.value
                          )
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
                            e.target.value
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
                            e.target.value
                          )
                        }
                      />

                      <Input
                        label="End Year"
                        placeholder="2025"
                        value={education.endYear}
                        onChange={(e) =>
                          handleChange(
                            education.id,
                            "endYear",
                            e.target.value
                          )
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