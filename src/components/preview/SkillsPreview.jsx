import SectionHeading from "./components/SectionHeading";
import { resumeTheme } from "../../constants/resumeTheme";

function SkillsPreview({ skills }) {
  if (skills.length === 0) {
    return null;
  }

  return (
    <section
      style={{
        marginTop: resumeTheme.spacing.sectionGap,
      }}
    >
      <SectionHeading>Skills</SectionHeading>

      <div className="mt-3 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border px-3 py-1"
            style={{
              borderColor: resumeTheme.colors.border,
              backgroundColor: "#F8FAFC",
              color: resumeTheme.colors.text,
              fontSize: resumeTheme.font.small,
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