function Projects() {
  return (
    <div style={{ marginTop: "1.25rem" }}>
      <div className="section-title">Projects</div>

      <div className="card open" style={{ marginBottom: ".6rem" }}>
        <div className="card-header">
          <span className="card-title">Project</span>
          <button className="btn btn-danger btn-icon btn-sm">×</button>
          <span className="card-chevron">▾</span>
        </div>
        <div className="card-body">
          <div className="field-row">
            <label>Project Name</label>
            <input type="text" />
          </div>

          <div className="field-row">
            <label>Description</label>
            <textarea rows={2}></textarea>
          </div>

          <div className="field-row">
            <label>URL</label>
            <input type="url" />
          </div>
        </div>
      </div>

      <button className="btn btn-secondary btn-sm">+ Add project</button>
    </div>
  );
}

export default Projects;
