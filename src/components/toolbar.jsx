import { Link, LinkImg } from "./links";

import lightMode from "../assets/img/lightMode.svg";
import burger from "../assets/img/burger.svg";
import logoTolko from "../assets/img/logo_tolko.svg";
const Toolbar = ({openSidetoolbar}) => {
  return (
    <div className="toolbar">
      <div className="toolbar__logo"><LinkImg link="#" img={logoTolko} /></div>
      <div className="toolbar__burger" onClick={openSidetoolbar}>
        <p className="whiteTx">Menú</p>
        <img src={burger} alt="" />
      </div>
    </div>
  );
};

export default Toolbar;
