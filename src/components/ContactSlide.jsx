import React from 'react';
import '../styles/contact-slide.scss';
import ContactForm from './ContactForm';
import icon_01 from '../assets/icon_01.svg';
import icon_02 from '../assets/icon_02.svg';
import icon_03 from '../assets/icon_03.svg';
import icon_04 from '../assets/icon_04.svg';
import CodeEffect from './CodeEffect';
import { consoleSegments } from './array';
import ContactButton from './ContactButton';
import TerminalScrollText from './TerminalScrollText';

function ContactSlide() {
    return (
        <div className="contact-slide">
            <div className='contact-slide-overlay' />
            {/* Header */}
            <div className="contact-slide-header">
                <div className="contact-slide-tabs d-flex align-items-center">
                    <span className="tab me-2">PROBLEMS</span>
                    <span className="tab me-2">OUTPUT</span>
                    <span className="tab me-2">
                        TERMINAL <span className="tab-underline" />
                    </span>
                    <span className="tab">PORTS</span>
                </div>
                <div className="d-flex justify-content-end align-items-center">

                    <span className="header-img-placeholder me-2">
                        <img src={icon_04} alt="Icon 4" />
                    </span>
                    <span className="tab me-2">node</span>
                    <span className="header-img-placeholder me-2">
                        <img src={icon_02} alt="Icon 2" />
                    </span>
                    <span className="header-img-placeholder me-2">
                        <img src={icon_03} alt="Icon 3" />
                    </span>
                    <span className="header-text me-2">...</span>
                    <span className="header-img-placeholder me-2">
                        <img src={icon_01} alt="Icon 1" />
                    </span>
                </div>
            </div>
            {/* Main section under header */}
            <div className="contact-slide-main">
                <div
  className="row w-100"
  style={{ '--bs-gutter-y': '0', marginTop: 0 }}
>
                    <div className="col-8 d-flex align-items-center justify-content-start left-section"   style={{
    position: 'relative',      // <-- Add this
    overflow: 'hidden',        // <-- Already present
    height: '100vh',           // <-- Set a fixed height (adjust as needed)
    minHeight: 120,
  }}>
                        <TerminalScrollText />
                    </div>
                    <div className="col-4 d-flex align-items-start justify-content-center right-section">
                        <ContactButton />
                    </div>
                </div>
            </div>


        </div>

    );
}

export default ContactSlide;