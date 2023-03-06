import CartWidget from '../CartWidget/CartWidget'
import './navbar.css'

const Navbar = () =>{
    return(
        <nav className='Navbar'>
            <h1>GamerZone</h1>
            <div>
                <button className="btn btn-primary btn-outline-info navbtn">Videojuegos</button>
                <button className="btn btn-secondary btn-outline-info navbtn">Accesorios</button>
                <button className="btn btn-danger btn-outline-info navbtn">Consolas</button>
            </div>
            <CartWidget/>
        </nav>
    )
}
export default Navbar