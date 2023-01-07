import { Link, LinkImg } from "./links";
import Darkmode from "./darkmode";

import lightMode from "../assets/img/lightMode.svg";
import darkMode from "../assets/img/darkMode.svg";
import burger from "../assets/img/burger.svg";
import logoTolko from "../assets/img/logo_tolko.svg";
import logoTolkoWhite from "../assets/img/logo_tolkoWhite.svg";
const Toolbar = ({openSidetoolbar}) => {
  return (
    <div className="toolbar">
      <div className="toolbar__logo">
        <LinkImg class="imgLight" link="#" img={logoTolko} />
        <LinkImg class="imgDark" link="#" img={logoTolkoWhite} />
        </div>

      <div className="toolbar__burger" >
        <div className="toolbar__burger--burger" onClick={openSidetoolbar}>
          <p className="whiteTx">Menú</p>
          <img src={burger} alt="" />
        </div>
        <div className="toolbar__burger--changeOptions"> 
          <Darkmode />
          <select name="" id="">
            <option value="">Español</option>
            <option value="">Inglés</option>
          </select>
        </div>
      </div>

    </div>
  );
};

export default Toolbar;
