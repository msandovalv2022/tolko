const Sidetoolbar = ({sideToolbar}) =>{
    return(
        <div className={sideToolbar ? "sidetoolbar sidetoolbar--open" : "sidetoolbar"}>
            <li>Home</li>
            <li>Historia</li>
            <li>Blog</li>
            <li>Clientes</li>
        </div>
    )
}

export default Sidetoolbar;