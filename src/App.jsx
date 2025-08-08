import './App.scss';
import Navbar from './components/Navbar';

import Phone from './components/Phone';
import About from './components/About';
import Contact from './components/Contact';
import NewTech from './components/NewTech';
import Landing from './components/Landing';
import ContactSlide from './components/contactSlide';
import ScrollCounter from './components/ScrollCounter';

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
        <Contact />
      </div>
  );
}

export default App;