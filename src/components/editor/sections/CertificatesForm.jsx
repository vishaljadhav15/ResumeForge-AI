import {
  Card,
  Input,
  SectionTitle,
  SectionHeader,
  EmptyState,
  DeleteButton,
} from "../../common";

import { useState } from "react";
import { useResume } from "../../../context/ResumeContext";
import { validateField } from "../../../utils/validateField";

function CertificatesForm() {
  const {
    resumeData,
    addCertificate,
    updateCertificate,
    deleteCertificate,
  } = useResume();

  const [errors, setErrors] = useState({});

  const handleChange = (id, field, value) => {
    updateCertificate(id, field, value);
  };

  const handleBlur = (id, field, value) => {
    const error = validateField(field, value);

    setErrors((prev) => ({
      ...prev,
      [`${id}-${field}`]: error,
    }));
  };

  return (
    <>
      <SectionTitle
        title="Certificates"
        subtitle="Add your certifications and achievements."
      />

      <Card>
        <div className="p-6">

          <SectionHeader
            title="Certificate Details"
            buttonText="+ Add Certificate"
            onClick={addCertificate}
          />

          {resumeData.certificates.length === 0 ? (
            <EmptyState
              title="No Certificates Added"
              description="Click 'Add Certificate' to add your first certificate."
            />
          ) : (
            <div className="space-y-6">

              {resumeData.certificates.map((certificate, index) => (

                <Card key={certificate.id}>
                  <div className="p-6">

                    <div className="mb-5 flex items-center justify-between">

                      <h4 className="text-lg font-semibold">
                        Certificate #{index + 1}
                      </h4>

                      <DeleteButton
                        onClick={() =>
                          deleteCertificate(certificate.id)
                        }
                      />

                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                      <Input
                        label="Certificate Name"
                        required
                        placeholder="AWS Certified Cloud Practitioner"
                        value={certificate.name}
                        onChange={(e) =>
                          handleChange(
                            certificate.id,
                            "name",
                            e.target.value
                          )
                        }
                        onBlur={(e) =>
                          handleBlur(
                            certificate.id,
                            "name",
                            e.target.value
                          )
                        }
                        error={
                          errors[
                            `${certificate.id}-name`
                          ]
                        }
                      />

                      <Input
                        label="Organization"
                        required
                        placeholder="Amazon Web Services"
                        value={certificate.organization}
                        onChange={(e) =>
                          handleChange(
                            certificate.id,
                            "organization",
                            e.target.value
                          )
                        }
                        onBlur={(e) =>
                          handleBlur(
                            certificate.id,
                            "organization",
                            e.target.value
                          )
                        }
                        error={
                          errors[
                            `${certificate.id}-organization`
                          ]
                        }
                      />
                                            <Input
                        label="Issue Date"
                        required
                        type="month"
                        value={certificate.issueDate}
                        onChange={(e) =>
                          handleChange(
                            certificate.id,
                            "issueDate",
                            e.target.value
                          )
                        }
                        onBlur={(e) =>
                          handleBlur(
                            certificate.id,
                            "issueDate",
                            e.target.value
                          )
                        }
                        error={
                          errors[
                            `${certificate.id}-issueDate`
                          ]
                        }
                      />

                      <Input
                        label="Credential ID"
                        placeholder="ABC123XYZ"
                        value={certificate.credentialId}
                        onChange={(e) =>
                          handleChange(
                            certificate.id,
                            "credentialId",
                            e.target.value
                          )
                        }
                      />

                      <div className="md:col-span-2">
                        <Input
                          label="Credential URL"
                          placeholder="https://www.credly.com/..."
                          value={certificate.credentialUrl}
                          onChange={(e) =>
                            handleChange(
                              certificate.id,
                              "credentialUrl",
                              e.target.value
                            )
                          }
                          onBlur={(e) =>
                            handleBlur(
                              certificate.id,
                              "credentialUrl",
                              e.target.value
                            )
                          }
                          error={
                            errors[
                              `${certificate.id}-credentialUrl`
                            ]
                          }
                        />
                      </div>

                    </div>

                  </div>
                </Card>

              ))}
            </div>
          )}

        </div>
      </Card>
    </>
  );
}

export default CertificatesForm;