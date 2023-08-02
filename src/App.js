"use client";
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import Loader from './components/loader';
import Hero from './components/hero';

const App = () => {
  const [timeline, setTimeline] = useState(null);

  useEffect(()=>{

      const tl = gsap.timeline();
      console.log("timeline");
      setTimeline(tl);
  }, []);

  return (
    <div className="App">
      <Loader timeline={timeline}/>
      <Hero/>
    </div>
  );
}

export default App;
