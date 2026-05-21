
import './Tabs.css'



function Tabs() {
  return (
    <>
    <div className="tabs">
          <button
            className="tab active"
          >
            Resume Details
          </button>
          <button
            className="tab"
          >
            Sections & Order
          </button>
          <button
            className="tab"
          >
            Appearance
          </button>
        </div>
    </>
  )
}

export default Tabs
