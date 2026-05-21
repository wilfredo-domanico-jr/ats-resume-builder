import './MobileViewToggle.css'

function MobileViewToggle() {
  return (
    <>
    <div 
        className="mobile-tabs">
      <button className="tab active">
        ✏️ Form
      </button>
      <button className="tab">
        👁 Preview
      </button>
    </div>
    </>
     
  )
}

export default MobileViewToggle
