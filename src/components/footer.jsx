import { Link } from "./links";
const Footer = () => {
  return (
    <footer>
      <section className="footer__firstPart">
        <div className="footer__firstPart--text">
          <h3>Amamos la comunicación</h3>
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
          <p>Bolsa de trabajo</p>
          <p>Mapa de googleMap</p>
        </div>
      </section>
      <section className="footer__secondPart">
        <ul>
          <li><p>© 2022 TOLKO GROUP. ALL RIGHTS RESERVED. TOLKO and the Logo are registered trademarks of Tolko Group.</p></li>
          <li><Link link="#" text="Privacy Policy"/></li>
          <li><Link link="#" text="Accesibility Statement"/></li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
