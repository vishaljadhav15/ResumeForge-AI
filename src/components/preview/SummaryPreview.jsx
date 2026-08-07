import SectionHeading from "./components/SectionHeading";
import { resumeTheme } from "../../constants/resumeTheme";

function SummaryPreview({ summary }) {
  if (!summary?.trim()) {
    return null;
  }

  return (
    <section
      style={{
        marginTop: resumeTheme.spacing.sectionGap,
      }}
    >
      <SectionHeading>Professional Summary</SectionHeading>

      <p
        style={{
          color: resumeTheme.colors.text,
          fontSize: resumeTheme.font.body,
          lineHeight: 1.6,
          textAlign: "justify",
          whiteSpace: "pre-line",
        }}
      >
        {summary}
      </p>
    </section>
  );
}

export default SummaryPreview;