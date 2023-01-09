import {useTranslation} from 'react-i18next'; //Hook de i18next
//Components
import { Link, LinkImg } from "./links";
import arrowRight from "../assets/img/arrowRight.svg";
import verticalLine from "../assets/img/verticalLine.svg";

// Imgs
import instagram from "../assets/img/instagram.svg";
import twitter from "../assets/img/twitter.svg";
import facebook from "../assets/img/facebook.svg";
import instagramWhite from "../assets/img/instagramWhite.svg";
import twitterWhite from "../assets/img/twitterWhite.svg";
import facebookWhite from "../assets/img/facebookWhite.svg";

const Sidebar = () => {
  const {t, i18n} = useTranslation();

  return (
    <section className="sidebar">
      <div className="sidebar__itemsContainer">
        <div className="sidebar__itemsContainer--links">
          <ul>
            <li>
              <Link link="#" text={t("sidebar.home")} />
            </li>
            <li>
              <Link link="#" text={t("sidebar.historia")} />
            </li>
            <li>
              <Link link="#" text={t("sidebar.blog")} />
            </li>
            <li>
              <Link link="#" text={t("sidebar.clientes")} />
            </li>
          </ul>
        </div>

        <div className="sidebar__itemsContainer--cotiza">
          <Link link="#" text={t("sidebar.equipo")} />
          <LinkImg class="arrow" link="#" img={arrowRight} />
        </div>

        <div className="sidebar__itemsContainer--social">
          {/* LIGHT IMAGES */}
          <LinkImg class="imgLight" link="#" img={instagram} />
          <LinkImg class="imgLight" link="#" img={twitter} />
          <LinkImg class="imgLight" link="#" img={facebook} />
          {/* DARK IMAGES */}
          <LinkImg class="imgDark" link="#" img={instagramWhite} />
          <LinkImg class="imgDark" link="#" img={twitterWhite} />
          <LinkImg class="imgDark" link="#" img={facebookWhite} />
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
