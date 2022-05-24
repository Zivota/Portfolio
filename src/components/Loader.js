import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/components/_loader.scss";
import Logo from "../UI/Logo";

const Loader = () => {
  const el = useRef();
  const q = gsap.utils.selector(el);
  const t1 = useRef();

  useEffect(() => {
    t1.current = gsap
      .timeline()
      .to(q(".loader__barPercent"), {
        width: "100%",
        duration: 2,
        ease: "power4.in",
      })
      .to(q(".logo h4"), {
        color: "white",
        duration: 0.5,
        ease: "power1.out",
      })
      .to(q(".loader__infoHolder"), {
        opacity: 0,
        duration: 0.5,
        delay: 1,
        ease: "power1.out",
      })
      .to(q(".loader__background1"), {
        height: "100%",
        duration: 1,
        ease: "power4.in",
      })
      .to(
        q(".loader__background2"),
        {
          height: "100%",
          duration: 1,
          ease: "power4.in",
        },
        "<"
      );
  }, []);

  return (
    <div className="loader" ref={el}>
      <div className="loader__infoHolder">
        <Logo />
        <div className="loader__bar">
          <div className="loader__barPercent"></div>
        </div>
      </div>
      <div className="loader__backgroundHolder">
        <div className="loader__background1"></div>
        <div className="loader__background2"></div>
      </div>
    </div>
  );
};

export default Loader;
