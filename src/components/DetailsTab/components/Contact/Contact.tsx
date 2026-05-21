import './Contact.css'


function Contact() {
  return (
    <>
          <div>
            <div className="section-title">Contact</div>
            <div className="field-row">
              <label>Full Name</label>
              <input type="text" placeholder="e.g. Wilfredo Domanico Jr."/>
            </div>
            <div className="field-row">
              <label>Headline</label>
              <input type="text" placeholder="e.g. Senior Software Engineer" />
            </div>
            <div className="field-grid">
              <div>
                <label>Email</label>
                <input type="email" placeholder="wdomanico@example.com"
                />
              </div>
              <div>
                <label>Phone</label><input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>
            <div className="field-row">
              <label>Location</label>
              <input
                type="text"
                placeholder="City, Country"
              />
            </div>
            <div className="field-row">
              <label>Links</label>
              <div className="links-input-row">
                <input
                  type="url"
                  placeholder="https://linkedin.com/in/you"
                />
                <button className="btn btn-secondary btn-sm">
                  Add
                </button>
              </div>
              <div className="links-tags-wrap">
                 <span className="link-tag">🔗 http://link-here
                <button>×</button>
              </span>
              </div>
            </div>
          </div>
    </>
  )
}

export default Contact
