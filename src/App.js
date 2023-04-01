//Hooks
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next"; //Hook de i18next
import styled from "styled-components";

//Libs
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//Libs
import { MouseParallax } from "react-just-parallax";

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
import { Link, LinkImg } from "./components/links";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const historiaContainerRef = useRef(null);
  const [
    modalComunicacionCorporativa,
    cambiarModalComunicacionCorporativa,
  ] = useState(false);

  const [modalRelacionesPublicas, cambiarModalRelacionesPublicas] = useState(
    false
  );

  const [modalReputacion, cambiarModalReputacion] = useState(false);

  const [
    modalComunicacionPublicitaria,
    cambiarModalComunicacionPublicitaria,
  ] = useState(false);

  const [modalEstrategiaDigital, cambiarModalEstrategiaDigital] = useState(
    false
  );

  const [
    modalConsultoriaEstrategica,
    cambiarModalConsultoriaEstrategica,
  ] = useState(false);

  const [modalCoachingLideres, cambiarModalCoachingLideres] = useState(false);
  const [
    modalDiagnosticosComunicacion,
    cambiarModalDiagnosticosComunicacion,
  ] = useState(false);
  const [
    modalCreatividadProduccion,
    cambiarModalCreatividadProduccion,
  ] = useState(false);

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
        <Nav>
          <li>
            {" "}
            <Link link="#home__main" text="Home" blank={false} />{" "}
          </li>
          <li>
            {" "}
            <Link link="#home__servicios" text="Servicios" blank={false} />{" "}
          </li>
          <li>
            {" "}
            <Link link="#home__logros" text="Logros" blank={false} />{" "}
          </li>
        </Nav>
        <section id="home__main" className="headerHome">
          <div className="headerHome__sidebar">
            <Sidebar />
          </div>
          <div className="headerHome__animation">
            <MouseParallax enableOnTouchDevice>
              <Header />
            </MouseParallax>
          </div>
        </section>

        <section
          id="home__servicios"
          class="historia bgBlack"
          ref={historiaContainerRef}
        >
          <h3 class="cTx whiteTx">{t("historia.queremos")}</h3>
          <div className="historia__textItem historia__textItem--comunicacionCorporativa">
            <p className="whiteTx">Comunicación corporativa</p>
            <div
              onClick={() =>
                cambiarModalComunicacionCorporativa(
                  !modalComunicacionCorporativa
                )
              }
              className="historia__textItem--circle circle"
            ></div>
          </div>
          <div className="historia__textItem historia__textItem--relaciones">
            <p className="whiteTx">Relaciones públicas</p>
            <div
              onClick={() =>
                cambiarModalRelacionesPublicas(!modalRelacionesPublicas)
              }
              className="historia__textItem--circle circle"
            ></div>
          </div>
          <div className="historia__textItem historia__textItem--reputacion">
            <p className="whiteTx">Reputación</p>
            <div
              onClick={() => cambiarModalReputacion(!modalReputacion)}
              className="historia__textItem--circle circle"
            ></div>
          </div>
          <div className="historia__textItem historia__textItem--comunicacionPublicitaria">
            <p className="whiteTx">Comunicación publicitaria</p>
            <div
              onClick={() =>
                cambiarModalComunicacionPublicitaria(
                  !modalComunicacionPublicitaria
                )
              }
              className="historia__textItem--circle circle"
            ></div>
          </div>
          <div className="historia__textItem historia__textItem--estrategiaDigital">
            <p className="whiteTx">Estrategia digital</p>
            <div
              onClick={() =>
                cambiarModalEstrategiaDigital(!modalEstrategiaDigital)
              }
              className="historia__textItem--circle circle"
            ></div>
          </div>
          <div className="historia__textItem historia__textItem--consultoriaEstrategica">
            <p className="whiteTx">Consultoría estratégica</p>
            <div
              onClick={() =>
                cambiarModalConsultoriaEstrategica(!modalConsultoriaEstrategica)
              }
              className="historia__textItem--circle circle"
            ></div>
          </div>
          <div className="historia__textItem historia__textItem--coachingLideres">
            <p className="whiteTx">Coaching a líderes</p>
            <div
              onClick={() => cambiarModalCoachingLideres(!modalCoachingLideres)}
              className="historia__textItem--circle circle"
            ></div>
          </div>
          <div className="historia__textItem historia__textItem--diagnosticosComunicacion">
            <p className="whiteTx">Diagnósticos de comunicación</p>
            <div
              onClick={() =>
                cambiarModalDiagnosticosComunicacion(
                  !modalDiagnosticosComunicacion
                )
              }
              className="historia__textItem--circle circle"
            ></div>
          </div>
          <div className="historia__textItem historia__textItem--creatividadProduccion">
            <p className="whiteTx">Creatividad y producción</p>
            <div
              onClick={() =>
                cambiarModalCreatividadProduccion(!modalCreatividadProduccion)
              }
              className="historia__textItem--circle circle"
            ></div>
          </div>
          <img src={Ondas} alt="" />
          {/* <img className="ondaResponsive" src={ondasSoloImg} alt="" /> */}

          {/* PopUps de servicios */}
          <Modal
            estado={modalComunicacionCorporativa}
            cambiarEstado={cambiarModalComunicacionCorporativa}
            titulo="Comunicación corporativa"
            mostrarHeader={true}
            mostrarOverlay={false}
            posicionVerticalModal={"center"}
            posicionHorizontalModal={"center"}
            padding={"20px"}
          >
            <Contenido>
              <p>
                Por medio de distintas estrategias, la empresa se comunica con
                sus clientes, equipo y proveedores. Contribuye con solidez a su
                posicionamiento como marca, mejora su reputación y encuentra el
                diferenciador ante sus competidores.
              </p>
              <Boton>Aceptar</Boton>
            </Contenido>
          </Modal>

          <Modal
            estado={modalRelacionesPublicas}
            cambiarEstado={cambiarModalRelacionesPublicas}
            titulo="Relaciones públicas"
            mostrarHeader={true}
            mostrarOverlay={false}
            posicionVerticalModal={"center"}
            posicionHorizontalModal={"center"}
            padding={"20px"}
          >
            <Contenido>
              <p>
                Son una parte fundamental de la comunicación estratégica que
                construye y fortalece relaciones en beneficio mutuo: entre
                organizaciones y públicos objetivos.
              </p>
              <Boton>Aceptar</Boton>
            </Contenido>
          </Modal>

          <Modal
            estado={modalReputacion}
            cambiarEstado={cambiarModalReputacion}
            titulo="Reputación"
            mostrarHeader={true}
            mostrarOverlay={false}
            posicionVerticalModal={"center"}
            posicionHorizontalModal={"center"}
            padding={"20px"}
          >
            <Contenido>
              <p>
                Es intangible, se construye a partir de la imagen que la empresa
                proyecta y la percepción de la sociedad con base en sus acciones
                internas y externas.
              </p>
              <Boton>Aceptar</Boton>
            </Contenido>
          </Modal>

          <Modal
            estado={modalComunicacionPublicitaria}
            cambiarEstado={cambiarModalComunicacionPublicitaria}
            titulo="Comunicación publicitaria"
            mostrarHeader={true}
            mostrarOverlay={false}
            posicionVerticalModal={"center"}
            posicionHorizontalModal={"center"}
            padding={"20px"}
          >
            <Contenido>
              <p>
                Busca que las personas adquieran distintos hábitos de consumo,
                ya sea de marcas, productos o ideas por medio de mensajes
                persuasivos.
              </p>
              <Boton>Aceptar</Boton>
            </Contenido>
          </Modal>

          <Modal
            estado={modalComunicacionPublicitaria}
            cambiarEstado={cambiarModalComunicacionPublicitaria}
            titulo="Comunicación publicitaria"
            mostrarHeader={true}
            mostrarOverlay={false}
            posicionVerticalModal={"center"}
            posicionHorizontalModal={"center"}
            padding={"20px"}
          >
            <Contenido>
              <p>
                Busca que las personas adquieran distintos hábitos de consumo,
                ya sea de marcas, productos o ideas por medio de mensajes
                persuasivos.
              </p>
              <Boton>Aceptar</Boton>
            </Contenido>
          </Modal>

          <Modal
            estado={modalEstrategiaDigital}
            cambiarEstado={cambiarModalEstrategiaDigital}
            titulo="Estrategia Digital"
            mostrarHeader={true}
            mostrarOverlay={false}
            posicionVerticalModal={"center"}
            posicionHorizontalModal={"center"}
            padding={"20px"}
          >
            <Contenido>
              <p>
                Se apoya en la tecnología para transformar y potenciar el
                rendimiento de una empresa, impulsando un cambio en la
                experiencia del cliente, procesos operativos y modelos de
                negocios.
              </p>
              <Boton>Aceptar</Boton>
            </Contenido>
          </Modal>

          <Modal
            estado={modalConsultoriaEstrategica}
            cambiarEstado={cambiarModalConsultoriaEstrategica}
            titulo="Consultoría Estratégica"
            mostrarHeader={true}
            mostrarOverlay={false}
            posicionVerticalModal={"center"}
            posicionHorizontalModal={"center"}
            padding={"20px"}
          >
            <Contenido>
              <p>
                Suma con propuestas alineadas con la cultura, el mercado y
                contexto de tu empresa.
              </p>
              <Boton>Aceptar</Boton>
            </Contenido>
          </Modal>

          <Modal
            estado={modalCoachingLideres}
            cambiarEstado={cambiarModalCoachingLideres}
            titulo="Consultoría Estratégica"
            mostrarHeader={true}
            mostrarOverlay={false}
            posicionVerticalModal={"center"}
            posicionHorizontalModal={"center"}
            padding={"20px"}
          >
            <Contenido>
              <p>
                Promueve habilidades, estrategias y herramientas que te ayudan a
                ser un líder que inspire, guíe, motive y además acompañe a su
                equipo en todo momento.
              </p>
              <Boton>Aceptar</Boton>
            </Contenido>
          </Modal>

          <Modal
            estado={modalDiagnosticosComunicacion}
            cambiarEstado={cambiarModalDiagnosticosComunicacion}
            titulo="Diagnosticos de comunicación"
            mostrarHeader={true}
            mostrarOverlay={false}
            posicionVerticalModal={"center"}
            posicionHorizontalModal={"center"}
            padding={"20px"}
          >
            <Contenido>
              <p>
                Promueve habilidades, estrategias y herramientas que te ayudan a
                ser un líder que inspire, guíe, motive y además acompañe a su
                equipo en todo momento.
              </p>
              <Boton>Aceptar</Boton>
            </Contenido>
          </Modal>

          <Modal
            estado={modalCreatividadProduccion}
            cambiarEstado={cambiarModalCreatividadProduccion}
            titulo="Creatividad y producción"
            mostrarHeader={true}
            mostrarOverlay={false}
            posicionVerticalModal={"center"}
            posicionHorizontalModal={"center"}
            padding={"20px"}
          >
            <Contenido>
              <p>
                Tu diferenciador estará en las historias y narrativas que te
                ayudamos a contar a través de contenido audiovisual, artes y el
                storytelling, con el fin de transmitir la esencia y objetivos de
                tu marca.
              </p>
              <Boton>Aceptar</Boton>
            </Contenido>
          </Modal>
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
