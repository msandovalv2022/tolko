//Hooks
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next"; //Hook de i18next

//Libs
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Componentes
import Header from "./components/header";
import Nav from "./components/nav";
import Toolbar from "./components/toolbar";
import Sidebar from "./components/sidebar";
import HomeLogros from "./components/homeLogros";
import Footer from "./components/footer";
import { ImgMouseMove } from "./components/imgFunctions";
import FloatingBtn from "./components/floatingBtn";

// Imágenes
import Logro1 from "./assets/img/logro1.png";
import Logro2 from "./assets/img/logro2.png";
import Logro3 from "./assets/img/logro3.png";
import Logro4 from "./assets/img/logro4.png";
import Logro5 from "./assets/img/logro5.png";
import Ondas from "./assets/img/ondaCompleta.png";
import ondasSoloImg from "./assets/img/ondas.png";
import CircleWaves from "./assets/img/circle.svg";
import SVG from "./assets/svg-loaders/audio.svg";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const historiaContainerRef = useRef(null);

  useEffect(()=>{
    const logoNormal = document.querySelector(".toolbar__logo--normal");
    const logoWhite = document.querySelector(".toolbar__logo--white");
    const changeLanguage = document.querySelector("#changeLanguage");
    const historiaContainer = historiaContainerRef.current;
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger: historiaContainer,
        // markers: true,
        start: 'top top',
        end: 'top 0',
        scrub: true,
      }
    });
    tl.to(logoNormal, {display: "none"});
    tl.to(logoWhite, {display: "block"});
    tl.to(changeLanguage, {backgroundColor: "#fff"});
  }, [historiaContainerRef])

  useEffect(()=>{
    const LogrosContainer = document.querySelector(".normalNavbar"); 
    const logoNormal = document.querySelector(".toolbar__logo--normal");
    const logoWhite = document.querySelector(".toolbar__logo--white");

    const tl = gsap.timeline({
      scrollTrigger:{
        trigger: LogrosContainer,
        // markers: true,
        start: 'top top',
        end: 'top 0',
        scrub: true,
      }
    });
    tl.to(logoNormal, {display: "block"});
    tl.to(logoWhite, {display: "none"});
  }, []);

  //Tranlation variable
  const { t } = useTranslation();
  return (
    <div className="App">
      <section className="contentContainer">
        <Nav />
        <Header />
        <div className="spaceSection"></div>

        <section class="historia bgBlack" ref={historiaContainerRef}>
          <h3 class="cTx whiteTx">{t("historia.queremos")}</h3>
          {/* <div className="historia__textItem historia__textItem--storytelling">
            <p className="whiteTx">Storytelling y generación de contenidos</p>
            <div className="historia__textItem--circle circle"></div>
          </div>
          <div className="historia__textItem historia__textItem--video">
            <p className="whiteTx">Producción de video</p>
            <div className="historia__textItem--circle circle"></div>
            
          </div>
          <div className="historia__textItem historia__textItem--audio">
            <p className="whiteTx">Producción de audio</p>
            <div className="historia__textItem--circle circle"></div>
            
          </div>
          <div className="historia__textItem historia__textItem--fotografia">
            <p className="whiteTx">Fotografía</p>
            <div className="historia__textItem--circle circle"></div>
            
          </div>
          <div className="historia__textItem historia__textItem--produccion">
            <p className="whiteTx">Producción</p>
            <div className="historia__textItem--circle circle"></div>
            
          </div>
          <div className="historia__textItem historia__textItem--impresion">
            <p className="whiteTx">Impresión en pequeño y gran formato</p>
            <div className="historia__textItem--circle circle"></div> 
          </div>
          <div className="historia__textItem historia__textItem--animacion">
            <p className="whiteTx">Animación y educación audiovisual</p>
            <div className="historia__textItem--circle circle"></div>
          </div>
          <div className="historia__textItem historia__textItem--streaming">
            <p className="whiteTx">Streaming</p>
            <div className="historia__textItem--circle circle"></div>
            
          </div>
          <div className="historia__textItem historia__textItem--diseno">
            <p className="whiteTx">Diseño</p>
            <div className="historia__textItem--circle circle"></div>
            
          </div>
          <img src = {Ondas} alt=""/> */}
          <img className="ondaResponsive" src = {ondasSoloImg} alt=""/>
        </section>

        <div className="spaceSection normalNavbar"></div>
        
        <HomeLogros />

        <div className="spaceSection"></div>

        {/* <FloatingBtn /> */}
        <Footer />
      </section>
    </div>
  );
}

export default App;
