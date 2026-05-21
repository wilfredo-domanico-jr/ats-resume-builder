
import './PreviewToolbar.css'



function PreviewToolbar() {
  return (
    <>
    <div className="preview-toolbar">
          <div className="preview-toolbar-left">
            <div className="view-toggle">
              <button
                className="view-btn active"
              >
                Live
              </button>
              <button className="view-btn">
                Full preview
              </button>
            </div>
          </div>
          <div className="preview-toolbar-right">
            <button className="btn btn-ghost btn-sm">
              📋 Copy text
            </button>
            <button className="btn btn-ghost btn-sm">
              📄 .txt
            </button>
            <button className="btn btn-primary btn-sm">
              🖨️ PDF
            </button>
            <button className="btn btn-secondary btn-sm">
              💾 Save draft
            </button>
          </div>
        </div>
    </>
  )
}

export default PreviewToolbar
