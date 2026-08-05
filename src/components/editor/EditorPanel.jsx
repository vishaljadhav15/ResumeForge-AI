import { useResume } from "../../context/ResumeContext";

import PersonalForm from "./sections/PersonalForm";
import EducationForm from "./sections/EducationForm";
import ExperienceForm from "./sections/ExperienceForm";
import ProjectsForm from "./sections/ProjectsForm";
import SkillsForm from "./sections/SkillsForm";
import CertificatesForm from "./sections/CertificatesForm";
import SummaryForm from "./sections/SummaryForm";

function EditorPanel() {
  const { currentSection } = useResume();

  return (
    <main
      className="
        flex-1
        overflow-y-auto
        bg-slate-50
        p-4
        md:p-6
        lg:p-8
      "
    >
      {currentSection === "personal" && <PersonalForm />}

      {currentSection === "education" && <EducationForm />}

      {currentSection === "experience" && <ExperienceForm />}

      {currentSection === "projects" && <ProjectsForm />}

      {currentSection === "skills" && <SkillsForm />}

      {currentSection === "certificates" && <CertificatesForm />}

      {currentSection === "summary" && <SummaryForm />}
    </main>
  );
}

export default EditorPanel;