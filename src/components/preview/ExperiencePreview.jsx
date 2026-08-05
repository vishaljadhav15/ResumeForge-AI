import SectionHeading from "./components/SectionHeading";
import { resumeTheme } from "../../constants/resumeTheme";

function ExperiencePreview({ experience }) {
  if (experience.length === 0) {
    return null;
  }

  return (
    <section
      style={{
        marginTop: resumeTheme.spacing.sectionGap,
      }}
    >
      <SectionHeading>Experience</SectionHeading>

      {experience.map((item) => (
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
                {item.jobTitle}
              </h4>

              <p
                style={{
                  color: resumeTheme.colors.text,
                  fontSize: resumeTheme.font.body,
                }}
              >
                {item.company}
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
                {item.startDate}
                {item.startDate && item.endDate ? " - " : ""}
                {item.endDate}
              </div>

              {item.location && <div>{item.location}</div>}
            </div>
          </div>

          {item.description && (
            <p
              className="mt-2 leading-6"
              style={{
                color: resumeTheme.colors.text,
                fontSize: resumeTheme.font.body,
              }}
            >
              {item.description}
            </p>
          )}
        </div>
      ))}
    </section>
  );
}

export default ExperiencePreview;