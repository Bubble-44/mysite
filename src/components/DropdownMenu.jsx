function DropdownMenu({ isOpen, onItemClick }) {
  const handleLinkClick = (e) => {
    // Let the anchor link work, then close menu after 300ms
    setTimeout(() => {
      onItemClick();
    }, 300);
  };

  return (
    <section className={`site-dropdown-menu${isOpen ? ' open' : ''}`}>
      <nav className="dropdown-links">
        <a href="#hero" className="dropdown-button" onClick={handleLinkClick}>
          Home
        </a>
        <a href="#tech" className="dropdown-button" onClick={handleLinkClick}>
          Technology
        </a>
        <a href="#about" className="dropdown-button" onClick={handleLinkClick}>
          About
        </a>
        <a href="#contact" className="dropdown-button" onClick={handleLinkClick}>
          Contact
        </a>
      </nav>
    </section>
  );
}

export default DropdownMenu;