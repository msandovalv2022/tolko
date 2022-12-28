import './sidebar.css';

const Sidebar = () =>{
    return(
        <section className='sidebar'>
            <div className="sidebar__links">
                <ul>
                    <li>Home</li>
                    <li>Historia</li>
                    <li>Blog</li>
                    <li>Clientes</li>
                </ul>
            </div>
            <div className="sidebar__cotiza">
                <p>Cotiza</p>
            </div>
        </section>
    )
}