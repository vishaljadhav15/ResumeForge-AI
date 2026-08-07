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

function ProjectsForm() {
  const {
    resumeData,
    addProject,
    updateProject,
    deleteProject,
  } = useResume();

  const [errors, setErrors] = useState({});

  const handleChange = (id, field, value) => {
    updateProject(id, field, value);
  };

  const handleBlur = (id, field, value) => {
    const error = validateField(field, value);

    setErrors((prev) => ({
      ...prev,
      [`${id}-${field}`]: error,
    }));
  };

  return (
    <>
      <SectionTitle
        title="Projects"
        subtitle="Showcase your best projects."
      />

      <Card>
        <div className="p-6">
          <SectionHeader
            title="Project Details"
            buttonText="+ Add Project"
            onClick={addProject}
          />

          {resumeData.projects.length === 0 ? (
            <EmptyState
              title="No Projects Added"
              description="Click 'Add Project' to add your first project."
            />
          ) : (
            <div className="space-y-6">
              {resumeData.projects.map((project, index) => (
                <Card key={project.id}>
                  <div className="p-6">
                    <div className="mb-5 flex items-center justify-between">
                      <h4 className="text-lg font-semibold">
                        Project #{index + 1}
                      </h4>

                      <DeleteButton
                        onClick={() => deleteProject(project.id)}
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-5">

                      <Input
                        label="Project Title"
                        required
                        placeholder="ResumeForge AI"
                        value={project.title}
                        onChange={(e) =>
                          handleChange(
                            project.id,
                            "title",
                            e.target.value
                          )
                        }
                        onBlur={(e) =>
                          handleBlur(
                            project.id,
                            "title",
                            e.target.value
                          )
                        }
                        error={
                          errors[
                            `${project.id}-title`
                          ]
                        }
                      />

                      <Input
                        label="Technologies Used"
                        placeholder="React, Tailwind CSS, Context API"
                        value={project.technologies}
                        onChange={(e) =>
                          handleChange(
                            project.id,
                            "technologies",
                            e.target.value
                          )
                        }
                      />
                                            <Input
                        label="GitHub Repository"
                        placeholder="https://github.com/username/project"
                        value={project.githubUrl}
                        onChange={(e) =>
                          handleChange(
                            project.id,
                            "githubUrl",
                            e.target.value
                          )
                        }
                        onBlur={(e) =>
                          handleBlur(
                            project.id,
                            "githubUrl",
                            e.target.value
                          )
                        }
                        error={
                          errors[
                            `${project.id}-githubUrl`
                          ]
                        }
                      />

                      <Input
                        label="Live Demo URL"
                        placeholder="https://resumeforge-ai.vercel.app"
                        value={project.liveUrl}
                        onChange={(e) =>
                          handleChange(
                            project.id,
                            "liveUrl",
                            e.target.value
                          )
                        }
                        onBlur={(e) =>
                          handleBlur(
                            project.id,
                            "liveUrl",
                            e.target.value
                          )
                        }
                        error={
                          errors[
                            `${project.id}-liveUrl`
                          ]
                        }
                      />

                      <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                          Project Description
                          <span className="ml-1 text-red-500">*</span>
                        </label>

                        <textarea
                          rows={5}
                          value={project.description}
                          onChange={(e) =>
                            handleChange(
                              project.id,
                              "description",
                              e.target.value
                            )
                          }
                          onBlur={(e) =>
                            handleBlur(
                              project.id,
                              "description",
                              e.target.value
                            )
                          }
                          placeholder="Describe your project..."
                          className={`w-full rounded-xl border p-4 outline-none transition focus:ring-2 ${
                            errors[
                              `${project.id}-description`
                            ]
                              ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                              : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                          }`}
                        />

                        {errors[
                          `${project.id}-description`
                        ] && (
                          <p className="mt-2 text-sm text-red-500">
                            {
                              errors[
                                `${project.id}-description`
                              ]
                            }
                          </p>
                        )}
                      </div>

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

export default ProjectsForm;