import SectionHeading from "./components/SectionHeading";
import { resumeTheme } from "../../constants/resumeTheme";

function EducationPreview({ education }) {
  if (!education.length) {
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
          <div className="flex items-start justify-between gap-4">

            {/* Left */}

            <div className="flex-1">

              <h4
                className="font-bold"
                style={{
                  color: resumeTheme.colors.heading,
                  fontSize: "13px",
                }}
              >
                {item.degree}
              </h4>

              <p
                className="font-medium"
                style={{
                  color: resumeTheme.colors.primary,
                  fontSize: resumeTheme.font.body,
                }}
              >
                {item.institute}
              </p>

            </div>

            {/* Right */}

            <div
              className="text-right"
              style={{
                color: resumeTheme.colors.lightText,
                fontSize: resumeTheme.font.small,
                minWidth: "90px",
              }}
            >
              <div>
                {item.startYear}
                {item.startYear && item.endYear ? " - " : ""}
                {item.endYear}
              </div>

              {item.cgpa && (
                <div>
                  CGPA: <strong>{item.cgpa}</strong>
                </div>
              )}

            </div>

          </div>
        </div>
      ))}
    </section>
  );
}

export default EducationPreview;