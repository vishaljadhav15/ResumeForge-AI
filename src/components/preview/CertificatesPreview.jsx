import SectionHeading from "./components/SectionHeading";
import { resumeTheme } from "../../constants/resumeTheme";

function CertificatesPreview({ certificates }) {
  if (certificates.length === 0) {
    return null;
  }

  return (
    <section
      style={{
        marginTop: resumeTheme.spacing.sectionGap,
      }}
    >
      <SectionHeading>Certificates</SectionHeading>

      {certificates.map((item) => (
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
                {item.name}
              </h4>

              <p
                style={{
                  color: resumeTheme.colors.text,
                  fontSize: resumeTheme.font.body,
                }}
              >
                {item.organization}
              </p>
            </div>

            <div
              className="text-right"
              style={{
                color: resumeTheme.colors.lightText,
                fontSize: resumeTheme.font.small,
              }}
            >
              {item.issueDate}
            </div>
          </div>

          {item.credentialId && (
            <p
              className="mt-1"
              style={{
                color: resumeTheme.colors.lightText,
                fontSize: resumeTheme.font.small,
              }}
            >
              Credential ID: {item.credentialId}
            </p>
          )}

          {item.credentialUrl && (
            <p
              className="mt-1 break-all"
              style={{
                color: resumeTheme.colors.primary,
                fontSize: resumeTheme.font.small,
              }}
            >
              {item.credentialUrl}
            </p>
          )}
        </div>
      ))}
    </section>
  );
}

export default CertificatesPreview;