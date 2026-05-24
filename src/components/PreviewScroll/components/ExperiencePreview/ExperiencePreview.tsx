import type { ExperienceForm } from "../../../../types/resume";

type ExperiencePreviewProps = {
  experience: ExperienceForm[];
};

function formatMonth(dateString: string | null): string {
  if (!dateString) return "";

  const [year, month] = dateString.split("-");

  const date = new Date(Number(year), Number(month) - 1);

  return date.toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });
}

function ExperiencePreview({ experience }: ExperiencePreviewProps) {
  return (
    <>
      <section className="resume-section">
        <h2 className="resume-section-title">Experience</h2>

        {experience.map((exp) => (
          <div key={exp.id} className="resume-exp-item">
            <div className="resume-exp-header">
              <span className="resume-exp-role">{exp.jobTitle}</span>
              <span className="resume-exp-dates">
                {formatMonth(exp.startDate)} –{" "}
                {exp.currentlyWorking ? "Present" : formatMonth(exp.endDate)}
              </span>
            </div>

            <div className="resume-exp-company">
              {exp.company} · {exp.employmentType}
            </div>

            {exp.bulletPoints.length > 0 && (
              <ul className="resume-exp-bullets">
                {exp.bulletPoints.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>
    </>
  );
}

export default ExperiencePreview;
