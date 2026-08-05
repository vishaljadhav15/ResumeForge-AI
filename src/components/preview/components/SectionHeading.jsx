import { resumeTheme } from "../../../constants/resumeTheme";

function SectionHeading({ children }) {
  return (
    <h3
      className="mb-4 border-b pb-2 font-bold uppercase tracking-wider"
      style={{
        color: resumeTheme.colors.primary,
        borderColor: resumeTheme.colors.border,
        fontSize: resumeTheme.font.section,
      }}
    >
      {children}
    </h3>
  );
}

export default SectionHeading;