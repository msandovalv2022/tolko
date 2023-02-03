//Hooks
import {useTranslation} from 'react-i18next'; //Hook de i18next

//Components
import { Link, LinkImg } from './links';

//imgs
import Instagram from '../assets/img/instagram.svg';
import Twitter from '../assets/img/twitter.svg';
import Facebook from '../assets/img/facebook.svg';

const Sidetoolbar = ({sideToolbar}) =>{
    const {t, i18n} = useTranslation();
    return(
        <div className={sideToolbar ? "sidetoolbar sidetoolbar--open" : "sidetoolbar"}>
            <li className><Link link="www.google.com" text = {t("sidetoolbar.inicio")}/> </li>
            {/* <li className='inactive'><Link text = {t("sidetoolbar.hacemos")}/> </li>
            <li className='inactive'><Link text = {t("sidetoolbar.blog")}/> </li>
            <li className='inactive'><Link text = {t("sidetoolbar.bolsa")}/> </li> */}
            <li></li>
        </div>
    )
}

export default Sidetoolbar;