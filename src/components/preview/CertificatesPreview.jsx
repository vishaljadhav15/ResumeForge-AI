import SectionHeading from "./components/SectionHeading";
import { resumeTheme } from "../../constants/resumeTheme";

function CertificatesPreview({ certificates }) {
  if (!certificates.length) {
    return null;
  }

  const formatUrl = (url) => {
    if (!url) return "";

    return url
      .replace(/^https?:\/\//, "")
      .replace(/^www\./, "");
  };

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
      <SectionHeading>Certifications</SectionHeading>

      {certificates.map((item) => (
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
                {item.name}
              </h4>

              <p
                className="font-medium"
                style={{
                  color: resumeTheme.colors.primary,
                  fontSize: resumeTheme.font.body,
                }}
              >
                {item.organization}
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
              {formatDate(item.issueDate)}
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
              Credential ID:
              <strong> {item.credentialId}</strong>
            </p>
          )}

          {item.credentialUrl && (
            <p
              className="mt-1"
              style={{
                color: resumeTheme.colors.primary,
                fontSize: resumeTheme.font.small,
                wordBreak: "break-word",
              }}
            >
              {formatUrl(item.credentialUrl)}
            </p>
          )}

        </div>
      ))}
    </section>
  );
}

export default CertificatesPreview;