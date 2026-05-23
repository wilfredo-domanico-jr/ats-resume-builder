import "./PreviewScroll.css";
import type { ContactForm } from "../../types/resume";

type ContactFormProps = {
  contact: ContactForm;
  summary: string;
};
function PreviewScroll({ contact, summary }: ContactFormProps) {
  const { links, ...textFields } = contact;

  const hasTextData = Object.values(textFields).some(
    (value) => value.trim() !== "",
  );

  const hasContactData = hasTextData || links.length > 0;

  const hasProfessionalSummary = summary.trim() !== "";

  const hasAnyData = hasContactData || hasProfessionalSummary;

  return (
    <>
      <div className="preview-scroll">
        <div className="resume-paper" id="resumePaper">
          {!hasAnyData && (
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
          )}

          {hasContactData && (
            <div className="resume-header">
              {contact.fullName && (
                <div className="resume-name">{contact.fullName}</div>
              )}

              {contact.headline && (
                <div className="resume-headline">{contact.headline}</div>
              )}

              <div className="resume-contact">
                {contact.email && <span>✉ {contact.email}</span>}

                {contact.phone && <span>📞 {contact.phone}</span>}

                {contact.location && <span>📍 {contact.location}</span>}

                {contact.links.map((link, index) => (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#1a6ef5" }}
                  >
                    🔗 {link}
                  </a>
                ))}
              </div>
            </div>
          )}

          {hasProfessionalSummary && (
            <div className="resume-section">
              <div className="resume-section-title">PROFESSIONAL SUMMARY</div>

              <p
                style={{
                  fontSize: ".85rem",
                  color: "#2d2c2a",
                  lineHeight: 1.6,
                }}
              >
                {summary}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default PreviewScroll;
