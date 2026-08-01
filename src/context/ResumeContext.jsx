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

  // Current active editor section
  const [currentSection, setCurrentSection] = useState("personal");

  // Update Personal Information
  const updateResume = (field, value) => {
    setResumeData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // =========================
  // Education Functions
  // =========================

  // Add Education
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

  // Update Education
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

  // Delete Education
  const deleteEducation = (id) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.filter((education) => education.id !== id),
    }));
  };

  // =========================

  // =========================
  // Experience Functions
  // =========================

  // Add Experience
  const addExperience = () => {
    setResumeData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          id: Date.now(),
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

  // Update Experience
  const updateExperience = (id, field, value) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) =>
        exp.id === id
          ? {
              ...exp,
              [field]: value,
            }
          : exp,
      ),
    }));
  };

  // Delete Experience
  const deleteExperience = (id) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.filter((exp) => exp.id !== id),
    }));
  };

  // =========================

  // Auto Save
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

        addEducation,
        updateEducation,
        deleteEducation,

        addExperience,
        updateExperience,
        deleteExperience,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  return useContext(ResumeContext);
}
