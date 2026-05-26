import "./DetailsTab.css";
import Score from "./components/Score/Score";
import Contact from "./components/Contact/Contact";
import Keywords from "./components/Keywords/Keywords";
import Summary from "./components/Summary/Summary";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Certification from "./components/Certification/Certification";
import Projects from "./components/Projects/Projects";
import type {
  ResumeData,
  ContactForm,
  ExperienceForm,
  EducationForm,
  SkillsForm,
  CertificationForm,
  ProjectForm,
} from "../../types/resume";

type DetailsTabProps = {
  resume: ResumeData;
  setContact: (value: ContactForm) => void;
  setKeywords: (value: string[]) => void;
  setSummary: (value: string) => void;
  setExperience: (value: ExperienceForm[]) => void;
  setEducation: (value: EducationForm[]) => void;
  setSkills: (value: SkillsForm[]) => void;
  setCertifications: (value: CertificationForm[]) => void;
  setProjects: (value: ProjectForm[]) => void;
};

function DetailsTab({
  resume,
  setContact,
  setKeywords,
  setSummary,
  setExperience,
  setEducation,
  setSkills,
  setCertifications,
  setProjects,
}: DetailsTabProps) {
  return (
    <>
      <div className="form-panel-inner">
        <Score resume={resume} keywords={resume.keywords} />
        <hr />
        <Contact contact={resume.contact} setContact={setContact} />
        <Keywords
          summary={resume.summary}
          keywords={resume.keywords}
          setKeywords={setKeywords}
        />
        <Summary summary={resume.summary} setSummary={setSummary} />
        <Experience
          experience={resume.experience}
          setExperience={setExperience}
        />
        <Education education={resume.education} setEducation={setEducation} />
        <Skills skills={resume.skills} setSkills={setSkills} />
        <Certification
          certifications={resume.certifications}
          setCertifications={setCertifications}
        />
        <Projects projects={resume.projects} setProjects={setProjects} />
      </div>
    </>
  );
}

export default DetailsTab;
