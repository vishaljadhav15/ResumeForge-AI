import { useResume } from "../../context/ResumeContext";

import PersonalForm from "./sections/PersonalForm";
import EducationForm from "./sections/EducationForm";
import ExperienceForm from "./sections/ExperienceForm";

function EditorPanel() {
  const { currentSection } = useResume();

  return (
    <div className="flex-1 overflow-y-auto bg-slate-50 p-8">
      {currentSection === "personal" && <PersonalForm />}

      {currentSection === "education" && <EducationForm />}

      {currentSection === "experience" && <ExperienceForm />}
    </div>
  );
}

export default EditorPanel;