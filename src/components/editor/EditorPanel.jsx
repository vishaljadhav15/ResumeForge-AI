import { Button, Card, Input, SectionTitle } from "../common";
import { useResume } from "../../context/ResumeContext";

function EditorPanel() {
  const { resumeData, updateResume } = useResume();

  const handleChange = (e) => {
    updateResume(e.target.name, e.target.value);
  };
  return (
    <div className="flex-1 bg-slate-50 p-8 overflow-y-auto">
      <SectionTitle
        title="Personal Information"
        subtitle="Start building your professional resume."
      />

      <Card>
        <div className="p-6 space-y-5">
          <Input
            label="Full Name"
            name="fullName"
            placeholder="John Doe"
            value={resumeData.fullName}
            onChange={handleChange}
          />
          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="john@example.com"
            value={resumeData.email}
            onChange={handleChange}
          />
          <Input
            label="Phone"
            name="phone"
            placeholder="+91 9876543210"
            value={resumeData.phone}
            onChange={handleChange}
          />
          <Input
            label="LinkedIn"
            name="linkedin"
            placeholder="linkedin.com/in/johndoe"
            value={resumeData.linkedin}
            onChange={handleChange}
          />
          <div className="pt-2">
            <Button>Save Information</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default EditorPanel;
