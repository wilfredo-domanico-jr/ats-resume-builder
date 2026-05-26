import React from "react";
import "./PreviewScroll.css";
import type { ResumeData } from "../../types/resume";
import SummaryPreview from "./components/SummaryPreview/SummaryPreview";
import ExperiencePreview from "./components/ExperiencePreview/ExperiencePreview";
import EducationPreview from "./components/EducationPreview/EducationPreview";
import SkillsPreview from "./components/SkillsPreview/SkillsPreview";
import CertificationsPreview from "./components/CertificationsPreview/CertificationsPreview";
import ProjectsPreview from "./components/ProjectsPreview/ProjectsPreview";
import ContactPreview from "./components/ContactPreview/ContactPreview";

type SectionConfig = {
  id: string;
  label: string;
  enabled: boolean;
};

type PreviewScrollProps = {
  resume: ResumeData;
  sections: SectionConfig[];
};
function PreviewScroll({ resume, sections }: PreviewScrollProps) {
  const { links, ...textFields } = resume.contact;

  const hasTextData = Object.values(textFields).some(
    (val) => val && val.trim() !== "",
  );
  const hasContactData = hasTextData || (links && links.length > 0);

  const componentRegistry: Record<string, React.ReactNode> = {
    summary:
      resume.summary?.trim() !== "" ? (
        <SummaryPreview summary={resume.summary} />
      ) : null,
    experience:
      resume.experience?.length > 0 ? (
        <ExperiencePreview experience={resume.experience} />
      ) : null,
    education:
      resume.education?.length > 0 ? (
        <EducationPreview education={resume.education} />
      ) : null,
    skills:
      resume.skills?.length > 0 ? (
        <SkillsPreview skills={resume.skills} />
      ) : null,
    certifications:
      resume.certifications?.length > 0 ? (
        <CertificationsPreview certifications={resume.certifications} />
      ) : null,
    projects:
      resume.projects?.length > 0 ? (
        <ProjectsPreview projects={resume.projects} />
      ) : null,
  };

  const orderedSectionsToRender = sections
    .filter((section) => section.enabled && componentRegistry[section.id])
    .map((section) => (
      <React.Fragment key={section.id}>
        {componentRegistry[section.id]}
      </React.Fragment>
    ));

  const hasAnyData = hasContactData || orderedSectionsToRender.length > 0;

  return (
    <>
      <div className="preview-scroll">
        {!hasAnyData ? (
          <div className="resume-paper">
            <div className="resume-placeholder">
              <div className="rp-icon">📄</div>
              <h3>Your resume will appear here</h3>
              <p>Fill in your details — preview updates automatically.</p>

              <div className="typing-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        ) : (
          <div className="resume-paper">
            {hasContactData && <ContactPreview contact={resume.contact} />}
            {orderedSectionsToRender}
          </div>
        )}
      </div>
    </>
  );
}

export default PreviewScroll;
