function Certification() {
  return (
    <div style={{ marginTop: "1.25rem" }}>
      <div className="section-title">Certification</div>

      <div className="card open" style={{ marginBottom: ".6rem" }}>
        <div className="card-header">
          <span className="card-title">Certification</span>
          <button className="btn btn-danger btn-icon btn-sm">×</button>
          <span className="card-chevron">▾</span>
        </div>
        <div className="card-body">
          <div className="field-row">
            <label>Name</label>
            <input type="text" placeholder="AWS Certified Developer" />
          </div>

          <div className="field-grid">
            <div>
              <label>Issuer</label>
              <input type="text" placeholder="Amazon" />
            </div>
            <div>
              <label>Date</label>
              <input type="month" />
            </div>
          </div>
        </div>
      </div>

      <button className="btn btn-secondary btn-sm">+ Add certification</button>
    </div>
  );
}

export default Certification;
