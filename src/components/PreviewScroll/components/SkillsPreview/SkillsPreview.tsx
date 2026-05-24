import "./SkillPreview.css";
import type { SkillsForm } from "../../../../types/resume";

type SkillsPreviewProps = {
  skills: SkillsForm[];
};

function SkillsPreview({ skills }: SkillsPreviewProps) {
  return (
    <>
      <section className="resume-section">
        <h2 className="resume-section-title">Skills</h2>

        {skills.map((skill) => (
          <div key={skill.id} className="resume-exp-item">
            <div
              style={{
                fontSize: ".775rem",
                fontWeight: 600,
                color: "#6b6760",
                marginBottom: ".3rem",
                marginTop: ".5rem",
              }}
            >
              {skill.groupName}
            </div>

            {skill.skillList.length > 0 && (
              <div className="resume-skills-grid">
                {skill.skillList.map((skl, index) => (
                  <span key={index} className="resume-skill-tag">
                    {skl}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>
    </>
  );
}

export default SkillsPreview;
