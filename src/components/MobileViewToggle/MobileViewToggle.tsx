import "./MobileViewToggle.css";

type MobileViewToggleProps = {
  mobileView: "form" | "preview";
  setMobileView: (view: "form" | "preview") => void;
};

function MobileViewToggle({
  mobileView,
  setMobileView,
}: MobileViewToggleProps) {
  return (
    <div
      className="mobile-tabs"
      style={{
        background: "var(--surface)",
        borderBottom: "1px solid var(--border)",
        position: "sticky",
        top: "var(--header-h)",
        zIndex: 50,
      }}
    >
      <button
        className={`tab ${mobileView === "form" ? "active" : ""}`}
        onClick={() => setMobileView("form")}
      >
        ✏️ Form
      </button>
      <button
        className={`tab ${mobileView === "preview" ? "active" : ""}`}
        onClick={() => setMobileView("preview")}
      >
        👁 Preview
      </button>
    </div>
  );
}

export default MobileViewToggle;
