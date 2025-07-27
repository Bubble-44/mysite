import React, { useRef, useEffect } from 'react';
import iconLG from '../assets/iconsLG.svg';
import iconMD from '../assets/iconsMD.svg';
import iconSM from '../assets/iconsSM.svg';

function Tech() {
  const iconRef = useRef(null);
  const [bgIcon, setBgIcon] = React.useState(iconLG);

  // Responsive icon swap
  useEffect(() => {
    const updateIcon = () => {
      if (window.innerWidth < 600) {
        setBgIcon(iconSM);
      } else if (window.innerWidth < 900) {
        setBgIcon(iconMD);
      } else {
        setBgIcon(iconLG);
      }
    };
    updateIcon();
    window.addEventListener('resize', updateIcon);
    return () => window.removeEventListener('resize', updateIcon);
  }, []);

  // Parallax effect for icon
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (iconRef.current) {
        iconRef.current.style.transform = `translateX(-50%) translateY(${scrolled * 0.15}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="tech position-relative" style={{ overflow: 'hidden' }}>
      <div className="tech-overlay-bottom" />
      {/* Centered background icon with parallax */}
      <img
        ref={iconRef}
        src={bgIcon}
        alt="Tech Icon"
        className="tech-bg-icon"
      />
      <div className="tech-overlay" />
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="tech-content py-5">
          {/* Row 1: Far left */}
          <div className="row g-4 align-items-center mb-4">
            <div className="col-12 col-md-5 offset-md-0">
              <div className="tech-box p-3 shadow-sm bg-white">
                <h3 className="fs-5 mb-2">Custom Product & Service Configurators</h3>
                <p className="fs-6 mb-0">
                  Simplify complex offerings by allowing customers to customize products or build service packages interactively, driving informed decisions and sales.
                </p>
              </div>
            </div>
          </div>
          {/* Row 2: Far right */}
          <div className="row g-4 align-items-center mb-4">
            <div className="col-12 col-md-5 offset-md-7">
              <div className="tech-box p-3 shadow-sm bg-white">
                <h3 className="fs-5 mb-2">API Integrations</h3>
                <p className="fs-6 mb-0">
                  Whatever specialized tools or platforms you rely on—payment gateways, social feeds, industry databases—we ensure your website integrates flawlessly.
                </p>
              </div>
            </div>
          </div>
          {/* Row 3: Centered wide */}
          <div className="row g-4 align-items-center mb-4">
            <div className="col-12 col-md-8 offset-md-2">
              <div className="tech-box p-3 shadow-sm bg-white">
                <h3 className="fs-5 mb-2">Interactive Scheduling</h3>
                <p className="fs-6 mb-0">
                  Empower clients to book appointments, reserve services, or schedule consultations directly on your site, eliminating friction and saving you time.
                </p>
              </div>
            </div>
          </div>
          {/* Row 4: Mid left */}
          <div className="row g-4 align-items-center mb-4">
            <div className="col-12 col-md-6 offset-md-1">
              <div className="tech-box p-3 shadow-sm bg-white">
                <h3 className="fs-5 mb-2">AI Integration</h3>
                <p className="fs-6 mb-0">
                  Provide instant customer support, answer FAQs, and guide users 24/7 with intelligent AI integrations, freeing up your resources.
                </p>
              </div>
            </div>
          </div>
          {/* Row 5: Mid right */}
          <div className="row g-4 align-items-center mb-4">
            <div className="col-12 col-md-6 offset-md-5">
              <div className="tech-box p-3 shadow-lg bg-white">
                <h3 className="fs-5 mb-2">CRM & ERP Connectivity</h3>
                <p className="fs-6 mb-0">
                  Unify your data and workflow by seamlessly connecting your website with your existing CRM or ERP systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tech;