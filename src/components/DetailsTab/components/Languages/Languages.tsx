function Languages() {
  return (
    <div style={{ marginTop: "1.25rem" }}>
      <div className="section-title">Languages</div>

      <div
        style={{
          display: "flex",
          gap: ".5rem",
          alignItems: "center",
          marginBottom: ".5rem",
        }}
      >
        <input type="text" placeholder="Language" style={{ flex: 1 }} />

        <select style={{ flex: 1 }}>
          <option value="">Select Level</option>
          <option>Beginner</option>
          <option>Elementary</option>
          <option>Intermediate</option>
          <option>Professional</option>
          <option>Fluent</option>
          <option>Native</option>
        </select>

        <button className="btn btn-danger btn-icon btn-sm">×</button>
      </div>

      <button className="btn btn-secondary btn-sm">+ Add language</button>
    </div>
  );
}

export default Languages;
