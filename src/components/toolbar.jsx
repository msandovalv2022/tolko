// import { useState } from "react";

import { useTranslation } from "react-i18next"; //Hook de i18next
import { Link, LinkImg } from "./links";
import Darkmode from "./darkmode";

import lightMode from "../assets/img/lightMode.svg";
import darkMode from "../assets/img/darkMode.svg";
import burger from "../assets/img/burger.svg";
import logoTolko from "../assets/img/logo_tolko.svg";
import logoTolkoWhite from "../assets/img/logo_tolkoWhite.svg";
// import { use } from "i18next";

const Toolbar = ({ openSidetoolbar, refTool, refLogo, refLogoWhite }) => {
  const { t, i18n } = useTranslation();
  const tolkobotEs = document.querySelector(".tolkobotEs");
  const tolkobotEn = document.querySelector(".tolkobotEn");
  const lngSelector = document.querySelector("#changeLanguage");

  // const [lng, setLng] = useState(lngSelector.value);

  function changeToSpanish() {
    i18n.changeLanguage("es");

    tolkobotEs.style.display = "block";
    tolkobotEn.style.display = "none";
  }
  function changeToEnglish() {
    i18n.changeLanguage("en");
    tolkobotEs.style.display = "none";
    tolkobotEn.style.display = "block";
  }
  return (
    <div className="toolbar">
      <div className="toolbar__logo">
        <LinkImg
          class="imgLight toolbar__logo--normal"
          link="#"
          img={logoTolko}
        />
        <LinkImg
          class="imgDark toolbar__logo--white"
          link="#"
          img={logoTolkoWhite}
        />
      </div>

      <div className="toolbar__burger">
        <div className="toolbar__burger--burger" onClick={openSidetoolbar}>
          <p className="whiteTx">{t("toolbar.menu")}</p>
          <img src={burger} alt="" />
        </div>
        <div className="toolbar__burger--changeOptions">
          <Darkmode />
          <select name="" id="changeLanguage">
            <option value="es" id="esLanguage" onClick={changeToSpanish}>
              {t("toolbar.espanol")}
            </option>
            <option value="en" id="enLanguage" onClick={changeToEnglish}>
              {t("toolbar.ingles")}
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
