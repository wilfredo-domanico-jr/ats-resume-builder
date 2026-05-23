import "./Contact.css";
import { useState } from "react";
import type { ContactForm } from "../../../../types/resume";

type ContactTabProps = {
  contact: ContactForm;
  setContact: (value: ContactForm) => void;
};
function Contact({ contact, setContact }: ContactTabProps) {
  const [linkInput, setLinkInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const addLink = () => {
    if (!linkInput.trim()) return;

    setContact({
      ...contact,
      links: [...contact.links, linkInput.trim()],
    });

    setLinkInput("");
  };

  const removeLink = (index: number) => {
    setContact({
      ...contact,
      links: contact.links.filter((_, i) => i !== index),
    });
  };
  return (
    <>
      <div className="section-title">Contact</div>
      <div className="field-row">
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={contact.fullName}
          onChange={handleChange}
          placeholder="e.g. Wilfredo Domanico Jr."
        />
      </div>
      <div className="field-row">
        <label>Headline</label>
        <input
          type="text"
          name="headline"
          value={contact.headline}
          onChange={handleChange}
          placeholder="e.g. Senior Software Engineer"
        />
      </div>
      <div className="field-grid">
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            placeholder="wdomanico@example.com"
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={contact.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>
      <div className="field-row">
        <label>Location</label>
        <input
          type="text"
          name="location"
          value={contact.location}
          onChange={handleChange}
          placeholder="City, Country"
        />
      </div>
      <div className="field-row">
        <label>Links</label>
        <div className="links-input-row">
          <input
            type="url"
            value={linkInput}
            onChange={(e) => setLinkInput(e.target.value)}
            placeholder="https://linkedin.com/in/you"
          />
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={addLink}
          >
            Add
          </button>
        </div>
        <div className="links-tags-wrap">
          {contact.links.map((link, index) => (
            <span key={index} className="link-tag">
              🔗 {link}
              <button type="button" onClick={() => removeLink(index)}>
                ×
              </button>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default Contact;
