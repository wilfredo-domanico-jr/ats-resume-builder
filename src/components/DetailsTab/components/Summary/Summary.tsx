import './Summary.css'


function Summary() {
  return (
    <>
            <div className="section-title">Professional Summary</div>
            <div className="field-row">
              <label>3–5 sentences, keyword-rich</label>
              <textarea
                rows={5}
                placeholder="Results-driven engineer with 6+ years of experience…"
              ></textarea>
              <div className="char-counter">0 chars</div>
            </div>
    </>
  )
}

export default Summary
