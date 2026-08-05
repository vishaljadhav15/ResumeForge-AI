import SectionHeading from "./components/SectionHeading";
import { resumeTheme } from "../../constants/resumeTheme";

function EducationPreview({ education }) {
  if (education.length === 0) {
    return null;
  }

  return (
    <section
      style={{
        marginTop: resumeTheme.spacing.sectionGap,
      }}
    >
      <SectionHeading>Education</SectionHeading>

      {education.map((item) => (
        <div
          key={item.id}
          style={{
            marginBottom: resumeTheme.spacing.itemGap,
          }}
        >
          <div className="flex items-start justify-between">
            <div>
              <h4
                className="font-bold"
                style={{
                  color: resumeTheme.colors.heading,
                  fontSize: "14px",
                }}
              >
                {item.degree}
              </h4>

              <p
                style={{
                  color: resumeTheme.colors.text,
                  fontSize: resumeTheme.font.body,
                }}
              >
                {item.institute}
              </p>
            </div>

            <div
              className="text-right"
              style={{
                color: resumeTheme.colors.lightText,
                fontSize: resumeTheme.font.small,
              }}
            >
              <div>
                {item.startYear}
                {item.startYear && item.endYear ? " - " : ""}
                {item.endYear}
              </div>

              {item.cgpa && <div>CGPA: {item.cgpa}</div>}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default EducationPreview;