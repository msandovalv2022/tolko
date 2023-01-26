// import { useState } from "react";
import { useTranslation } from "react-i18next"; //Hook de i18next
// import { use } from "i18next";

const Language = () => {
  const { t, i18n } = useTranslation();
  const tolkobotEs = document.querySelector(".tolkobotEs");
  const tolkobotEn = document.querySelector(".tolkobotEn");
  const lngSelector = document.querySelector("#changeLanguage");

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
    <div className="language">
      <select name="" id="changeLanguage">
        <option value="es" id="esLanguage" onClick={changeToSpanish}>
          {t("toolbar.espanol")}
        </option>
        <option value="en" id="enLanguage" onClick={changeToEnglish}>
          {t("toolbar.ingles")}
        </option>
      </select>
    </div>
  );
};

export default Language;
