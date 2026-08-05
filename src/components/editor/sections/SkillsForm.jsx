import { useState } from "react";
import {
  Button,
  Card,
  Input,
  SectionTitle,
  EmptyState,
  Chip,
} from "../../common";

import { useResume } from "../../../context/ResumeContext";

function SkillsForm() {
  const { resumeData, addSkill, deleteSkill } = useResume();

  const [skill, setSkill] = useState("");

  const handleAddSkill = () => {
    const trimmedSkill = skill.trim();

    if (!trimmedSkill) return;

    addSkill(trimmedSkill);
    setSkill("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddSkill();
    }
  };

  return (
    <>
      <SectionTitle
        title="Skills"
        subtitle="Add your technical and professional skills."
      />

      <Card>
        <div className="p-6">

          <div className="flex gap-3">

            <div className="flex-1">
              <Input
                label="Skill"
                placeholder="React"
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
              />
            </div>

            <div className="flex items-end">
              <Button
                onClick={handleAddSkill}
                disabled={!skill.trim()}
              >
                Add
              </Button>
            </div>

          </div>

          <div className="mt-8">

            <h3 className="mb-4 text-lg font-semibold">
              Current Skills
            </h3>

            {resumeData.skills.length === 0 ? (
              <EmptyState
                title="No Skills Added"
                description="Start adding your technical skills."
              />
            ) : (
              <div className="flex flex-wrap gap-3">

                {resumeData.skills.map((item) => (
                  <Chip
                    key={item}
                    text={item}
                    onDelete={() => deleteSkill(item)}
                  />
                ))}

              </div>
            )}

          </div>

        </div>
      </Card>
    </>
  );
}

export default SkillsForm;