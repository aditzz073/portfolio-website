import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, StarsCanvas, Works, Skills, Footer, Extracurricular } from './components';

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="relative z-0 bg-primary">
        {/* Global starry background */}
        <div className="fixed inset-0 z-0">
          <StarsCanvas />
        </div>
        
        {/* Main content with higher z-index */}
        <div className="relative z-10">
          <div>
            <Navbar />
            <Hero />
          </div>
          <About />
          <Skills />
          <Experience />
          <Works />
          <Extracurricular />
          <Contact />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
