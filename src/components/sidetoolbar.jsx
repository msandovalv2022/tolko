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
            <li>{t("sidetoolbar.home")}</li>
            <li>{t("sidetoolbar.historia")}</li>
            <li>{t("sidetoolbar.blog")}</li>
            <li>{t("sidetoolbar.clientes")}</li>
            <li className="sidetoolbar__social">
                <LinkImg class="" link="#" img={Instagram}/>
                <LinkImg class="" link="#" img={Twitter}/>
                <LinkImg class="" link="#" img={Facebook}/>
            </li>
        </div>
    )
}

export default Sidetoolbar;