import "./PreviewScroll.css";

function PreviewScroll() {
  return (
    <>
      <div className="preview-scroll">
        <div className="resume-paper" id="resumePaper">
          <div className="resume-placeholder">
            <div className="rp-icon">📄</div>
            <h3>Your resume will appear here</h3>
            <p>Fill in your details — preview updates automatically.</p>
            <br />
            <div className="typing-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PreviewScroll;
