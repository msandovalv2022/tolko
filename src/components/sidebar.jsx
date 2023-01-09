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
  return (
    <section className="sidebar">
      <div className="sidebar__itemsContainer">
        <div className="sidebar__itemsContainer--links">
          <ul>
            <li>
              <Link link="#" text="Home" />
            </li>
            <li>
              <Link link="#" text="Historia" />
            </li>
            <li>
              <Link link="#" text="Blog" />
            </li>
            <li>
              <Link link="#" text="Clientes" />
            </li>
          </ul>
        </div>

        <div className="sidebar__itemsContainer--cotiza">
          <Link link="#" text="¡Haz equipo con nosotros!" />
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
