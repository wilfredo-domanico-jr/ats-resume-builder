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
import type { ContactForm } from "../../types/resume";

type DetailsTabProps = {
  contact: ContactForm;
  setContact: (value: ContactForm) => void;
  keywords: string[];
  setKeywords: (value: string[]) => void;
  summary: string;
  setSummary: (value: string) => void;
};

function DetailsTab({
  contact,
  setContact,
  keywords,
  setKeywords,
  summary,
  setSummary,
}: DetailsTabProps) {
  return (
    <>
      <div className="form-panel-inner">
        <Score />
        <hr />
        <Contact contact={contact} setContact={setContact} />
        <Keywords keywords={keywords} setKeywords={setKeywords} />
        <Summary summary={summary} setSummary={setSummary} />
        <Experience />
        <Education />
        <Skills />
        <Certification />
        <Projects />
      </div>
    </>
  );
}

export default DetailsTab;
