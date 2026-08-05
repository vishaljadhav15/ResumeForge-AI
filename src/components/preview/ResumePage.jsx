import { useResume } from "../../context/ResumeContext";

import PreviewHeader from "./PreviewHeader";
import SummaryPreview from "./SummaryPreview";
import ExperiencePreview from "./ExperiencePreview";
import EducationPreview from "./EducationPreview";
import ProjectsPreview from "./ProjectsPreview";
import CertificatesPreview from "./CertificatesPreview";
import SkillsPreview from "./SkillsPreview";

function ResumePage() {
  const { resumeData } = useResume();

  return (
    <div className="p-10">
      <PreviewHeader resumeData={resumeData} />

      <SummaryPreview summary={resumeData.summary} />

      <ExperiencePreview experience={resumeData.experience} />

      <EducationPreview education={resumeData.education} />

      <ProjectsPreview projects={resumeData.projects} />

      <CertificatesPreview certificates={resumeData.certificates} />

      <SkillsPreview skills={resumeData.skills} />
    </div>
  );
}

export default ResumePage;