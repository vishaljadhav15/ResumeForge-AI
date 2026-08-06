export function calculateResumeProgress(resumeData) {
  const checks = [
    resumeData.fullName,
    resumeData.professionalTitle,
    resumeData.email,
    resumeData.phone,

    resumeData.summary,

    resumeData.education.length > 0,

    resumeData.experience.length > 0,

    resumeData.projects.length > 0,

    resumeData.skills.length > 0,

    resumeData.certificates.length > 0,
  ];

  const completed = checks.filter(Boolean).length;

  return Math.round((completed / checks.length) * 100);
}