import type { EducationForm } from "../../../../types/resume";

type EducationPreviewProps = {
  education: EducationForm[];
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

function EducationPreview({ education }: EducationPreviewProps) {
  return (
    <>
      <section className="resume-section">
        <h2 className="resume-section-title">Education</h2>

        {education.map((educ) => (
          <div key={educ.id} className="resume-exp-item">
            <div className="resume-exp-header">
              <span className="resume-exp-role">
                {educ.degree} {educ.fieldOfStudy && ` in ${educ.fieldOfStudy}`}
              </span>
              <span className="resume-exp-dates">
                {formatMonth(educ.startDate)}{" "}
                {educ.endDate && ` – ${formatMonth(educ.endDate)}`}
              </span>
            </div>

            <div className="resume-exp-company">{educ.school}</div>
          </div>
        ))}
      </section>
    </>
  );
}

export default EducationPreview;
