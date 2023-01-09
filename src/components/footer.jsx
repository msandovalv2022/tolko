//Hooks
import {useTranslation} from 'react-i18next'; //Hook de i18next

import { Link, LinkImg } from "./links";
import googleMaps from '../assets/img/googleMaps.svg'
import horizontalSplit from "./horizontalSplit,";

const Footer = () => {
  const {t} = useTranslation();

  return (
    <footer className="footer bgBlack whiteTx">
      <section className="footer__firstPart">
        <div className="footer__firstPart--text">
          <h2>{t("footer.amamos")}</h2>
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
          <LinkImg link="https://www.google.com/maps/place/Lago+Alberto+375,+Ju%C3%A1rez,+Miguel+Hidalgo,+11320+Ciudad+de+M%C3%A9xico,+CDMX/@19.4385199,-99.1829107,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1f8ae507dd427:0x88260c70b8672fbe!8m2!3d19.4385149!4d-99.1803358" img={googleMaps}/>
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
