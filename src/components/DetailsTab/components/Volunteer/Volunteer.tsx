function Volunteer() {
  return (
    <div style={{ marginTop: "1.25rem" }}>
      <div className="section-title">Volunteer</div>

      <div className="card open" style={{ marginBottom: ".6rem" }}>
        <div className="card-header">
          <span className="card-title">Role</span>
          <button className="btn btn-danger btn-icon btn-sm">×</button>
          <span className="card-chevron">▾</span>
        </div>
        <div className="card-body">
          <div className="field-grid">
            <div>
              <label>Role</label>
              <input type="text" />
            </div>

            <div>
              <label>Organisation</label>
              <input type="text" />
            </div>
          </div>

          <div className="field-row">
            <label>Description</label>
            <textarea rows={2}></textarea>
          </div>
        </div>
      </div>

      <button className="btn btn-secondary btn-sm" type="button">
        + Add entry
      </button>
    </div>
  );
}

export default Volunteer;
