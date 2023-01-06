import Navbar from "./components/navbar";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import { ImgMouseMove } from "./components/imgFunctions";
import Logro1 from "./assets/img/logro1.png";
import Logro2 from "./assets/img/logro2.png";
import Logro3 from "./assets/img/logro3.png";
import Logro4 from "./assets/img/logro4.png";
import Logro5 from "./assets/img/logro5.png";
import Ondas from "./assets/img/ondas.png";

function App() {
  return (
    <div className="App">
      <Header/>
      <section className="contentContainer">
        <Navbar />
        <div className="spaceSection"></div>

        <section class="historia bgBlack">
          <h3 class="cTx whiteTx">
            Queremos ser parte de tu historia, a través de...
          </h3>
          <img src={Ondas} />
        </section>

        <div className="spaceSection"></div>

        <section class="logros">
          <h2 class="cTx">En 84 meses</h2>
          <div class="logros__line">
          <div></div>
        </div>
          <div className="logros__items">
            <ImgMouseMove img={Logro1} class="logros__items--clientes" />
            <ImgMouseMove img={Logro2} class="logros__items--materiales" />
            <ImgMouseMove img={Logro3} class="logros__items--campanias" />
            <ImgMouseMove img={Logro4} class="logros__items--paises" />
            <ImgMouseMove img={Logro5} class="logros__items--entrevistas" />
          </div>
        </section>

        <div className="spaceSection"></div>
      
        <Footer />
      </section>
    </div>
  );
}

export default App;
