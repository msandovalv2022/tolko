//Hooks
import {useTranslation} from 'react-i18next'; //Hook de i18next
//Components

import { Link, LinkImg } from "./links";
import horizontalSplit from "./horizontalSplit,";

//Imgs
import googleMaps from '../assets/img/googleMaps.svg';
import horizontalGoogleMap from '../assets/img/horizontalGoogleMap.png';
import weConnectImg from '../assets/img/weConnect.svg';
const Footer = () => {
  const {t} = useTranslation();

  return (
    <footer className="footer bgBlack whiteTx">
      <section className="footer__firstPart">
        <div className="footer__firstPart--text">
          <h2>{t("footer.experiencia")}</h2>
          <img src={weConnectImg} alt="Logo we connect" />
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
          <LinkImg class="verticalGoogleMap" link="https://goo.gl/maps/n6XRwtM8f8Pp5kfV6" img={googleMaps}/>
          <LinkImg class="horizontalGoogleMap" link="https://goo.gl/maps/n6XRwtM8f8Pp5kfV6" img={horizontalGoogleMap}/>
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
            <Link link="#" text={t("footer.privacidad")} />
          </li>
          <li>
            <Link link="#" text={t("footer.accesibilidad")} />
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
