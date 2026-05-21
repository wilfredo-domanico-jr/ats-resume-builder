import './App.css';
import { useState } from "react";

import Toast from "./components/Toast/Toast";
import Header from "./components/Header/Header";
import MobileViewToggle from "./components/MobileViewToggle/MobileViewToggle";
import Tabs from './components/Tabs/Tabs';
// import PreviewToolbar from './components/PreviewToolbar/PreviewToolbar';
import DetailsTab from './components/DetailsTab/DetailsTab';

function App() {
   const [showToast, setShowToast] = useState(false);

   
  return (
    <>
      {showToast && (<Toast message="Item deleted successfully" icon="🗑️" />)}

      <Header />
      <MobileViewToggle />

      <div className="app-layout">
        <aside className="form-panel">
            <Tabs />
            <DetailsTab />
            
        </aside>
        {/* <main className="preview-panel">
            <PreviewToolbar />
        </main> */}
      </div>
    </>
  )
}

export default App
