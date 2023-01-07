import Tolkobot from '../assets/img/tolkobot.png'
import FloatingBtnImg from '../assets/img/floatingBtn.svg'

import Sidebar from './sidebar'

const FloatingBtn = () =>{
    return(
        <section className="floatingBtn">
            <input type="checkbox" name="" id="floatingBtn__chk" />
            <div className="floatingBtn__tolkobot">
                <img src={Tolkobot} alt="" />
            </div>
            <div className="floatingBtn__trigger">
                <label htmlFor="floatingBtn__chk"><img src={FloatingBtnImg} alt="" /></label>
            </div>
        </section>
    )
}

export default FloatingBtn;