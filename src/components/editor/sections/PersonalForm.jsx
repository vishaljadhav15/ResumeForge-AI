import { Button, Card, Input, SectionTitle } from "../../common";
import { useResume } from "../../../context/ResumeContext";

function PersonalForm() {
  const { resumeData, updateResume } = useResume();

  const handleChange = (e) => {
    updateResume(e.target.name, e.target.value);
  };

  return (
    <>
      <SectionTitle
        title="Personal Information"
        subtitle="Start building your professional resume."
      />

      <Card>
        <div className="p-6">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Input
              label="Full Name"
              name="fullName"
              placeholder="John Doe"
              value={resumeData.fullName}
              onChange={handleChange}
            />

            <Input
              label="Professional Title"
              name="professionalTitle"
              placeholder="Frontend Developer"
              value={resumeData.professionalTitle}
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

            <Input
              label="Portfolio Website"
              name="portfolio"
              placeholder="https://yourportfolio.com"
              value={resumeData.portfolio}
              onChange={handleChange}
            />

            <Input
              label="City"
              name="city"
              placeholder="Mumbai"
              value={resumeData.city}
              onChange={handleChange}
            />

            <Input
              label="Country"
              name="country"
              placeholder="India"
              value={resumeData.country}
              onChange={handleChange}
            />
          </div>

          <div className="mt-8 flex justify-end">
            <Button>
              Save & Continue →
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
}

export default PersonalForm;