import "./PreviewScroll.css";
import type { ContactForm } from "../../types/resume";

type ContactFormProps = {
  contact: ContactForm;
};
function PreviewScroll({ contact }: ContactFormProps) {
  const hasContactData = Object.values(contact).some(
    (value) => value.trim() !== "",
  );

  return (
    <>
      <div className="preview-scroll">
        <div className="resume-paper" id="resumePaper">
          {!hasContactData && (
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
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default PreviewScroll;
