import React from 'react';
import '../styles/code-effect-tech.css';
import reactLogo from '../assets/react.svg';
import hero from '../assets/phone.json';
import CodeEffect from './CodeEffect';


const sections = [
    {
        codeOpen: `<div class="header">\n    <h2>`,
        title: "Custom Product & Service Configurators",
        codeTitleClose: `    </h2>\n</div>`,
        paragraphOpen: `    <p>`,
        paragraph: "Simplify complex offerings by allowing customers to customize products or build service packages interactively, driving informed decisions and sales.",
        paragraphClose: `    </p>\n`,
        codeClose: `</div>`
    },
    {
        codeOpen: `<div class="header">\n    <h2>`,
        title: "API Integrations",
        codeTitleClose: `    </h2>\n</div>`,
        paragraphOpen: `    <p>`,
        paragraph: "Whatever specialized tools or platforms you rely on—payment gateways, social feeds, industry-specific databases—we ensure your website integrates flawlessly to extend its capabilities.",
        paragraphClose: `    </p>\n`,
        codeClose: `</div>`
    },
    {
        codeOpen: `<div class="header">\n    <h2>`,
        title: "Interactive Scheduling",
        codeTitleClose: `    </h2>\n</div>`,
        paragraphOpen: `    <p>`,
        paragraph: "Empower clients to book appointments, reserve services, or schedule consultations directly on your site, eliminating friction and saving you time.",
        paragraphClose: `    </p>\n`,
        codeClose: `</div>`
    },
    {
        codeOpen: `<div class="header">\n    <h2>`,
        title: "AI Integration",
        codeTitleClose: `    </h2>\n</div>`,
        paragraphOpen: `    <p>`,
        paragraph: "Provide instant customer support, answer FAQs, and guide users 24/7 with intelligent AI integrations, freeing up your resources.",
        paragraphClose: `    </p>\n`,
        codeClose: `</div>`
    },
    {
        codeOpen: `<div class="header">\n    <h2>`,
        title: "CRM & ERP Connectivity",
        codeTitleClose: `    </h2>\n</div>`,
        paragraphOpen: `    <p>`,
        paragraph: "Unify your data and workflow by seamlessly connecting your website with your existing customer relationship management (CRM) or enterprise resource planning (ERP) systems.",
        paragraphClose: `    </p>\n`,
        codeClose: `</div>`
    }
];

function NewTech() {
    return (
        <section className="new-tech">
            <div className="container">
                <div className="row">
                    {/* Section 1 */}

                    <div className="typewriter-section-box  col-lg-8">
                        <CodeEffect
                            segments={[
                                {
                                    text: `import React, { useState } from 'react';`,
                                    language: 'jsx',
                                    className: 'my-code-block'
                                },
                                {
                                    text: `\nfunction Configurator() {`,
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
                                    text: `    <div className="configurator">`,
                                    language: 'jsx',
                                    className: 'my-code-block'
                                },
                                {
                                    text: `      <h2>${sections[0].title}</h2>`,
                                    language: 'jsx',
                                    className: 'section-title'
                                },
                                {
                                    text: `      {/* ...interactive UI here... */}`,
                                    language: 'jsx',
                                    className: 'my-code-block'
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
                                    type: 'image',
                                    src: reactLogo,
                                    alt: 'React Logo',
                                    style: { width: '80px', margin: '1rem auto' }
                                },
                                {
                                    text: `// ${sections[0].paragraph}`,
                                    language: 'html',
                                    className: 'section-paragraph'
                                },

                                {
                                    type: 'lottie',
                                    animationData: hero,
                                    loop: false,
                                    style: { width: '100px', margin: '1rem auto' }
                                }
                            ]}
                            speed={5}
                        />


                    </div>{/* React Logo Section */}
                    <div className="tech-image col-lg-4  d-flex">
                        <img
                            src={reactLogo}
                            alt="React Logo"

                        />
                    </div>
                </div>

                {/* Section 2 */}
                <div className="typewriter-section-box col-lg-8">
                    <CodeEffect
                        segments={[
                            { text: sections[1].codeOpen, language: 'html', className: 'my-code-block' },
                            { text: sections[1].title, language: 'none', className: 'section-title' },
                            { text: sections[1].codeTitleClose, language: 'html', className: 'my-code-block' },
                            { text: sections[1].paragraphOpen, language: 'html', className: 'my-code-block' },
                            { text: sections[1].paragraph, language: 'none', className: 'section-paragraph' },
                            { text: sections[1].paragraphClose, language: 'html', className: 'my-code-block' },
                            { text: sections[1].codeClose, language: 'html', className: 'my-code-block' },
                        ]}
                        speed={15}
                    />
                </div>

                <div className="typewriter-section-box col-lg-8">
                    <CodeEffect
                        segments={[
                            { text: sections[2].codeOpen, language: 'html', className: 'my-code-block' },
                            { text: sections[2].title, language: 'none', className: 'section-title' },
                            { text: sections[2].codeTitleClose, language: 'html', className: 'my-code-block' },
                            { text: sections[2].paragraphOpen, language: 'html', className: 'my-code-block' },
                            { text: sections[2].paragraph, language: 'none', className: 'section-paragraph' },
                            { text: sections[2].paragraphClose, language: 'html', className: 'my-code-block' },
                            { text: sections[2].codeClose, language: 'html', className: 'my-code-block' },
                        ]}
                        speed={15}
                    />
                </div>

                <div className="typewriter-section-box col-lg-8 ">
                    <CodeEffect
                        segments={[
                            { text: sections[3].codeOpen, language: 'html', className: 'my-code-block' },
                            { text: sections[3].title, language: 'none', className: 'section-title' },
                            { text: sections[3].codeTitleClose, language: 'html', className: 'my-code-block' },
                            { text: sections[3].paragraphOpen, language: 'html', className: 'my-code-block' },
                            { text: sections[3].paragraph, language: 'none', className: 'section-paragraph' },
                            { text: sections[3].paragraphClose, language: 'html', className: 'my-code-block' },
                            { text: sections[3].codeClose, language: 'html', className: 'my-code-block' },
                        ]}
                        speed={15}
                    />
                </div>

                <div className="typewriter-section-box col-lg-8">
                    <CodeEffect
                        segments={[
                            { text: sections[4].codeOpen, language: 'html', className: 'my-code-block' },
                            { text: sections[4].title, language: 'none', className: 'section-title' },
                            { text: sections[4].codeTitleClose, language: 'html', className: 'my-code-block' },
                            { text: sections[4].paragraphOpen, language: 'html', className: 'my-code-block' },
                            { text: sections[4].paragraph, language: 'none', className: 'section-paragraph' },
                            { text: sections[4].paragraphClose, language: 'html', className: 'my-code-block' },
                            { text: sections[4].codeClose, language: 'html', className: 'my-code-block' },
                        ]}
                        speed={15}
                    />
                </div>

                {/* Repeat for sections[2], sections[3], etc. */}
            </div>
        </section>
    );
}

export default NewTech;