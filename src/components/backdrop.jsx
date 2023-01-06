const Backdrop = ({sideToolbar, closeSidetoolbar}) =>{
    return(
        <div className={sideToolbar ? "backdrop backdrop--open" : "backdrop"} onClick={closeSidetoolbar}></div>
    )
}

export default Backdrop;