import React, { useEffect, useState } from 'react';

const triangle = (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    style={{
      marginRight: 6,
      verticalAlign: 'middle',
      flexShrink: 0,
      transform: 'rotate(-90deg)',
    }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon points="2,4 10,4 6,10" fill="#888" />
  </svg>
);

const items = [
  { label: '<!doctype html>', depth: 0, triangle: false },
  { label: '<html lang="en">', depth: 0, triangle: true },
  { label: '<head>', depth: 1, triangle: true },
  { label: '<meta charset="UTF-8" />', depth: 2, triangle: false },
  { label: '<meta http-equiv="X-UA-Compatible" content="IE=edge" />', depth: 2, triangle: false },
  { label: '<meta name="viewport" content="width=device-width, initial-scale=1.0" />', depth: 2, triangle: false },
  { label: '<meta name="description" content="Isaac Monson’s portfolio site for web, code, and design." />', depth: 2, triangle: false },
  { label: '<meta name="author" content="Isaac Monson" />', depth: 2, triangle: false },
  { label: '<meta name="theme-color" content="#222" />', depth: 2, triangle: false },
  
  { label: '<link rel="icon" type="image/svg+xml" href="/flavicon.svg" />', depth: 2, triangle: false },
  { label: '<link rel="stylesheet" href="/assets/main.css?v=2.1.7" />', depth: 2, triangle: false },
  { label: '<link rel="preload" href="/assets/fonts/menlo.woff2" as="font" type="font/woff2" crossorigin />', depth: 2, triangle: false },
  { label: '<script src="/assets/analytics.js" async defer></script>', depth: 2, triangle: false },
  { label: '<script src="/assets/animations.js"></script>', depth: 2, triangle: false },
  { label: '<script src="/assets/contact-form.js"></script>', depth: 2, triangle: false },
  { label: '<title>Isaac Monson | Web Dev & Design</title>', depth: 2, triangle: false },
  { label: '</head>', depth: 1, triangle: false },
  { label: '<body>', depth: 1, triangle: true },
  { label: '<header><nav><ul><li>Home</li><li>About</li><li>Projects</li><li>Blog</li><li>Contact</li></ul></nav></header>', depth: 2, triangle: true },
  { label: '<div class="announcement-bar">🚀 New: Portfolio v2.1.7 just launched! <a href="/blog/update">Read more</a></div>', depth: 2, triangle: false },
  { label: '<main id="main-content">', depth: 2, triangle: true },
  { label: '<section class="hero"><h1>Isaac Monson</h1><p>Building web experiences for tomorrow.</p><a href="#work" class="cta">See My Work</a></section>', depth: 3, triangle: true },
  { label: '<section class="about"><h2>About Me</h2><p>Designer, developer, and lifelong learner. <span class="highlight">React, Node, CSS, Figma</span></p></section>', depth: 3, triangle: true },
  { label: '<section class="skills"><ul><li>JavaScript</li><li>TypeScript</li><li>React</li><li>Node.js</li><li>CSS/Sass</li><li>Figma</li></ul></section>', depth: 3, triangle: true },
  { label: '<section class="projects"><h2>Featured Projects</h2><div class="project-list"><div class="project-card"><h3>CodeCollab</h3><p>Real-time code sharing for teams.</p><a href="/projects/codecollab">Details</a></div><div class="project-card"><h3>DesignDash</h3><p>Instant design feedback platform.</p><a href="/projects/designdash">Details</a></div><div class="project-card"><h3>PixelPilot</h3><p>AI-powered image optimizer.</p><a href="/projects/pixelpilot">Details</a></div></div></section>', depth: 3, triangle: true },
  { label: '<section class="blog"><h2>Latest Posts</h2><ul><li><a href="/blog/js-tricks">10 JavaScript Tricks</a></li><li><a href="/blog/css-grid">CSS Grid Deep Dive</a></li><li><a href="/blog/react-hooks">React Hooks: Beyond useState</a></li></ul></section>', depth: 3, triangle: true },
  { label: '<section class="testimonials"><h2>Testimonials</h2><div class="testimonial"><p>"Isaac is a wizard with web tech!"</p><span>- Client</span></div><div class="testimonial"><p>"Fast, creative, reliable."</p><span>- Collaborator</span></div></section>', depth: 3, triangle: true },
  { label: '<aside class="sidebar"><div class="profile"><img src="/assets/me.jpg" alt="Isaac" /><span>@isaacmonson</span></div><div class="links"><a href="https://github.com/isaacmonson">GitHub</a> | <a href="https://twitter.com/isaacmonson">Twitter</a> | <a href="mailto:isaac@mysite.com">Email</a></div></aside>', depth: 2, triangle: true },
  { label: '<div class="contact-form"><form action="/contact" method="POST"><input type="text" name="name" placeholder="Name" /><input type="email" name="email" placeholder="Email" /><textarea name="message" placeholder="Message"></textarea><button type="submit">Send</button></form></div>', depth: 2, triangle: false },
  { label: '<footer><div class="footer-content">© 2025 Isaac Monson | <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms</a> | <a href="/sitemap">Sitemap</a></div></footer>', depth: 2, triangle: true },
  { label: '<script type="module" src="/src/main.jsx"></script>', depth: 2, triangle: false },
  
  { label: '<script src="/assets/animations.js"></script>', depth: 2, triangle: false },
  { label: '<script src="/assets/contact-form.js"></script>', depth: 2, triangle: false },
  { label: '<script src="/assets/extra.js"></script>', depth: 2, triangle: false },
  { label: '<div class="debug-log">[INFO] Build complete. [WARN] Unused variable. [ERROR] Missing favicon.</div>', depth: 2, triangle: false },

  { label: '<section class="hero"><h1>Isaac Monson</h1><p>Building web experiences for tomorrow.</p><a href="#work" class="cta">See My Work</a></section>', depth: 3, triangle: true },
  { label: '<section class="about"><h2>About Me</h2><p>Designer, developer, and lifelong learner. <span class="highlight">React, Node, CSS, Figma</span></p></section>', depth: 3, triangle: true },
  { label: '<section class="skills"><ul><li>JavaScript</li><li>TypeScript</li><li>React</li><li>Node.js</li><li>CSS/Sass</li><li>Figma</li></ul></section>', depth: 3, triangle: true },
  { label: '<section class="projects"><h2>Featured Projects</h2><div class="project-list"><div class="project-card"><h3>CodeCollab</h3><p>Real-time code sharing for teams.</p><a href="/projects/codecollab">Details</a></div><div class="project-card"><h3>DesignDash</h3><p>Instant design feedback platform.</p><a href="/projects/designdash">Details</a></div><div class="project-card"><h3>PixelPilot</h3><p>AI-powered image optimizer.</p><a href="/projects/pixelpilot">Details</a></div></div></section>', depth: 3, triangle: true },
  { label: '<section class="blog"><h2>Latest Posts</h2><ul><li><a href="/blog/js-tricks">10 JavaScript Tricks</a></li><li><a href="/blog/css-grid">CSS Grid Deep Dive</a></li><li><a href="/blog/react-hooks">React Hooks: Beyond useState</a></li></ul></section>', depth: 3, triangle: true },
  { label: '<section class="testimonials"><h2>Testimonials</h2><div class="testimonial"><p>"Isaac is a wizard with web tech!"</p><span>- Client</span></div><div class="testimonial"><p>"Fast, creative, reliable."</p><span>- Collaborator</span></div></section>', depth: 3, triangle: true },
  { label: '<aside class="sidebar"><div class="profile"><img src="/assets/me.jpg" alt="Isaac" /><span>@isaacmonson</span></div><div class="links"><a href="https://github.com/isaacmonson">GitHub</a> | <a href="https://twitter.com/isaacmonson">Twitter</a> | <a href="mailto:isaac@mysite.com">Email</a></div></aside>', depth: 2, triangle: true },
  { label: '<div class="contact-form"><form action="/contact" method="POST"><input type="text" name="name" placeholder="Name" /><input type="email" name="email" placeholder="Email" /><textarea name="message" placeholder="Message"></textarea><button type="submit">Send</button></form></div>', depth: 2, triangle: false },
  { label: '<footer><div class="footer-content">© 2025 Isaac Monson | <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms</a> | <a href="/sitemap">Sitemap</a></div></footer>', depth: 2, triangle: true },
  { label: '<script type="module" src="/src/main.jsx"></script>', depth: 2, triangle: false },
  { label: '</body>', depth: 1, triangle: false },
  { label: '</html>', depth: 0, triangle: false },
];

function TerminalScrollText() {
  const [top, setTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setTop(-window.scrollY * .2); // Parallax: slower than main scroll
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        top: top,
        left: 0,
        width: '100%',
        minHeight: 120,
fontSize: 'clamp(0.35rem, 1vw, 0.5rem)',        fontFamily: 'Menlo, Monaco, Consolas, monospace',
        color: '#eee',
        opacity: 0.7,
        pointerEvents: 'none', // Prevents mouse events
      }}
    >
      {items.map((item, i) => (
        <div
          key={item.label + i}
          style={{
            display: 'flex',
            alignItems: 'center',
            cursor: item.triangle ? 'pointer' : 'default',
            padding: '2px 0',
            paddingLeft: `${item.depth * 18}px`
          }}
        >
          {item.triangle ? triangle : <span style={{ width: 18, display: 'inline-block' }} />}
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default TerminalScrollText;