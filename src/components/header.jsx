//Hooks
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

//Libs
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//Components
import Nav from "./nav";
import Sidebar from "./sidebar";

//Imgs
import Bocas from "../assets/img/bocas.png";
import bocas1 from "../assets/img/bocas1.png";
import bocas2 from "../assets/img/bocas2.png";
import bocas3 from "../assets/img/bocas3.png";
import bocas4 from "../assets/img/bocas4.png";
import redArrow from "../assets/img/redArrow.png";

import SvgLight from "../assets/svg-loaders/ball-triangleLight.svg";
import SvgDark from "../assets/svg-loaders/ball-triangleDark.svg";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  //Primer contrenedor animado
  const firstAnimatorContainerRef = useRef(null);
  const scrollIconLightRef = useRef(null);
  const scrollIconDarkRef = useRef(null);
  const scrollTextRef = useRef(null);

  useEffect(() => {
    const firstAnimatorContainer = firstAnimatorContainerRef.current;
    const scrollLightIcon = scrollIconLightRef.current;
    const scrollDarkIcon = scrollIconDarkRef.current;
    const scrollText = scrollTextRef.current;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: firstAnimatorContainer,
        pin: true,
        // markers: true,
        start: "top top",
        end: "+=200 0",
        scrub: 3,
      },
    });
    tl.to(scrollLightIcon, { height: "50px", duration: 1 });
    tl.to(scrollDarkIcon, { height: "50px", duration: 1 }, "=-1");
    tl.to(scrollText, { fontSize: "20px", duration: 1 }, "-=1");
  }, [firstAnimatorContainerRef]);

  //Segundo contenedor animado
  const secondAnimatorContainerRef = useRef(null);
  const sidebarRef = useRef(null);
  const bocas1ref = useRef(null);
  const bocas2ref = useRef(null);
  const text1ref = useRef(null);
  const text2ref = useRef(null);
  const bocas3ref = useRef(null);
  const bocas4ref = useRef(null);
  const redArrowRef = useRef(null);

  useEffect(() => {
    const secondAnimatorContainer = secondAnimatorContainerRef.current;
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
        trigger: secondAnimatorContainer,
        // pin: true,
        // markers: true,
        start: "top 300px",
        end: "end top",
        // scrub: 3,
      },
    });
    tl.to(sidebar, { x: 500, duration: 0.4 });
    tl.to(bocas2, { y: 800, duration: 0.4 });
    tl.to(bocas3, { x: -960, duration: 0.4 });
    tl.to(text1, { y: 630, duration: 0.4 });
    tl.to(text2, { x: 1367, duration: 0.4 });
    tl.to(bocas4, { y: -500, duration: 0.4 });
    tl.to(bocas1, { x: -1500, duration: 0.4 });
    tl.to(redArrow, { rotate: "360deg", duration: 0.4 });
  }, [secondAnimatorContainerRef]);

  const { t } = useTranslation();
  return (
    <section>
      <header className="header">
        {/* <Nav /> */}
        <div className="header__scroll" ref={firstAnimatorContainerRef}>
          <img
            className="header__scroll--iconLight"
            src={SvgLight}
            alt=""
            ref={scrollIconLightRef}
          />
          <img
            className="header__scroll--iconDark"
            src={SvgDark}
            alt=""
            ref={scrollIconDarkRef}
          />
          <h1 ref={scrollTextRef}>{t("header.scroll")}</h1>
        </div>
        <div className="header__animate" ref={secondAnimatorContainerRef}>
          <div
            className="header__animate--item header__animate--item-sidebar"
            ref={sidebarRef}
          >
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
          <p
            className="header__animate--item header__animate--item-txt1"
            ref={text1ref}
          >
            {t("header.creamos")}
          </p>
          <p
            className="header__animate--item header__animate--item-txt2"
            ref={text2ref}
          >
            {t("header.realidades")}
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
      <div className="spaceSection"></div>
      <div className="spaceSection"></div>
      <img className="header__imgResponsive" src={Bocas} alt="" />
    </section>
  );
};


export default Header;
