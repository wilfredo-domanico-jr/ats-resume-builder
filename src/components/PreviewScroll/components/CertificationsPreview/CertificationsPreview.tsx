import type { CertificationForm } from "../../../../types/resume";

type CertificationsPreviewProps = {
  certifications: CertificationForm[];
};

const formatDate = (value: string) => {
  const date = new Date(value);

  if (isNaN(date.getTime())) return value; // fallback if invalid

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format(date);
};

function CertificationsPreview({ certifications }: CertificationsPreviewProps) {
  return (
    <>
      <section className="resume-section">
        <h2 className="resume-section-title">Certifications</h2>

        {certifications.map((cert) => (
          <div key={cert.id} className="resume-exp-item">
            <div className="resume-exp-header">
              <span className="resume-exp-role">{cert.name}</span>
              <span className="resume-exp-dates">{formatDate(cert.date)}</span>
            </div>
            <div className="resume-exp-company">{cert.issuer}</div>
          </div>
        ))}
      </section>
    </>
  );
}

export default CertificationsPreview;
