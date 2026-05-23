import './Score.css'




function Score() {
  return (
    <>
        <div className="score-ring-wrap">
            <div className="score-ring">
              <svg viewBox="0 0 56 56" width="56" height="56">
                <circle className="track" cx="28" cy="28" r="25" />
                <circle className="fill" id="scoreFill" cx="28" cy="28" r="25" />
              </svg>
              <div className="val" id="scoreVal">0%</div>
            </div>
            <div className="score-info">
              <div className="score-label">ATS Score</div>
              <div className="score-sub" id="scoreSubtext">
                Fill in your details to begin
              </div>
            </div>
          </div>
    </>
  )
}

export default Score
