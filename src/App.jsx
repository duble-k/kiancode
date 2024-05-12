import React, { useRef } from 'react';
import FixedLeftNav from './components/FixedLeftNav';
import TopNavWithDrawer from './components/TopNavWithDrawer';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Adventures from './components/Adventures';
import SideBusiness from './components/SideBusiness';
import Contact from './components/Contact';
import QuoteComponent from './components/QuoteComponent';

const App = () => {
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const adventureRef = useRef(null);
  const businessRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="flex">
      {/* Fixed Left Navigation for large screens */}
      <FixedLeftNav scrollToRef={scrollToRef} aboutRef={aboutRef} resumeRef={resumeRef} adventureRef={adventureRef} businessRef={businessRef} contactRef={contactRef}/>

      {/* Main content area with conditional margin */}
      <div className="flex-1 lg:ml-48"> {/* Adjust margin-left to match the width of FixedLeftNav */}
        <TopNavWithDrawer scrollToRef={scrollToRef} aboutRef={aboutRef} resumeRef={resumeRef} adventureRef={adventureRef} businessRef={businessRef} contactRef={contactRef}/>
        <div className="p-4"> {/* Padding for content */}
          <Home />
          <About ref={aboutRef}/>
          <Resume ref={resumeRef}/>
          <Adventures ref={adventureRef}/>
          <SideBusiness ref={businessRef}/>
          <Contact ref={contactRef}/>
          <QuoteComponent />
          {/* More components can be added here */}
        </div>
      </div>
    </div>
  );
};

export default App;
