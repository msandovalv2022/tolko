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
            {/* <li className='inactive'>
              <Link text={t("sidebar.hacemos")} />
            </li>
            <li className='inactive'>
              <Link text={t("sidebar.blog")} />
            </li>
            <li className='inactive'>
              <Link text={t("sidebar.bolsa")} />
            </li> */}
          </ul>
        </div>

        <div className="sidebar__itemsContainer--cotiza">
          <Link link="#" text={t("sidebar.factor")}/>
          <LinkImg className="arrow" link="#" img={arrowRight} />
        </div>

        <div className="sidebar__itemsContainer--social">
          {/* LIGHT IMAGES */}
          <LinkImg className="imgLight" link="https://www.instagram.com/grupo_tolko/?hl=en" img={instagram} blank = {true}/>
          <LinkImg className="imgLight" link="https://twitter.com/tolkogroup" img={twitter} blank = {true}/>
          <LinkImg className="imgLight" link="https://www.facebook.com/tolkogroup/" img={facebook} blank = {true}/>
          <LinkImg className="imgLight" link="https://www.linkedin.com/company/tolko/" img={linkedIn} blank = {true}/>
          {/* DARK IMAGES */}
          <LinkImg className="imgDark" link="https://www.instagram.com/grupo_tolko/?hl=en" img={instagramWhite} blank = {true}/>
          <LinkImg className="imgDark" link="https://twitter.com/tolkogroup" img={twitterWhite} blank = {true}/>
          <LinkImg className="imgDark" link="https://www.facebook.com/tolkogroup/" img={facebookWhite} blank = {true}/>
          <LinkImg className="imgDark" link="https://www.linkedin.com/company/tolko//" img={linkedInWhite} blank = {true}/>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
