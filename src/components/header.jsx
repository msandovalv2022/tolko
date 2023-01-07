import Sidebar from "./sidebar";
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import bocas1 from '../assets/img/bocas1.png';
import bocas2 from '../assets/img/bocas2.png';
import bocas3 from '../assets/img/bocas3.png';
import bocas4 from '../assets/img/bocas4.png';
import redArrow from '../assets/img/redArrow.png';

gsap.registerPlugin(ScrollTrigger);

const Header = ()=>{
    return(
        <section className="header">
            <Sidebar/>
            <section className="header__imgs">
                <div className="header__imgs--partOne">
                    <img className="header__imgs--partOne-bocas1" src={bocas1} alt="imagen de bocas" />
                </div>
                <div className="header__imgs--partTwo">
                    <img className="header__imgs--partTwo-bocas2" src={bocas2} alt="imagen de bocas" />
                    <p className="header__imgs--partTwo-text1 whiteTx bgBlack">CREAMOS</p>
                    <p className="header__imgs--partTwo-text2 whiteTx bgBlack">MEJORES REALIDADES</p>
                    <img className="header__imgs--partTwo-redArrow" src={redArrow} alt="Flecha Roja" />
                </div>  
                
                <div className="header__imgs--partThree">
                    <img className="header__imgs--partThree-bocas3" src={bocas3} alt="imagen de bocas" />
                    <img className="header__imgs--partThree-bocas4" src={bocas4} alt="imagen de bocas" />
                </div>
                
            </section>
        </section>
    )
}

export default Header;