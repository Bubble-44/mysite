import './App.scss';
import Navbar from './components/Navbar';

import Phone from './components/Phone';
import About from './components/About';
import Contact from './components/Contact';
import NewTech from './components/NewTech';
import Landing from './components/Landing';
import ScrollCounter from './components/ScrollCounter';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <ScrollCounter />
      <div style={{ marginTop: '64px' }}>
        <Landing />
        
        <Phone />
        <NewTech />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;