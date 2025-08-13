import hero from '../assets/heroText.json';
import '../App.scss';

// Neon gradient SVG divider as a data URL
const hrDividerSvg =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 8" preserveAspectRatio="none">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stop-color="#cfd8dc" stop-opacity="0.55"/>
          <stop offset="50%"  stop-color="#5bbcff" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#cfd8dc" stop-opacity="0.55"/>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="1000" height="8" rx="4" ry="4" fill="url(#g)"/>
    </svg>`
  );


export const landingSegments = [
  { text: `// Build something remarkable`, language: 'html', className: 'code-comment' },
  { text: `\nfunction DontBlend() {`, language: 'jsx', className: 'my-code-block' },
  { text: `  const [options, setOptions] = useState({});`, language: 'jsx', className: 'my-code-block' },
  { text: `  return (`, language: 'jsx', className: 'my-code-block' },
  {
    type: 'lottie',
    animationData: hero,
    loop: false,
    style: { width: '100%', maxWidth: '500px', margin: '.5rem auto', opacity: 1, display: 'block', height: 'auto' },
  },
  { text: `    <div className="StandOut">`, language: 'jsx', className: 'my-code-block' },
  {
    text: `Beyond just building websites, I engineer custom, high-performing digital experiences. Expect intuitive design, robust backend, and a flawless, responsive site that looks great and performs perfectly on any device.`,
    language: 'html',
    className: 'section-paragraph',
  },
  { text: `    </div>`, language: 'jsx', className: 'my-code-block' },
  { text: `  );`, language: 'jsx', className: 'my-code-block' },
  { text: `}`, language: 'jsx', className: 'my-code-block' },
];

// Console (unchanged)
export const consoleSegments = [
  { text: `export default DontBlendStandInOut;`, language: 'html', className: 'my-code-block' }
];

// Phone section (cooler heading + neon divider)
export const phoneSegments = [
  { text: `// Vision`, language: 'jsx', className: 'code-comment' },
  { text: `Bring Your Vision to Life`, language: 'html', className: 'section-heading gradient-text' },
  {
    type: 'image',
    src: hrDividerSvg,
    alt: 'divider',
    style: { width: '80%', height: '3px', display: 'block', margin: '0.75rem auto' }
  },
  {
    text: `I believe in a truly collaborative approach. Your project begins with a deep dive into your goals, followed by a transparent development process. I will be your partner in bringing your unique vision to life, ensuring every pixel and every interaction serves your ultimate objective.`,
    language: 'html',
    className: 'section-paragraph',
  },
  { text: `// end`, language: 'jsx', className: 'code-comment dim' },
];

// NewTech data
export const techSections = [
  {
    title: 'Custom Product & Service Configurators',
    paragraph:
      'Simplify complex offerings by allowing customers to customize products or build service packages interactively, driving informed decisions and sales.',
  },
  {
    title: 'API Integrations',
    paragraph:
      'Whatever specialized tools or platforms you rely on—payment gateways, social feeds, industry-specific databases—we ensure your website integrates flawlessly to extend its capabilities.',
  },
  {
    title: 'Interactive Scheduling',
    paragraph:
      'Empower clients to book appointments, reserve services, or schedule consultations directly on your site, eliminating friction and saving you time.',
  },
  {
    title: 'AI Integration',
    paragraph:
      'Provide instant customer support, answer FAQs, and guide users 24/7 with intelligent AI integrations, freeing up your resources.',
  },
  {
    title: 'CRM & ERP Connectivity',
    paragraph:
      'Unify your data and workflow by seamlessly connecting your website with your existing customer relationship management (CRM) or enterprise resource planning (ERP) systems.',
  },
];


export const aboutSegments = [
  { text: `// About`, language: 'jsx', className: 'code-comment' },
  { text: `About Me`, language: 'html', className: 'section-heading gradient-text' },
  {
    type: 'image',
    src: hrDividerSvg,
    alt: 'divider',
    style: { width: '80%', height: '3px', display: 'block', margin: '0.75rem auto' }
  },
  {
    text: `I am a dedicated, self-taught web developer driven by a passion for crafting impactful digital experiences and a commitment to continuous learning. Eager to bring your ideas to life.`,
    language: 'html',
    className: 'section-paragraph',
  },
  { text: `// end`, language: 'jsx', className: 'code-comment dim' },
];




export const contactSegments = [
  { text: `// Contact`, language: 'html', className: 'code-comment code-line' },
  { text: `Get in Touch`, language: 'html', className: 'section-heading gradient-text' },
  {
    type: 'image',
    src: hrDividerSvg,
    alt: 'divider',
    className: 'divider-img',
    imgStyle: { width: '80%', height: '3px', display: 'block', margin: '0.75rem auto' }
  },
  {
    text: `Ready to bring your web ideas to life? Or perhaps you’re looking for a reliable developer to enhance your existing online presence? Let’s connect! I’m always excited to discuss new projects, explore collaborations, and help businesses like yours thrive online.`,
    language: 'html',
    className: 'section-paragraph',
  },
  { text: `// end`, language: 'html', className: 'code-comment code-line dim' },
];

// Little emoji accents for each tech card
const techIcons = ['🧩', '🔌', '📅', '🤖', '🔗'];

// Build segments: title (gradient), neon divider, paragraph, tiny code-comment
export const techSectionsSegments = techSections.map((s, i) => ([
  { text: `${techIcons[i % techIcons.length]} ${s.title}`, language: 'html', className: 'section-heading gradient-text' },
  {
    type: 'image',
    src: hrDividerSvg,
    alt: 'divider',
    style: { width: '80%', height: '3px', display: 'block', margin: '0.5rem auto' },
  },
  { text: s.paragraph, language: 'html', className: 'section-paragraph' },
  { text: `// feature ${i + 1}`, language: 'jsx', className: 'code-comment dim' },
]));