import SectionHeading from "./components/SectionHeading";
import { resumeTheme } from "../../constants/resumeTheme";

function ProjectsPreview({ projects }) {
  if (projects.length === 0) {
    return null;
  }

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
          <h4
            className="font-bold"
            style={{
              color: resumeTheme.colors.heading,
              fontSize: "14px",
            }}
          >
            {item.title}
          </h4>

          {item.technologies && (
            <p
              className="mt-1"
              style={{
                color: resumeTheme.colors.primary,
                fontSize: resumeTheme.font.small,
              }}
            >
              {item.technologies}
            </p>
          )}

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

          <div
            className="mt-2 flex flex-col gap-1"
            style={{
              fontSize: resumeTheme.font.small,
            }}
          >
            {item.githubUrl && (
              <span style={{ color: resumeTheme.colors.lightText }}>
                GitHub: {item.githubUrl}
              </span>
            )}

            {item.liveUrl && (
              <span style={{ color: resumeTheme.colors.lightText }}>
                Live: {item.liveUrl}
              </span>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}

export default ProjectsPreview;