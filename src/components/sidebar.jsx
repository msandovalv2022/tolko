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
import linkedIn from '../assets/img/linkedin.svg'
import linkedInWhite from '../assets/img/linkedinWhite.svg'

const Sidebar = () => {
  const {t, i18n} = useTranslation();

  return (
    <section className="sidebar">
      <div className="sidebar__itemsContainer">
        <div className="sidebar__itemsContainer--links">
          <ul>
            <li>
              <Link link="#" text={t("sidebar.inicio")} />
            </li>
            <li className='inactive'>
              <Link text={t("sidebar.hacemos")} />
            </li>
            <li className='inactive'>
              <Link text={t("sidebar.blog")} />
            </li>
            <li className='inactive'>
              <Link text={t("sidebar.bolsa")} />
            </li>
          </ul>
        </div>

        <div className="sidebar__itemsContainer--cotiza">
          <Link link="#" text={t("sidebar.factor")} />
          <LinkImg class="arrow" link="#" img={arrowRight} />
        </div>

        <div className="sidebar__itemsContainer--social">
          {/* LIGHT IMAGES */}
          <LinkImg class="imgLight" link="https://www.instagram.com/grupo_tolko/?hl=en" img={instagram} />
          <LinkImg class="imgLight" link="https://twitter.com/tolkogroup" img={twitter} />
          <LinkImg class="imgLight" link="https://www.facebook.com/tolkogroup/" img={facebook} />
          <LinkImg class="imgLight" link="https://www.facebook.com/tolkogroup/" img={linkedIn} />
          {/* DARK IMAGES */}
          <LinkImg class="imgDark" link="https://www.instagram.com/grupo_tolko/?hl=en" img={instagramWhite} />
          <LinkImg class="imgDark" link="https://twitter.com/tolkogroup" img={twitterWhite} />
          <LinkImg class="imgDark" link="https://www.facebook.com/tolkogroup/" img={facebookWhite} />
          <LinkImg class="imgDark" link="https://www.facebook.com/tolkogroup/" img={linkedInWhite} />
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
