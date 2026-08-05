import { createContext, useContext, useEffect, useState } from "react";

const ResumeContext = createContext();

const initialResumeData = {
  // Personal
  fullName: "",
  professionalTitle: "",
  email: "",
  phone: "",
  linkedin: "",
  portfolio: "",
  city: "",
  country: "",

  // Education
  education: [],

  // Experience
  experience: [],

  // Projects
  projects: [],

  // Skills
  skills: [],

  // Certificates
  certificates: [],

  // Summary
  summary: "",
};

export function ResumeProvider({ children }) {
  const [resumeData, setResumeData] = useState(() => {
    const savedResume = localStorage.getItem("resumeData");

    if (!savedResume) {
      return initialResumeData;
    }

    try {
      return {
        ...initialResumeData,
        ...JSON.parse(savedResume),
      };
    } catch (error) {
      console.error("Failed to load resume data:", error);
      return initialResumeData;
    }
  });

  // =========================
  // Current Section
  // =========================

  const [currentSection, setCurrentSection] = useState("personal");

  // =========================
  // Sidebar
  // =========================

  const [sidebarOpen, setSidebarOpen] = useState(false);

  // =========================
  // Personal
  // =========================

  const updateResume = (field, value) => {
    setResumeData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // =========================
  // Education
  // =========================

  const addEducation = () => {
    setResumeData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: crypto.randomUUID(),
          degree: "",
          institute: "",
          startYear: "",
          endYear: "",
          cgpa: "",
        },
      ],
    }));
  };

  const updateEducation = (id, field, value) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.map((education) =>
        education.id === id
          ? {
              ...education,
              [field]: value,
            }
          : education,
      ),
    }));
  };

  const deleteEducation = (id) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.filter((education) => education.id !== id),
    }));
  };

  // =========================
  // Experience
  // =========================

  const addExperience = () => {
    setResumeData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          id: crypto.randomUUID(),
          company: "",
          jobTitle: "",
          employmentType: "",
          location: "",
          startDate: "",
          endDate: "",
          currentlyWorking: false,
          description: "",
        },
      ],
    }));
  };

  const updateExperience = (id, field, value) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.map((experience) =>
        experience.id === id
          ? {
              ...experience,
              [field]: value,
            }
          : experience,
      ),
    }));
  };

  const deleteExperience = (id) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.filter((experience) => experience.id !== id),
    }));
  };

  // =========================
  // Projects
  // =========================

  const addProject = () => {
    setResumeData((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          id: crypto.randomUUID(),
          title: "",
          description: "",
          technologies: "",
          githubUrl: "",
          liveUrl: "",
        },
      ],
    }));
  };

  const updateProject = (id, field, value) => {
    setResumeData((prev) => ({
      ...prev,
      projects: prev.projects.map((project) =>
        project.id === id
          ? {
              ...project,
              [field]: value,
            }
          : project,
      ),
    }));
  };

  const deleteProject = (id) => {
    setResumeData((prev) => ({
      ...prev,
      projects: prev.projects.filter((project) => project.id !== id),
    }));
  };

  // =========================
  // Skills
  // =========================

  const addSkill = (skill) => {
    const trimmedSkill = skill.trim();

    if (!trimmedSkill) return;

    setResumeData((prev) => {
      const exists = prev.skills.some(
        (item) => item.toLowerCase() === trimmedSkill.toLowerCase(),
      );

      if (exists) return prev;

      return {
        ...prev,
        skills: [...prev.skills, trimmedSkill],
      };
    });
  };

  const deleteSkill = (skill) => {
    setResumeData((prev) => ({
      ...prev,
      skills: prev.skills.filter((item) => item !== skill),
    }));
  };

  // =========================
  // Certificates
  // =========================

  const addCertificate = () => {
    setResumeData((prev) => ({
      ...prev,
      certificates: [
        ...prev.certificates,
        {
          id: crypto.randomUUID(),
          name: "",
          organization: "",
          issueDate: "",
          credentialId: "",
          credentialUrl: "",
        },
      ],
    }));
  };

  const updateCertificate = (id, field, value) => {
    setResumeData((prev) => ({
      ...prev,
      certificates: prev.certificates.map((certificate) =>
        certificate.id === id
          ? {
              ...certificate,
              [field]: value,
            }
          : certificate,
      ),
    }));
  };

  const deleteCertificate = (id) => {
    setResumeData((prev) => ({
      ...prev,
      certificates: prev.certificates.filter(
        (certificate) => certificate.id !== id,
      ),
    }));
  };

  // =========================
  // Auto Save
  // =========================

  useEffect(() => {
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
  }, [resumeData]);

  return (
    <ResumeContext.Provider
      value={{
        resumeData,
        updateResume,

        currentSection,
        setCurrentSection,

        // Education
        addEducation,
        updateEducation,
        deleteEducation,

        // Experience
        addExperience,
        updateExperience,
        deleteExperience,

        // Projects
        addProject,
        updateProject,
        deleteProject,

        // Skills
        addSkill,
        deleteSkill,

        // Certificates
        addCertificate,
        updateCertificate,
        deleteCertificate,

        sidebarOpen,
        setSidebarOpen,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  return useContext(ResumeContext);
}
