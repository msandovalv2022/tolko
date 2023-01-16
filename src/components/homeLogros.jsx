//Hooks
import { useEffect, useRef } from "react";
import {useTranslation} from 'react-i18next';

//Libs
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomeLogros = () =>{
    const logrosContainerRef = useRef(null);
    const logrosClientesRef = useRef(null);
    const logrosMaterialesRef = useRef(null);
    const logrosCampaniasRef = useRef(null);
    const logrosPaisesRef = useRef(null)
    const logrosEntrevistasRef = useRef(null)
    useEffect(()=>{
        const logrosContainer = logrosContainerRef.current;
        const logrosClientes = logrosClientesRef.current;
        const logrosMateriales = logrosMaterialesRef.current;
        const logrosCampanias = logrosCampaniasRef.current;
        const logrosPaises = logrosPaisesRef.current;
        const logrosEntrevistas = logrosEntrevistasRef.current;

        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: logrosContainer,
                // pin: true,
                // markers: true,
                start: "top 80%",
                end: "center 30%",
                scrub: 3    
            }, 
        });
        tl.to(logrosClientes, {x: "-205px", opacity: 1, duration: 1});
        tl.to(logrosMateriales, {x: "405px", opacity: 1, duration: 1});
        tl.to(logrosCampanias, {x: "-210px", opacity: 1, duration: 1});
        tl.to(logrosPaises, {x: "180px", opacity: 1, duration: 1});
        tl.to(logrosEntrevistas, {x: "-370px", opacity: 1, duration: 1});
    }, [logrosContainerRef]);

    //  USE TRANSLATE
    const {t} = useTranslation();

    return(
        <section className="logros" ref={logrosContainerRef}>
          <h2 className="cTx">{t("logros.meses")}</h2>

          <div className="logros__line">
            <div></div>
          </div>
          <div className="logros__items">
            <div className="item logros__items--clientes" ref={logrosClientesRef}>{t("logros.clientes")}</div>
            <div className="item logros__items--materiales" ref={logrosMaterialesRef}>{t("logros.materiales")}</div>
            <div className="item logros__items--campanias" ref={logrosCampaniasRef}>{t("logros.campanias")}</div>
            <div className="item logros__items--paises" ref={logrosPaisesRef}>{t("logros.paises")}</div>
            <div className="item logros__items--entrevistas" ref={logrosEntrevistasRef}>{t("logros.entrevistas")}</div>
          </div>
        </section>
    )
}

export default HomeLogros;