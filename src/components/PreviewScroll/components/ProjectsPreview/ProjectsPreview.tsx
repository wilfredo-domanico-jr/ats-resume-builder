import type { ProjectForm } from "../../../../types/resume";

type ProjectsPreviewProps = {
  projects: ProjectForm[];
};

function ProjectsPreview({ projects }: ProjectsPreviewProps) {
  return (
    <section className="resume-section">
      <h2 className="resume-section-title">Projects</h2>

      {projects.map((proj) => (
        <div key={proj.id} className="resume-exp-item">
          <div className="resume-exp-header">
            <span className="resume-exp-role">{proj.name}</span>

            <a
              href={proj.url}
              target="_blank"
              style={{
                fontSize: ".75rem",
                fontWeight: 400,
                marginLeft: ".4rem",
              }}
            >
              {proj.url}
            </a>
          </div>

          <div
            style={{
              fontSize: ".82rem",
              color: "#6b6760",
              marginTop: ".15rem",
            }}
          >
            {proj.description}
          </div>
        </div>
      ))}
    </section>
  );
}

export default ProjectsPreview;
