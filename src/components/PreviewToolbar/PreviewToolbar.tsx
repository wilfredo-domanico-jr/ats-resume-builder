import "./PreviewToolbar.css";

function PreviewToolbar() {
  return (
    <>
      <div className="preview-toolbar">
        <div className="preview-toolbar-left">
          <div className="view-toggle">
            <button className="view-btn active">Live</button>
            <button className="view-btn">Full preview</button>
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
