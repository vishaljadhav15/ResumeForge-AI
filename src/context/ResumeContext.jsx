import { createContext, useContext, useState } from "react";

const ResumeContext = createContext();

export function ResumeProvider({ children }) {
  const [resumeData, setResumeData] = useState({
    fullName: "",
    professionalTitle: "",
    email: "",
    phone: "",
    linkedin: "",
  });

  const updateResume = (field, value) => {
    setResumeData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

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