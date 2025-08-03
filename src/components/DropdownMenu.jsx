function DropdownMenu({ isOpen, onItemClick }) {
  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();

    // Temporarily set scroll-behavior to auto
    const html = document.documentElement;
    const prevBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';

    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'auto' });
    }

    // Restore previous scroll-behavior
    setTimeout(() => {
      html.style.scrollBehavior = prevBehavior;
      onItemClick();
    }, 300);
  };

  return (
    <section className={`site-dropdown-menu${isOpen ? ' open' : ''}`}>
      <nav className="dropdown-links">
        <a href="#hero" className="dropdown-button" onClick={e => handleLinkClick(e, 'hero')}>
          Home
        </a>
        <a href="#tech" className="dropdown-button" onClick={e => handleLinkClick(e, 'tech')}>
          Technology
        </a>
        <a href="#about" className="dropdown-button" onClick={e => handleLinkClick(e, 'about')}>
          About
        </a>
        <a href="#contact" className="dropdown-button" onClick={e => handleLinkClick(e, 'contact')}>
          Contact
        </a>
      </nav>
    </section>
  );
}

export default DropdownMenu;