export function calculateATSScore(resumeData) {
  const fields = [
    resumeData.fullName,
    resumeData.professionalTitle,
    resumeData.email,
    resumeData.phone,
    resumeData.linkedin,
    resumeData.portfolio,
    resumeData.city,
    resumeData.country,
  ];

  const completedFields = fields.filter(
    (field) => (field ?? "").trim() !== ""
  ).length;

  return (completedFields / fields.length) * 100;
}