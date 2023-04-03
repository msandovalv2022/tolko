//Hooks
import {useTranslation} from 'react-i18next'; //Hook de i18next
//Components

import { Link, LinkImg } from "./links";
import horizontalSplit from "./horizontalSplit,";

//Imgs
import googleMaps from '../assets/img/googleMaps.svg';
import horizontalGoogleMap from '../assets/img/horizontalGoogleMap.png';
import weConnectImg from '../assets/img/weConnect.svg';
import logoBlanco_weConnectImg from '../assets/img/logoBlanco_weConnect.png';
const Footer = () => {
  const {t} = useTranslation();

  return (
    <footer className="footer bgBlack whiteTx">
      <section className="footer__firstPart">
        <div className="footer__firstPart--text">
          <img src={logoBlanco_weConnectImg} alt="Logo we connect" />
          <p> <b className='text1'> {t("footer.certificado")} </b> <b className='text2'> {t("footer.2023")} </b></p>
        </div>
        <div className="footer__firstPart--social">
          <p>{t("footer.contacto")}</p>
          <ul>
            <li>
              <Link link="#" text="Facebook" />
            </li>
            <li>
              <Link link="#" text="Instagram" />
            </li>
            <li>
              <Link link="#" text={t("footer.contactoCorreo")} />
            </li>
          </ul>
        </div>
        <div className="footer__firstPart--bolsaTrabajo">
          <p>{t("footer.bolsa")}</p>
          <horizontalSplit color="white" width="20" height="5"/>
          <ul>
            <li>
              <Link link="#" text={t("footer.bolsaDiseño")} />
            </li>
            <li>
              <Link link="#" text={t("footer.bolsaProyecto")} />
            </li>
            <li>
              <Link link="#" text={t("footer.bolsaAudiovisual")} />
            </li>
          </ul>
        </div>
        <div className="footer__firstPart--googleMap">
          <LinkImg className="verticalGoogleMap" link="https://goo.gl/maps/n6XRwtM8f8Pp5kfV6" img={googleMaps} blank = {true}/>
          <LinkImg className="horizontalGoogleMap" link="https://goo.gl/maps/n6XRwtM8f8Pp5kfV6" img={horizontalGoogleMap} blank = {true}/>
        </div>
      </section>
      <section className="footer__secondPart">
        <ul>
          <li>
            <p>
              {t("footer.derechos")}
            </p>
          </li>
          <li>
            <Link link="#" text={t("footer.privacidad")} blank = {true}/>
          </li>
          <li>
            <Link link="#" text={t("footer.accesibilidad")} blank = {true}/>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
