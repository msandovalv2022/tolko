import { Link, LinkImg } from "./links";
import googleMaps from '../assets/img/googleMaps.svg'
import horizontalSplit from "./horizontalSplit,";
const Footer = () => {
  return (
    <footer className="footer bgBlack whiteTx">
      <section className="footer__firstPart">
        <div className="footer__firstPart--text">
          <h2>Amamos la <br/> Comunicación</h2>
        </div>
        <div className="footer__firstPart--social">
          <p>Contacto</p>
          <ul>
            <li>
              <Link link="#" text="Facebook" />
            </li>
            <li>
              <Link link="#" text="Instagram" />
            </li>
            <li>
              <Link link="#" text="Correo" />
            </li>
          </ul>
        </div>
        <div className="footer__firstPart--bolsaTrabajo">
          <p>Bolsa de trabajo</p>
          <horizontalSplit color="white" width="20" height="5"/>
          <ul>
            <li>
              <Link link="#" text="Diseño" />
            </li>
            <li>
              <Link link="#" text="Project manager" />
            </li>
            <li>
              <Link link="#" text="AudioVisual" />
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
              © 2022 TOLKO GROUP. ALL RIGHTS RESERVED. TOLKO and the Logo are
              registered trademarks of Tolko Group.
            </p>
          </li>
          <li>
            <Link link="#" text="Privacy Policy" />
          </li>
          <li>
            <Link link="#" text="Accesibility Statement" />
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
