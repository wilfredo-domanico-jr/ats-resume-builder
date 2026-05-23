import "./DetailsTab.css";
import Score from "./components/Score/Score";
import SectionNav from "./components/SectionNav/SectionNav";
import Contact from "./components/Contact/Contact";
import Keywords from "./components/Keywords/Keywords";
import Summary from "./components/Summary/Summary";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Certification from "./components/Certification/Certification";
import Projects from "./components/Projects/Projects";
import Languages from "./components/Languages/Languages";
import Volunteer from "./components/Volunteer/Volunteer";
import type { ContactForm } from "../../types/resume";

type DetailsTabProps = {
  contact: ContactForm;
  setContact: (value: ContactForm) => void;
  keywords: string[];
  setKeywords: (value: string[]) => void;
};

function DetailsTab({
  contact,
  setContact,
  keywords,
  setKeywords,
}: DetailsTabProps) {
  return (
    <>
      <div className="form-panel-inner">
        <Score />
        <SectionNav />
        <hr />
        <Contact contact={contact} setContact={setContact} />
        <Keywords keywords={keywords} setKeywords={setKeywords} />
        <Summary />
        <Experience />
        <Education />
        <Skills />
        <Certification />
        <Projects />
        <Languages />
        <Volunteer />
      </div>
    </>
  );
}

export default DetailsTab;
