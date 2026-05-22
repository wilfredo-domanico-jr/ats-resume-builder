import './Skills.css'

function Skills() {
  return (
    <div style={{ marginTop: '1.25rem' }}>
      <div className="section-title">Skills</div>

         <div className="card open" style={{ marginBottom: ".6rem"}}>
      <div className="card-header">
        <span className="card-title">Group</span>
        <button className="btn btn-danger btn-icon btn-sm">×</button>
        <span className="card-chevron">▾</span>
      </div>
      <div className="card-body">
        <div className="field-row"><label>Group Name</label><input type="text" /></div>
        <label>Skills</label>
        <div style={{ marginBottom: ".4rem" }}>
          <span className="skill-tag">
            Skill
            <button>×</button>
          </span>
            
        </div>
        <div style={{ display : "flex", gap : ".4rem" }}>
          <input type="text" placeholder="Skill, another skill…" />
          <button className="btn btn-secondary btn-sm">+</button>
        </div>
      </div>
    </div>

      <button
        className="btn btn-secondary btn-sm"
        type="button"
      >
        + Add entry
      </button>
    </div>
  )
}

export default Skills