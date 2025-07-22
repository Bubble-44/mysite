import { useState } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Phone from './components/Phone';
import Tech from './components/Tech';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Hero  />
<Navbar />
<div className="App">
  <Phone  />
  <Tech  />
  <About  />
  <Contact />
</div>
    </>
  );
}

export default App;