//Hooks
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

//Libs
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MouseParallax } from "react-just-parallax";

//Components
import Nav from "./nav";
import Sidebar from "./sidebar";

//Imgs
import homeherobannerEs from "../assets/img/home_herobanner_es.png";
import bocas1 from "../assets/img/home_herobanner_right.png";
import bocas2 from "../assets/img/home_herobanner_center.png";
import bocas3 from "../assets/img/home_herobanner_left.png";
import bocas4 from "../assets/img/home_herobanner_left.png";
import redArrow from "../assets/img/redArrow.png";

import SvgLight from "../assets/svg-loaders/ball-triangleLight.svg";
import SvgDark from "../assets/svg-loaders/ball-triangleDark.svg";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
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
    tl.to(sidebar, { x: 0, duration: 3 });
    tl.to(sidebar, { x: 555, duration: 0.4 });
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
      <img
        id="homeHerobannerEs"
        className="header__imgResponsive"
        src={homeherobannerEs}
        alt=""
      />
    </section>
  );
};

export default Header;
