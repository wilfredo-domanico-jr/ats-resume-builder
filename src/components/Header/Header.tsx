import "./Header.css";

type HeaderProps = {
  resetResume: () => void;
};

function Header({ resetResume }: HeaderProps) {
  return (
    <>
      <header className="header">
        <div className="header-left">
          <div className="header-logo">
            ATS-Resume<span>Builder</span>
          </div>
        </div>
        <div className="header-right">
          <button className="theme-toggle">
            <span>🌙</span>
          </button>
          <button className="btn btn-secondary btn-sm">Load sample</button>
          <button onClick={resetResume} className="btn btn-ghost btn-sm">
            Reset
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
