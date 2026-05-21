import './Keywords.css'


function Keywords() {
  return (
    <>
            <div className="section-title">Target Keywords</div>
            <div className="field-row">
              <label
                >Paste keywords from the job description (comma / line / pipe
                separated)
            </label>
              <textarea
                rows={4}
                placeholder="Python, React, REST APIs | AWS | team leadership&#10;Agile, CI/CD, Docker"
              ></textarea>
            </div>
            <div className="keyword-score good">
                <span>4/4 keywords matched (100%)</span>

                <div className="ks-bar-wrap">
                <div
                    className="ks-bar"
                    style={{ width: '100%' }}
                ></div>
                </div>
            </div>

             <div className="keyword-score warn">
                <span>2/4 keywords matched (50%)</span>

                <div className="ks-bar-wrap">
                <div
                    className="ks-bar"
                    style={{ width: '50%' }}
                ></div>
                </div>
            </div>

             <div className="keyword-score bad">
                <span>1/4 keywords matched (20%)</span>

                <div className="ks-bar-wrap">
                <div
                    className="ks-bar"
                    style={{ width: '20%' }}
                ></div>
                </div>
            </div>
    </>
  )
}

export default Keywords
