
import './DetailsTab.css'
import Score from './components/Score/Score'
import SectionNav from './components/SectionNav/SectionNav'
import Contact from './components/Contact/Contact'

function DetailsTab() {
  return (
    <>
      <div className="form-panel-inner">
        <Score />
        <SectionNav />
         <hr />
        <Contact />
      </div>
    </>
  )
}

export default DetailsTab
