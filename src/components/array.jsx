import hero from '../assets/heroText.json';
import '../App.scss';



// Landing component that displays a CodeEffect effect with Lottie animation



export const landingSegments = [
  {
    text: `\nfunction DontBlend() {`,
    language: 'jsx',
    className: 'my-code-block'
  },
  {
    text: `  const [options, setOptions] = useState({});`,
    language: 'jsx',
    className: 'my-code-block'
  },
  {
    text: `  return (`,
    language: 'jsx',
    className: 'my-code-block'
  },
  {
    type: 'lottie',
    animationData: hero,
    loop: false,
    style: {
      width: '100%',
      maxWidth: '500px',
      margin: '.5rem auto',
      opacity: 1,
      display: 'block',
      height: 'auto'
    },
  },
  {
    text: `    <div className="StandOut">`,
    language: 'jsx',
    className: 'my-code-block'
  },
  {
    text: `Beyond just building websites, I engineer custom, high-performing digital experiences. Expect intuitive design, robust backend, and a flawless, responsive site that looks great and performs perfectly on any device.`,
    language: 'html',
    className: 'section-paragraph',
  },
  {
    text: `    </div>`,
    language: 'jsx',
    className: 'my-code-block'
  },
  {
    text: `  );`,
    language: 'jsx',
    className: 'my-code-block'
  },
  {
    text: `}`,
    language: 'jsx',
    className: 'my-code-block'
  },
  {
    text: `}`,
    language: 'jsx',
    className: 'my-code-block'
  },
  {
    text: `export default DontBlendStandInOut;`,
    language: 'jsx',
    className: 'my-code-block'
  },
  {
    type: 'button',
    text: 'Click Me',
    onClick: () => alert('Button clicked!'),
    className: 'primary-button',
  }
];


export const consoleSegments = [
  {
    text: `export default DontBlendStandInOut;`,
    language: 'html',
    className: 'my-code-block'
  }
];

