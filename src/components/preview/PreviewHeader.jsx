import {
  Mail,
  Phone,
  Globe,
  MapPin,
  Link,
} from "lucide-react";

import { resumeTheme } from "../../constants/resumeTheme";

function PreviewHeader({ resumeData }) {
  return (
    <header
      className="border-b pb-6 text-center"
      style={{
        borderColor: resumeTheme.colors.border,
      }}
    >
      <h1
        className="font-extrabold tracking-tight"
        style={{
          color: resumeTheme.colors.heading,
          fontSize: resumeTheme.font.heading,
        }}
      >
        {resumeData.fullName || "Your Name"}
      </h1>

      <p
        className="mt-2 font-semibold uppercase tracking-[6px]"
        style={{
          color: resumeTheme.colors.primary,
          fontSize: "15px",
        }}
      >
        {resumeData.professionalTitle || "Professional Title"}
      </p>

      <div
        className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
        style={{
          color: resumeTheme.colors.text,
          fontSize: resumeTheme.font.body,
        }}
      >
        {resumeData.email && (
          <div className="flex items-center gap-2">
            <Mail size={14} />
            <span>{resumeData.email}</span>
          </div>
        )}

        {resumeData.phone && (
          <div className="flex items-center gap-2">
            <Phone size={14} />
            <span>{resumeData.phone}</span>
          </div>
        )}

        {resumeData.linkedin && (
          <div className="flex items-center gap-2">
            <Link size={14} />
            <span>{resumeData.linkedin}</span>
          </div>
        )}

        {resumeData.portfolio && (
          <div className="flex items-center gap-2">
            <Globe size={14} />
            <span>{resumeData.portfolio}</span>
          </div>
        )}

        {(resumeData.city || resumeData.country) && (
          <div className="flex items-center gap-2">
            <MapPin size={14} />
            <span>
              {resumeData.city}
              {resumeData.city && resumeData.country ? ", " : ""}
              {resumeData.country}
            </span>
          </div>
        )}
      </div>
    </header>
  );
}

export default PreviewHeader;