import logo from '../assets/logo.svg';
import techIcon from '../assets/react.svg';
import aboutIcon from '../assets/java.svg';
import projectsIcon from '../assets/HTML.svg';
import '../styles/nav-bar.scss';

function Navbar() {
  return (
    <nav className="site-navbar">
      <button className="nav-btn logo-btn">
        <span className="navbar-src">src</span>
        <img src={logo} alt="Logo" className="site-logo main-logo" />
      </button>
      <button className="nav-btn">
        <img src={techIcon} alt="Technology" className="nav-icon" />
        Technology
      </button>
      <button className="nav-btn">
        <img src={aboutIcon} alt="About" className="nav-icon" />
        About
      </button>
      <button className="nav-btn">
        <img src={projectsIcon} alt="Projects" className="nav-icon" />
        Projects
      </button>
    </nav>
  );
}

export default Navbar;