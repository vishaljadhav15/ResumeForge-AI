import { createContext, useContext, useEffect, useState } from "react";

const ResumeContext = createContext();

export function ResumeProvider({ children }) {
  const [resumeData, setResumeData] = useState(() => {
    const savedResume = localStorage.getItem("resumeData");

    return savedResume
      ? JSON.parse(savedResume)
      : {
          fullName: "",
          professionalTitle: "",
          email: "",
          phone: "",
          linkedin: "",
        };
  });

  const updateResume = (field, value) => {
    setResumeData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  useEffect(() => {
    localStorage.setItem(
      "resumeData",
      JSON.stringify(resumeData)
    );
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