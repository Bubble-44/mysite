import logo from '../assets/logo.svg';

import '../styles/nav-bar.scss';

function Navbar() {
  return (
    <nav className="site-navbar">
      <button className="nav-btn logo-btn">
                <span className="navbar-src">src</span>

        <img src={logo} alt="Logo" className="site-logo main-logo" />
      </button>
      <button className="nav-btn">

        Technology
      </button>
      <button className="nav-btn">

        About
      </button>
      <button className="nav-btn">

        Projects
      </button>
      <button className="nav-btn">

        Contact
      </button>
  
    </nav>
  );
}

export default Navbar;