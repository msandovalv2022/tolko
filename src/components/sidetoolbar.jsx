//Hooks
import { useTranslation } from "react-i18next"; //Hook de i18next

//Components
import { Link, LinkImg } from "./links";

//imgs
import Instagram from "../assets/img/instagram.svg";
import Twitter from "../assets/img/twitter.svg";
import Facebook from "../assets/img/facebook.svg";

const Sidetoolbar = ({ sideToolbar, children }) => {
  const { t, i18n } = useTranslation();
  return (
    <div
      className={sideToolbar ? "sidetoolbar sidetoolbar--open" : "sidetoolbar"}
    >
      {children}
    </div>
  );
};

export default Sidetoolbar;
