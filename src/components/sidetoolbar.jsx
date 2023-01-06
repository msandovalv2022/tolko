//Components
import { Link, LinkImg } from './links';

//imgs
import Instagram from '../assets/img/instagram.svg';
import Twitter from '../assets/img/twitter.svg';
import Facebook from '../assets/img/facebook.svg';
const Sidetoolbar = ({sideToolbar}) =>{
    return(
        <div className={sideToolbar ? "sidetoolbar sidetoolbar--open" : "sidetoolbar"}>
            <li>Home</li>
            <li>Historia</li>
            <li>Blog</li>
            <li>Clientes</li>
            <li className="sidetoolbar__social">
                <LinkImg class="" link="#" img={Instagram}/>
                <LinkImg class="" link="#" img={Twitter}/>
                <LinkImg class="" link="#" img={Facebook}/>
            </li>
        </div>
    )
}

export default Sidetoolbar;