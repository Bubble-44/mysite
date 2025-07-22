import React, { useEffect, useRef } from 'react';
import ParallaxItem from './ParallaxItem';
import wordPressLogo from '../assets/wordPress.svg';
import javascriptLogo from '../assets/java.svg';
import htmlLogo from '../assets/HTML.svg';
import reactLogo from '../assets/react.svg';
import webFlowLogo from '../assets/webFlow.svg';
import wixLogo from '../assets/wix.svg';
import sassLogo from '../assets/sass.svg';

function useResponsiveSpeed(desktop, tablet, mobile) {
  const [speed, setSpeed] = React.useState(desktop);

  React.useEffect(() => {
    const updateSpeed = () => {
      if (window.innerWidth < 600) setSpeed(mobile);
      else if (window.innerWidth < 900) setSpeed(tablet);
      else setSpeed(desktop);
    };
    window.addEventListener('resize', updateSpeed);
    updateSpeed();
    return () => window.removeEventListener('resize', updateSpeed);
  }, [desktop, tablet, mobile]);

  return speed;
}

function Tech() {
  const techRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (techRef.current) {
        techRef.current.style.backgroundPosition = `center ${scrolled * 0.05}px`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


// Responsive speeds for each image box
  const wpSpeed = useResponsiveSpeed(0.14, 0.10, 0.07);
  const jsSpeed = useResponsiveSpeed(0.12, 0.08, 0.05);
  const htmlSpeed = useResponsiveSpeed(0.10, 0.06, 0.04);
  const reactSpeed = useResponsiveSpeed(0.08, 0.05, 0.03);
  const webFlowSpeed = useResponsiveSpeed(0.06, 0.04, 0.02);
  const wixSpeed = useResponsiveSpeed(0.04, 0.03, 0.02);
const sassSpeed = useResponsiveSpeed(0.1, 0.01, 0.005);

  // Configurator speed based on responsive design
const configSpeed = useResponsiveSpeed(0.03, 0.09, 0.06);
const apiSpeed = useResponsiveSpeed(0.04, 0.09, 0.06);
  const schedulingSpeed = useResponsiveSpeed(0.07, 0.09, 0.06);
  const aiIntegrationSpeed = useResponsiveSpeed(0.03, 0.09, 0.06);
  const crmErpSpeed = useResponsiveSpeed(0.1, 0.09, 0.06);

  // Use the responsive speeds in ParallaxItem components
return (
  <section className="tech" ref={techRef}>
    <div className="tech-overlay" />
    <ParallaxItem speed={wpSpeed} className="box-wordpress">
      <img src={wordPressLogo} alt="WordPress Logo" />
    </ParallaxItem>
    <ParallaxItem speed={jsSpeed} className="box-javascript">
      <img src={javascriptLogo} alt="JavaScript Logo" />
    </ParallaxItem>
    <ParallaxItem speed={htmlSpeed} className="box-html">
      <img src={htmlLogo} alt="HTML Logo" />
    </ParallaxItem>
    <ParallaxItem speed={reactSpeed} className="box-react">
      <img src={reactLogo} alt="React Logo" />
    </ParallaxItem>
    <ParallaxItem speed={webFlowSpeed} className="box-webflow">
      <img src={webFlowLogo} alt="Webflow Logo" />
    </ParallaxItem>
      <ParallaxItem speed={wixSpeed} className="box-wix">
        <img src={wixLogo} alt="Wix Logo" />
      </ParallaxItem>
  <ParallaxItem speed={sassSpeed} className="box-sass">
        <img src={sassLogo} alt="Sass Logo" />
      </ParallaxItem>


    <ParallaxItem speed={configSpeed} className="box-configurator">
      <h3>Custom Product & Service Configurators</h3>
      <p>Simplify complex offerings by allowing customers to customize 
        products or build service packages interactively, driving 
        informed decisions and sales.</p>
    </ParallaxItem>


    <ParallaxItem speed={apiSpeed} className="box-api">
      <h3>API Integrations</h3>
      <p>Whatever specialized tools or platforms you rely on payment 
        gateways, social feeds, industry specific databases we ensure 
        your website integrates flawlessly to extend its capabilities.</p>
    </ParallaxItem>

    <ParallaxItem speed={schedulingSpeed} className="box-scheduling">
      <h3>Interactive Scheduling</h3>
      <p>Empower clients to book appointments, reserve services, or 
        schedule consultations directly on your site, eliminating 
        friction and saving you time.</p>
    </ParallaxItem>

    <ParallaxItem speed={aiIntegrationSpeed} className="box-ai-integration">
      <h3>AI Integration</h3>
      <p>Provide instant customer support, answer FAQs,
        and guide users 24/7 with intelligent AI integrations, 
        freeing up your resources.</p>
    </ParallaxItem>


<ParallaxItem speed={crmErpSpeed} className="box-crm-erp">
      <h3>CRM & ERP Connectivity</h3>
      <p>Unify your data and workflow by seamlessly connecting 
        your website with your existing customer relationship management 
        (CRM) or enterprise resource planning (ERP) systems.</p>
    </ParallaxItem>
  </section>

  
  
  );
}

export default Tech;