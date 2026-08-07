import SectionHeading from "./components/SectionHeading";
import { resumeTheme } from "../../constants/resumeTheme";

function ExperiencePreview({ experience }) {
  if (!experience.length) {
    return null;
  }

  const formatDate = (date) => {
    if (!date) return "";

    const [year, month] = date.split("-");

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return `${months[Number(month) - 1]} ${year}`;
  };

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
          {/* Header */}

          <div className="flex items-start justify-between gap-4">

            <div className="flex-1">

              <h4
                className="font-bold"
                style={{
                  color: resumeTheme.colors.heading,
                  fontSize: "13px",
                }}
              >
                {item.jobTitle}
              </h4>

              <p
                className="font-medium"
                style={{
                  color: resumeTheme.colors.primary,
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
                minWidth: "120px",
              }}
            >
              <div>
                {formatDate(item.startDate)}
                {item.startDate && item.endDate ? " - " : ""}
                {formatDate(item.endDate)}
              </div>

              {item.location && (
                <div>{item.location}</div>
              )}
            </div>

          </div>

          {/* Description */}

          {item.description && (
            <ul
              className="mt-2 list-disc pl-5"
              style={{
                color: resumeTheme.colors.text,
                fontSize: resumeTheme.font.body,
                lineHeight: 1.5,
              }}
            >
              {item.description
                .split("\n")
                .filter((line) => line.trim() !== "")
                .map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
}

export default ExperiencePreview;