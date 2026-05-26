import "./PreviewToolbar.css";

type PreviewToolbarProps = {
  viewMode: "live" | "full";
  setViewMode: (mode: "live" | "full") => void;
};

function PreviewToolbar({ viewMode, setViewMode }: PreviewToolbarProps) {
  return (
    <>
      <div className="preview-toolbar">
        <div className="preview-toolbar-left">
          <div className="view-toggle">
            <button
              className={`view-btn ${viewMode === "live" ? "active" : ""}`}
              onClick={() => setViewMode("live")}
            >
              Live
            </button>
            <button
              className={`view-btn ${viewMode === "full" ? "active" : ""}`}
              onClick={() => setViewMode("full")}
            >
              Full preview
            </button>
          </div>
        </div>
        <div className="preview-toolbar-right">
          <button className="btn btn-primary btn-sm">🖨️ Print as PDF</button>
        </div>
      </div>
    </>
  );
}

export default PreviewToolbar;
