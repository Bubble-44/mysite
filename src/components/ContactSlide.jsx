import React, { useState, useEffect } from 'react';
import '../styles/contact-slide.scss';
import ContactForm from './ContactForm';
import icon_01 from '../assets/icon_01.svg';
import icon_02 from '../assets/icon_02.svg';
import icon_03 from '../assets/icon_03.svg';
import icon_04 from '../assets/icon_04.svg';
import ContactButton from './ContactButton';
import TerminalScrollText from './TerminalScrollText';

function ContactSlide() {
  const [showForm, setShowForm] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  // Keep real visual viewport in --vh so the address bar doesn’t hide the top
  useEffect(() => {
    const setVh = () => {
      const vh = (window.visualViewport?.height || window.innerHeight) * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setVh();
    window.visualViewport?.addEventListener('resize', setVh);
    window.addEventListener('resize', setVh);
    window.addEventListener('orientationchange', setVh);
    return () => {
      window.visualViewport?.removeEventListener('resize', setVh);
      window.removeEventListener('resize', setVh);
      window.removeEventListener('orientationchange', setVh);
    };
  }, []);

  // Lock page scroll when open
  useEffect(() => {
    document.body.style.overflow = showForm ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [showForm]);

  const handleContactClick = () => {
    setShowForm(true);
    setTimeout(() => setFadeIn(true), 300);
  };

  const handleCloseForm = () => {
    setFadeIn(false);
    setTimeout(() => setShowForm(false), 300);
  };

  return (
    <div className={`contact-slide ${showForm ? 'is-open' : ''}`}>
      <div className='contact-slide-overlay' />
      {/* Header */}
      <div className="contact-slide-header" style={{ position: 'relative', zIndex: 2 }}>
        <div className="contact-slide-tabs d-flex align-items-center">
          <span className="tab me-2">PROBLEMS</span>
          <span className="tab me-2">OUTPUT</span>
          <span className="tab me-2">
            TERMINAL <span className="tab-underline" />
          </span>
          <span className="tab">PORTS</span>
        </div>
        <div className="d-flex justify-content-end align-items-center">
          <span className="header-img-placeholder me-2"><img src={icon_04} alt="Icon 4" /></span>
          <span className="tab me-2">node</span>
          <span className="header-img-placeholder me-2"><img src={icon_02} alt="Icon 2" /></span>
          <span className="header-img-placeholder me-2"><img src={icon_03} alt="Icon 3" /></span>
          <span className="header-text me-2">...</span>
          <span className="header-img-placeholder me-2"><img src={icon_01} alt="Icon 1" /></span>
        </div>
      </div>

      {/* Main section under header */}
      <div className="contact-slide-main" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row w-100" style={{ '--bs-gutter-y': '0', marginTop: 0 }}>
          <div className="col-8 d-flex align-items-center justify-content-start left-section" style={{
            position: 'relative',
            overflow: 'hidden',
            height: '100%',
            minHeight: '1034px ',
          }}>
            <TerminalScrollText />
          </div>
          <div className="col-4 d-flex flex-column align-items-center justify-content-center right-section">
            <ContactButton open={showForm} onClick={showForm ? handleCloseForm : handleContactClick} />
          </div>
        </div>

        {showForm && (
          <div
            style={{
              position: 'absolute',
              top: 0, left: 0, width: '100%', height: '100%',
              zIndex: 3,
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              pointerEvents: 'auto',
            }}
          >
            <div
              className={`contact-container${fadeIn ? ' fade-in' : ''}`}
              style={{
                overflowY: 'auto',
                padding: '2rem',
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                transition: 'opacity 0.5s',
                opacity: fadeIn ? 1 : 0,
              }}
            >
              <ContactForm />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactSlide;