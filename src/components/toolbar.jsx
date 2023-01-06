import { Link, LinkImg } from "./links";

import lightMode from "../assets/img/lightMode.svg";
import darkMode from "../assets/img/darkMode.svg";
import burger from "../assets/img/burger.svg";
import logoTolko from "../assets/img/logo_tolko.svg";
const Toolbar = ({openSidetoolbar}) => {
  return (
    <div className="toolbar">
      <div className="toolbar__logo"><LinkImg link="#" img={logoTolko} /></div>

      <div className="toolbar__burger" >
        <div className="toolbar__burger--burger" onClick={openSidetoolbar}>
          <p className="whiteTx">Menú</p>
          <img src={burger} alt="" />
        </div>
        <div className="toolbar__burger--changeOptions">
          <img src={lightMode} alt="light mode" />
          <img hidden src={darkMode} alt="light mode" /> 
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
