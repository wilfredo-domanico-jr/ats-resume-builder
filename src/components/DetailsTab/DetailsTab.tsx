
import './DetailsTab.css'
import Score from './components/Score/Score'
import SectionNav from './components/SectionNav/SectionNav'
import Contact from './components/Contact/Contact'
import Keywords from './components/Keywords/Keywords'
import Summary from './components/Summary/Summary'
import Experience from './components/Experience/Experience'
import Education from './components/Education/Education'
import Skills from './components/Skills/Skills'

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
      </div>
    </>
  )
}

export default DetailsTab
