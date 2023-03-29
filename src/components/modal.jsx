import styled from "styled-components";
const Modal = ({children, 
    estado, 
    cambiarEstado, 
    titulo = "PopUp", 
    mostrarHeader, 
    mostrarOverlay, 
    posicionVerticalModal,
    posicionHorizontalModal,
    padding}) =>{ //Con children accedemos a todas las etiquetas que est´wn dentrop del contenedor Modal, de esta forma dentremos info personalizada || Al título le pusimos un valor (=PopUp), en caso de que el componente mande ese valor vacío, el valor por dafault será "PopUp"
    return(
        // Podemos nombrar etiquetas a nuestro gusto gracias a STYLED COMPONENTS
        <>
            {estado && 
                <Overlay mostrarOverlay={mostrarOverlay} posicionVerticalModal={posicionVerticalModal} posicionHorizontalModal={posicionHorizontalModal}>
                    <ContenedorModal padding  = {padding}>
                        {mostrarHeader && //si mostrarHeader existe y además es verdadero, entonces muestra lo siguiente:
                        <EncabezadoModal>
                            <h3>{titulo}</h3>
                        </EncabezadoModal>
                        }
                        <BotonCerrar onClick = {()=> cambiarEstado(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </BotonCerrar>
                        {children} {/* mandamos a llamar a la propiedad children */}
                    </ContenedorModal>
                </Overlay>
            }
        </>
    )
}

export default Modal;

// Con STYLED COMPONENTS podemos poner nuestros propios estilos de esta manera
const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: ${props => props.mostrarOverlay ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)' } ;
    padding: 40px;
    display: flex;
    align-items: ${props =>props.posicionVerticalModal ? props.posicionVerticalModal : 'center'} ;
    justify-content: ${props =>props.posicionHorizontalModal ? props.posicionHorizontalModal : 'center'};
    z-index: 99;
`;

const ContenedorModal = styled.div`
    width: 500px;
    min-height: 100px;
    background: #fff;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: ${props => props.padding ? props.padding : '20px'};
`;
const EncabezadoModal = styled.div`
    display: flex;
    aling-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #E8E8E8;

    h3{
        fony-weight: 500;
        font-size: 16px;
        color: #1766DC;
    }
`;

const BotonCerrar = styled.button`
    position: absolute;
    top: 15px;
    right: 15px;
    
    width: 30px;
    height: 30px;
    border: none;
    background: none;
    cursor: pointer;
    transition: .3s ease all;
    bordeer-radius: 5px;
    color: #1766DC;
    
    &:hover{
        background: #F2F2F2;
    }
    svg{
        width: 100%;
        height: 100%;
    }
`;