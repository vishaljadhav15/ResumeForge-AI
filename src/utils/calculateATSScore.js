export function calculateATSScore(resumeData) {
  let score = 0;

  // =========================
  // Personal Information (30)
  // =========================

  if (resumeData.fullName.trim()) score += 5;
  if (resumeData.professionalTitle.trim()) score += 5;
  if (resumeData.email.trim()) score += 5;
  if (resumeData.phone.trim()) score += 5;
  if (resumeData.linkedin.trim()) score += 3;
  if (resumeData.portfolio.trim()) score += 2;
  if (resumeData.city.trim()) score += 3;
  if (resumeData.country.trim()) score += 2;

  // =========================
  // Summary (10)
  // =========================

  if (resumeData.summary.trim().length >= 50) {
    score += 10;
  }

  // =========================
  // Education (15)
  // =========================

  if (resumeData.education.length > 0) {
    score += 15;
  }

  // =========================
  // Experience (20)
  // =========================

  if (resumeData.experience.length > 0) {
    score += 20;
  }

  // =========================
  // Projects (10)
  // =========================

  if (resumeData.projects.length > 0) {
    score += 10;
  }

  // =========================
  // Skills (10)
  // =========================

  if (resumeData.skills.length >= 5) {
    score += 10;
  } else if (resumeData.skills.length > 0) {
    score += 5;
  }

  // =========================
  // Certificates (5)
  // =========================

  if (resumeData.certificates.length > 0) {
    score += 5;
  }

  return Math.min(score, 100);
}