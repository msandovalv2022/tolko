//Hooks
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

//Libs
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
//Responsive GSAP
let mm = gsap.matchMedia();

const HomeLogros = () => {
  const logrosContainerRef = useRef(null);
  const logrosClientesRef = useRef(null);
  const logrosMaterialesRef = useRef(null);
  const logrosCampaniasRef = useRef(null);
  const logrosPaisesRef = useRef(null);
  const logrosEntrevistasRef = useRef(null);
  useEffect(() => {
    const logrosContainer = logrosContainerRef.current;
    const logrosClientes = logrosClientesRef.current;
    const logrosMateriales = logrosMaterialesRef.current;
    const logrosCampanias = logrosCampaniasRef.current;
    const logrosPaises = logrosPaisesRef.current;
    const logrosEntrevistas = logrosEntrevistasRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: logrosContainer,
        // pin: true,
        // markers: true,
        start: "top 80%",
        end: "center 30%",
        scrub: 3,
      },
    });
    tl.to(logrosClientes, { x: "-205px", opacity: 1, duration: 1 });
    tl.to(logrosMateriales, { x: "405px", opacity: 1, duration: 1 });
    tl.to(logrosCampanias, { x: "-210px", opacity: 1, duration: 1 });
    tl.to(logrosPaises, { x: "180px", opacity: 1, duration: 1 });
    tl.to(logrosEntrevistas, { x: "-370px", opacity: 1, duration: 1 });

    // RESPONSIVE ANIMATION 1280PX

    // // RESPONSIVE ANIMATION 992PX
    // mm.add("(max-width: 992px)", () => {
    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: logrosContainer,
    //       // pin: true,
    //       markers: true,
    //       start: "top 80%",
    //       end: "15% 30%",
    //       scrub: 3,
    //     },
    //   });
    //   tl.to(logrosClientes, { x: "-205px", opacity: 1, duration: 1 });
    //   tl.to(logrosMateriales, { x: "405px", opacity: 1, duration: 1 });
    //   tl.to(logrosCampanias, { x: "-210px", opacity: 1, duration: 1 });
    //   tl.to(logrosPaises, { x: "180px", opacity: 1, duration: 1 });
    //   tl.to(logrosEntrevistas, { x: "-270px", opacity: 1, duration: 1 });
    // });
  }, [logrosContainerRef]);

  //  USE TRANSLATE
  const { t } = useTranslation();

  return (
    <section id="home__logros" className="logrosContainer">
      <section className="logrosAnimate" ref={logrosContainerRef}>
        <h2 className="cTx">{t("logros.meses")}</h2>

        <div className="logrosAnimate__line">
          <div></div>
        </div>
        <div className="logrosAnimate__items">
          <div
            className="item logrosAnimate__items--clientes"
            ref={logrosClientesRef}
          >
            {t("logros.clientes")}
          </div>
          <div
            className="item logrosAnimate__items--materiales"
            ref={logrosMaterialesRef}
          >
            {t("logros.materiales")}
          </div>
          <div
            className="item logrosAnimate__items--campanias"
            ref={logrosCampaniasRef}
          >
            {t("logros.campanias")}
          </div>
          <div
            className="item logrosAnimate__items--paises"
            ref={logrosPaisesRef}
          >
            {t("logros.paises")}
          </div>
          <div
            className="item logrosAnimate__items--entrevistas"
            ref={logrosEntrevistasRef}
          >
            {t("logros.entrevistas")}
          </div>
        </div>
      </section>

      <section className="logros">
        <h2 className="cTx">{t("logros.meses")}</h2>

        <div className="logros__line">
          <div></div>
        </div>
        <div className="logros__items">
          <div
            className="item logros__items--clientes"
            
          >
            {t("logros.clientes")}
          </div>
          <div
            className="item logros__items--materiales"
            
          >
            {t("logros.materiales")}
          </div>
          <div
            className="item logros__items--campanias"
            
          >
            {t("logros.campanias")}
          </div>
          <div
            className="item logros__items--paises"
            
          >
            {t("logros.paises")}
          </div>
          <div
            className="item logros__items--entrevistas"
            
          >
            {t("logros.entrevistas")}
          </div>
        </div>
      </section>
    </section>
  );
};

export default HomeLogros;
