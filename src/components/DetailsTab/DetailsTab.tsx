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
} from "../../types/resume";

type DetailsTabProps = {
  resume: ResumeData;
  setContact: (value: ContactForm) => void;
  setKeywords: (value: string[]) => void;
  setSummary: (value: string) => void;
  setExperience: (value: ExperienceForm[]) => void;
};

function DetailsTab({
  resume,
  setContact,
  setKeywords,
  setSummary,
  setExperience,
}: DetailsTabProps) {
  return (
    <>
      <div className="form-panel-inner">
        <Score />
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
        <Education />
        <Skills />
        <Certification />
        <Projects />
      </div>
    </>
  );
}

export default DetailsTab;
