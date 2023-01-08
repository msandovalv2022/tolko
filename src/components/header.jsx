//Hooks
import { useEffect, useRef } from "react";

//Libs
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//Components
import Nav from "./nav";
import Sidebar from "./sidebar";

//Imgs
import bocas1 from "../assets/img/bocas1.png";
import bocas2 from "../assets/img/bocas2.png";
import bocas3 from "../assets/img/bocas3.png";
import bocas4 from "../assets/img/bocas4.png";
import redArrow from "../assets/img/redArrow.png";

import { FaMouse } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
    const animatorContainerRef = useRef(null);
    const sidebarRef = useRef(null);
    const bocas1ref = useRef(null);
    const bocas2ref = useRef(null);
    const text1ref = useRef(null);
    const text2ref = useRef(null);
    const bocas3ref = useRef(null);
    const bocas4ref = useRef(null);
    const redArrowRef = useRef(null);

  useEffect(() => {
    const animatorContainer = animatorContainerRef.current;
    const sidebar = sidebarRef.current;
    const bocas1 = bocas1ref.current;
    const bocas2 = bocas2ref.current;
    const text1 = text1ref.current;
    const text2 = text2ref.current;
    const bocas3 = bocas3ref.current;
    const bocas4 = bocas4ref.current;
    const redArrow = redArrowRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: animatorContainer,
        pin: true,
        // markers: true,
        start: "top top",
        end: "+=700 0",
        scrub: 3,
      },
    });
    tl.to(sidebar, {x: 500, duration: 300});
    tl.to(bocas2, {y: 800, duration: 300});
    tl.to(bocas3, {x: -960, duration: 300});
    tl.to(text1, {y: 630, duration: 300});
    tl.to(text2, {x: 1367, duration: 300});
    tl.to(bocas4, {y: -500, duration: 300});
    tl.to(bocas1, {x: -1500, duration: 300});
    tl.to(redArrow, {rotate: '360deg', duration: 8});
    
  }, [animatorContainerRef]);
  return (
    <header className="header">
      <Nav />
      <div className="header__scroll">
        <FaMouse size="5rem" />
        <h1>Scroll</h1>
      </div>
      <div className="header__animate" ref={animatorContainerRef}>
        <div className="header__animate--item header__animate--item-sidebar" ref={sidebarRef}>
          <Sidebar />
        </div>
        <img
          src={bocas1}
          alt="bocas"
          className="header__animate--item header__animate--item-boca1"
          ref={bocas1ref}
        />
        <img
          src={bocas2}
          alt="bocas"
          className="header__animate--item header__animate--item-boca2"
          ref={bocas2ref}
        />
        <p className="header__animate--item header__animate--item-txt1" ref={text1ref}>
          CREAMOS
        </p>
        <p className="header__animate--item header__animate--item-txt2" ref={text2ref}>
          MEJORES REALIDADES
        </p>
        <img
          src={bocas3}
          alt="bocas"
          className="header__animate--item header__animate--item-boca3"
          ref={bocas3ref}
        />
        <img
          src={bocas4}
          alt="bocas"
          className="header__animate--item header__animate--item-boca4"
          ref={bocas4ref}
        />
        <img
          src={redArrow}
          alt="bocas"
          className="header__animate--item header__animate--item-redArrow"
          ref={redArrowRef}
        />
      </div>
    </header>
  );
};

export default Header;
