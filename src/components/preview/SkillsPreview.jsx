import SectionHeading from "./components/SectionHeading";
import { resumeTheme } from "../../constants/resumeTheme";

function SkillsPreview({ skills }) {
  if (!skills.length) {
    return null;
  }

  return (
    <section
      style={{
        marginTop: resumeTheme.spacing.sectionGap,
      }}
    >
      <SectionHeading>Skills</SectionHeading>

      <div className="mt-2 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md border px-2.5 py-1 font-medium"
            style={{
              borderColor: resumeTheme.colors.border,
              backgroundColor: "#F8FAFC",
              color: resumeTheme.colors.heading,
              fontSize: resumeTheme.font.small,
              lineHeight: 1.2,
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default SkillsPreview;