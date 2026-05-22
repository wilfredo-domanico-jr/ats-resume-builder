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

function DetailsTab() {
  return (
    <>
      <div className="form-panel-inner">
        <Score />
        <SectionNav />
        <hr />
        <Contact />
        <Keywords />
        <Summary />
        <Experience />
        <Education />
        <Skills />
        <Certification />
        <Projects />
        <Languages />
      </div>
    </>
  );
}

export default DetailsTab;
