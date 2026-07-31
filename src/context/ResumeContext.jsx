import { createContext, useContext, useEffect, useState } from "react";

const ResumeContext = createContext();

const defaultResumeData = {
  fullName: "",
  professionalTitle: "",
  email: "",
  phone: "",
  linkedin: "",
  portfolio: "",
  city: "",
  country: "",
};

export function ResumeProvider({ children }) {
  const [resumeData, setResumeData] = useState(() => {
    const savedResume = localStorage.getItem("resumeData");

    if (!savedResume) {
      return defaultResumeData;
    }

    try {
      return {
        ...defaultResumeData,
        ...JSON.parse(savedResume),
      };
    } catch (error) {
      console.error("Failed to parse saved resume data:", error);
      return defaultResumeData;
    }
  });

  const updateResume = (field, value) => {
    setResumeData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  useEffect(() => {
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
  }, [resumeData]);

  return (
    <ResumeContext.Provider
      value={{
        resumeData,
        updateResume,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  return useContext(ResumeContext);
}