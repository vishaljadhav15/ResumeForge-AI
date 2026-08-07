import SectionHeading from "./components/SectionHeading";
import { resumeTheme } from "../../constants/resumeTheme";

function ProjectsPreview({ projects }) {
  if (!projects.length) {
    return null;
  }

  const formatUrl = (url) => {
    if (!url) return "";

    return url
      .replace(/^https?:\/\//, "")
      .replace(/^www\./, "");
  };

  return (
    <section
      style={{
        marginTop: resumeTheme.spacing.sectionGap,
      }}
    >
      <SectionHeading>Projects</SectionHeading>

      {projects.map((item) => (
        <div
          key={item.id}
          style={{
            marginBottom: resumeTheme.spacing.itemGap,
          }}
        >
          {/* Project Title */}

          <h4
            className="font-bold"
            style={{
              color: resumeTheme.colors.heading,
              fontSize: "13px",
            }}
          >
            {item.title}
          </h4>

          {/* Technologies */}

          {item.technologies && (
            <p
              className="mt-1 font-medium"
              style={{
                color: resumeTheme.colors.primary,
                fontSize: resumeTheme.font.small,
              }}
            >
              {item.technologies}
            </p>
          )}

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

          {/* Links */}

          {(item.githubUrl || item.liveUrl) && (
            <div
              className="mt-2 flex flex-wrap gap-4"
              style={{
                color: resumeTheme.colors.lightText,
                fontSize: resumeTheme.font.small,
              }}
            >
              {item.githubUrl && (
                <span>
                  <strong>GitHub:</strong>{" "}
                  {formatUrl(item.githubUrl)}
                </span>
              )}

              {item.liveUrl && (
                <span>
                  <strong>Live:</strong>{" "}
                  {formatUrl(item.liveUrl)}
                </span>
              )}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

export default ProjectsPreview;