import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SvgLight from "../assets/svg-loaders/ball-triangleLight.svg";
import SvgDark from "../assets/svg-loaders/ball-triangleDark.svg";

gsap.registerPlugin(ScrollTrigger);
const Preloader = () => {
  useEffect(() => {
    const preloaderContainer = document.querySelector("#preloader_container");
    const preloaderIcon = document.querySelector(".preloaderImg");
    const preloaderTitle = document.querySelector(".preloader__title");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: preloaderContainer,
        // markers: true,
        start: "top top",
        end: "+=200 0",
      },
    });
    tl.to(preloaderContainer, {y:"0px", duration: 1.8});
    tl.to(preloaderContainer, {y:"-800px", duration: 1.5});
    tl.to(preloaderContainer, {display:"none", duration: 0.1});
  }, []);
  return (
    <section id="preloader_container" className="preloader">
      <img
        src={SvgLight}
        alt="svg loader light"
        className="preloader__iconLight preloaderImg"
      />
      <img
        src={SvgDark}
        alt="svg loader dark"
        className="preloader__iconDark preloaderImg"
      />
      <h1 className="preloader__title">Estamos preparando algo increíble para ti</h1>
    </section>
  );
};

export default Preloader;
