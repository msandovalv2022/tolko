import { Link, LinkImg } from "./links";
import arrowRight from "../assets/img/arrowRight.svg";
import verticalLine from "../assets/img/verticalLine.svg";
// import verticalLine from '../../assets/img/verticalLine.svg';
import instagram from "../assets/img/instagram.svg";
import twitter from "../assets/img/twitter.svg";
import facebook from "../assets/img/facebook.svg";

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
          <Link link="#" text="Cotiza" />
          <LinkImg class="arrow" link="#" img={arrowRight} />
        </div>

        <div className="sidebar__itemsContainer--social">
          <LinkImg link="#" img={instagram} />
          <LinkImg link="#" img={twitter} />
          <LinkImg link="#" img={facebook} />
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
