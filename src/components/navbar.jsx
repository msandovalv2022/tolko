import lightMode from "../assets/img/lightMode.svg";
import burger from "../assets/img/burger.svg";
import logoTolko from "../assets/img/logo_tolko.svg";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logoTolko} alt="Logo Tolko" />
      </div>
      <div className="navbar__options">
        <div className="navbar__options--menu">
          <label htmlFor="burger">Menú</label>
          <img id="burger" src={burger} alt="burger" />
        </div>
        <div className="navbar__options--lanMode">
          <img src={lightMode} alt="Modo de día" />
          <select name="" id="">
            <option value=""><span>Español</span></option>
            <option value=""><span>Inglés</span></option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
