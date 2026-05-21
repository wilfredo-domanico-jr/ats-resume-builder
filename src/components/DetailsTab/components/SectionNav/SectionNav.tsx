import './SectionNav.css'

function SectionNav() {
  const sections = [
    { label: "Contact" },
    { label: "Target Keywords", key: "keywords" },
    { label: "Professional Summary" },
    { label: "Experience", count: 0 },
    { label: "Education", count: 0 },
    { label: "Skills" },
    { label: "Certifications" },
    { label: "Projects" },
    { label: "Languages" },
    { label: "Volunteer" },
  ];

  return (
    <div className="section-nav">
      {sections.map((sec, index) => (
        <button
          key={index}
          className="section-nav-item"
          data-sec={sec.key}
        >
          <span className="sni-dot"></span>
          {sec.label}

          {sec.count !== undefined && (
            <span className="sni-count">{sec.count}</span>
          )}
        </button>
      ))}
    </div>
  );
}

export default SectionNav;