//Hooks
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next"; //Hook de i18next
import styled from "styled-components";

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
// import { ImgMouseMove } from "./components/imgFunctions";
import FloatingBtn from "./components/floatingBtn";
import Preloader from "./components/preloader";
import Modal from "./components/modal";

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
import CertifiedWomen from "./assets/img/certifiedWomen.png";
import { LinkImg } from "./components/links";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const historiaContainerRef = useRef(null);
  const [estadoModal1, cambiarEstadoModal1] = useState(false);

  useEffect(() => {
    const logoNormal = document.querySelector(".toolbar__logo--normal");
    const logoWhite = document.querySelector(".toolbar__logo--white");
    const changeLanguage = document.querySelector("#changeLanguage");
    const historiaContainer = historiaContainerRef.current;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: historiaContainer,
        // markers: true,
        start: "top top",
        end: "top 0",
        scrub: true,
      },
    });
    tl.to(logoNormal, { display: "none" });
    tl.to(logoWhite, { display: "block" });
    tl.to(changeLanguage, { backgroundColor: "#fff" });
  }, [historiaContainerRef]);

  useEffect(() => {
    const LogrosContainer = document.querySelector(".normalNavbar");
    const logoNormal = document.querySelector(".toolbar__logo--normal");
    const logoWhite = document.querySelector(".toolbar__logo--white");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: LogrosContainer,
        // markers: true,
        start: "top top",
        end: "top 0",
        scrub: true,
      },
    });
    tl.to(logoNormal, { display: "block" });
    tl.to(logoWhite, { display: "none" });
  }, []);

  //Tranlation variable
  const { t } = useTranslation();
  return (
    <div className="App">
      <Preloader />
      <section className="contentContainer">
        <Nav />
        <Header />
        <Modal
          estado = {estadoModal1}
          cambiarEstado = {cambiarEstadoModal1}
          titulo = "Storytelling y generación de contenidos"
          mostrarHeader = {true}
          mostrarOverlay = {false}
          posicionVerticalModal = {'center'}
          posicionHorizontalModal = {'center'}
          padding = {'20px'}
        >
          <Contenido>
            <h1>Ventana Modal</h1>
            <p>Reutilizable y con opciones de personalización</p>
            <Boton>Aceptar</Boton>
          </Contenido>
        </Modal>

        <section class="historia bgBlack" ref={historiaContainerRef}>
          <h3 class="cTx whiteTx">{t("historia.queremos")}</h3>
          <div className="historia__textItem historia__textItem--storytelling">
            <p className="whiteTx">Storytelling y generación de contenidos</p>
            <div onClick = {() => cambiarEstadoModal1(!estadoModal1)} className="historia__textItem--circle circle"></div>
          </div>
          <div className="historia__textItem historia__textItem--video">
            <p className="whiteTx">Producción de video</p>
            <button className="historia__textItem--circle circle"></button>
            
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
          <img src = {Ondas} alt=""/>
          {/* <img className="ondaResponsive" src={ondasSoloImg} alt="" /> */}
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
const ContenedorBotones = styled.div`
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Boton = styled.button`
  display: block;
  padding: 10px 30px;
  border-radius: 100px;
  color: #fff;
  border: none;
  background: #1766dc;
  cursor: pointer;
  font-wight: 500;
  transition: 0.3s ease all;

  &:hover {
    background: #0066ff;
  }
`;

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    vertical-align: top;
    border-radius: 3px;
  }
`;
