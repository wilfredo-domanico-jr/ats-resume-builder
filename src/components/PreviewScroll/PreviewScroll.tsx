import "./PreviewScroll.css";
import type { ResumeData } from "../../types/resume";
import ContactPreview from "./components/ContactPreview/ContactPreview";
import SummaryPreview from "./components/SummaryPreview/SummaryPreview";
import ExperiencePreview from "./components/ExperiencePreview/ExperiencePreview";
import EducationPreview from "./components/EducationPreview/EducationPreview";
import SkillsPreview from "./components/SkillsPreview/SkillsPreview";
import CertificationsPreview from "./components/CertificationsPreview/CertificationsPreview";
import ProjectsPreview from "./components/ProjectsPreview/ProjectsPreview";

type ContactFormProps = {
  resume: ResumeData;
};
function PreviewScroll({ resume }: ContactFormProps) {
  const { links, ...textFields } = resume.contact;

  const hasTextData = Object.values(textFields).some(
    (value) => value.trim() !== "",
  );

  const hasContactData = hasTextData || links.length > 0;
  const hasProfessionalSummary = resume.summary.trim() !== "";
  const hasExperienceData = resume.experience.length > 0;
  const hasEducationData = resume.education.length > 0;
  const hasSkillData = resume.skills.length > 0;
  const hasCertificationData = resume.certifications.length > 0;
  const hasProjecData = resume.projects.length > 0;

  const hasAnyData =
    hasContactData ||
    hasProfessionalSummary ||
    hasExperienceData ||
    hasEducationData ||
    hasSkillData ||
    hasCertificationData ||
    hasProjecData;

  return (
    <>
      <div className="preview-scroll">
        <div className="resume-paper">
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

          {hasContactData && <ContactPreview contact={resume.contact} />}

          {hasProfessionalSummary && (
            <SummaryPreview summary={resume.summary} />
          )}

          {hasExperienceData && (
            <ExperiencePreview experience={resume.experience} />
          )}

          {hasEducationData && (
            <EducationPreview education={resume.education} />
          )}

          {hasSkillData && <SkillsPreview skills={resume.skills} />}

          {hasCertificationData && (
            <CertificationsPreview certifications={resume.certifications} />
          )}

          {hasProjecData && <ProjectsPreview projects={resume.projects} />}
        </div>
      </div>
    </>
  );
}

export default PreviewScroll;
