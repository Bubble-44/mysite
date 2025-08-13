import './App.scss';
import Navbar from './components/Navbar';

import Phone from './components/Phone';
import About from './components/About';
import NewTech from './components/NewTech';
import Landing from './components/Landing';
import ContactSlide from './components/ContactSlide'
import ScrollCounter from './components/ScrollCounter';
import Projects from './components/Projects';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <ScrollCounter />
        <Landing />
        <ContactSlide />
        <Phone />
        <NewTech />
        <About />
        <Projects />
      </div>
  );
}

export default App;