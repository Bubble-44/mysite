import { useState, useRef, useEffect } from 'react';
import logo from '../assets/logo.svg';
import Lottie from 'lottie-react';
import toggleAnimation from '../assets/toggle.json';
import DropdownMenu from './DropdownMenu';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const lottieRef = useRef();

  // Disable scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  const handleToggle = () => {
    if (lottieRef.current) {
      lottieRef.current.setDirection(menuOpen ? -1 : 1);
      lottieRef.current.play();
    }
    setMenuOpen(open => !open);
  };

  return (
    <nav className="site-navbar">
      <img src={logo} alt="Logo" className="site-logo" />
      <div
        className="site-menu-toggle"
        onClick={handleToggle}
        aria-label="Toggle menu"
        tabIndex={0}
        role="button"
      >
        <Lottie
          lottieRef={lottieRef}
          animationData={toggleAnimation}
          loop={false}
          autoplay={false}
          style={{ width: 67, height: 67 }}
        />
      </div>
      <DropdownMenu
  isOpen={menuOpen}
  onItemClick={() => {
    if (lottieRef.current) {
      lottieRef.current.setDirection(-1);
      lottieRef.current.goToAndPlay(lottieRef.current.getDuration(true), true); // Play from end in reverse
    }
    setMenuOpen(false);
  }}
/>
    </nav>
  );
}

export default Navbar;