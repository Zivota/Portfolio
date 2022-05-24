import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MoreAboutMe from "./components/MoreAboutMe";
import OtherSkills from "./components/OtherSkills";
import "./styles/_global.scss";
import Loader from "./components/Loader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);

  const el = useRef();
  const q = gsap.utils.selector(el);
  const t2 = useRef();
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false);
    }, 5000);

    if (isLoaded == false) {
      gsap.from(".quote", {
        scrollTrigger: {
          trigger: ".quote",
          start: "top center",
        },
        opacity: 0,
        top: "-2rem",
        duration: 1,
        ease: "power4.out",
      });
      gsap.from(q(".about__infoHolder"), {
        scrollTrigger: {
          trigger: ".about__info",
          start: "top center",
        },
        opacity: 0,
        marginLeft: "-2rem",
        duration: 1,
        ease: "power4.out",
        stagger: 0.5,
      });
      gsap.from(".about__imgHolder", {
        scrollTrigger: {
          trigger: ".about__imgHolder",
          start: "top center",
        },
        opacity: 0,
        duration: 1,
        ease: "power1.in",
        delay: 1,
      });
      gsap.from(q(".project"), {
        scrollTrigger: {
          trigger: ".project",
          start: "top center",
        },
        opacity: 0,
        transform: "scale(0.9)",
        duration: 0.5,
        ease: "power4.in",
        stagger: 0.8,
      });
    }
  }, [isLoaded]);

  return (
    <Router>
      {isLoaded ? (
        <Loader />
      ) : (
        <div className="app" ref={el}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="moreaboutme" element={<MoreAboutMe />} />
            <Route path="otherskills" element={<OtherSkills />} />
          </Routes>
        </div>
      )}
    </Router>
  );
};

export default App;
