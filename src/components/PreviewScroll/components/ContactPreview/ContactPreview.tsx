import type { ContactForm } from "../../../../types/resume";

type ContactPreviewProps = {
  contact: ContactForm;
};
function ContactPreview({ contact }: ContactPreviewProps) {
  return (
    <>
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
            <a key={index} href={link} target="_blank" rel="noreferrer">
              🔗 {link}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default ContactPreview;
