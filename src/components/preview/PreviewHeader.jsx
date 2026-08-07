import {
  Mail,
  Phone,
  Globe,
  MapPin,
  Link,
} from "lucide-react";

import { resumeTheme } from "../../constants/resumeTheme";

function PreviewHeader({ resumeData }) {
  const formatUrl = (url) => {
    if (!url) return "";

    return url
      .replace(/^https?:\/\//, "")
      .replace(/^www\./, "");
  };

  return (
    <header
      className="border-b pb-4"
      style={{
        borderColor: resumeTheme.colors.border,
      }}
    >
      {/* Name */}

      <h1
        className="text-center font-extrabold tracking-tight"
        style={{
          color: resumeTheme.colors.heading,
          fontSize: resumeTheme.font.heading,
          lineHeight: 1.1,
        }}
      >
        {resumeData.fullName || "Your Name"}
      </h1>

      {/* Professional Title */}

      <p
        className="mt-1 text-center font-semibold uppercase tracking-[1.5px]"
        style={{
          color: resumeTheme.colors.primary,
          fontSize: "13px",
        }}
      >
        {resumeData.professionalTitle ||
          "Professional Title"}
      </p>

      {/* Contact Information */}

      <div
        className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2"
        style={{
          color: resumeTheme.colors.text,
          fontSize: resumeTheme.font.small,
        }}
      >
        {resumeData.email && (
          <div className="flex items-center gap-1.5">
            <Mail size={12} />
            <span>{resumeData.email}</span>
          </div>
        )}

        {resumeData.phone && (
          <div className="flex items-center gap-1.5">
            <Phone size={12} />
            <span>{resumeData.phone}</span>
          </div>
        )}

        {resumeData.linkedin && (
          <div className="flex items-center gap-1.5">
            <Link size={12} />

            <span>
              {formatUrl(resumeData.linkedin)}
            </span>
          </div>
        )}

        {resumeData.portfolio && (
          <div className="flex items-center gap-1.5">
            <Globe size={12} />

            <span>
              {formatUrl(resumeData.portfolio)}
            </span>
          </div>
        )}

        {(resumeData.city || resumeData.country) && (
          <div className="flex items-center gap-1.5">
            <MapPin size={12} />

            <span>
              {resumeData.city}
              {resumeData.city &&
              resumeData.country
                ? ", "
                : ""}
              {resumeData.country}
            </span>
          </div>
        )}
      </div>
    </header>
  );
}

export default PreviewHeader;