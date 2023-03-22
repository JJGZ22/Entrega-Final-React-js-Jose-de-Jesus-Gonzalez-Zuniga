import CartWidget from '../CartWidget/CartWidget'
import './navbar.css'

import { Link, NavLink } from 'react-router-dom'

const Navbar = () =>{
    return(
        <nav className='Navbar'>
            <NavLink to='/' className={({ isActive }) => isActive ? 'ActiveLink' : 'Link'}><h1>GamerZone</h1></NavLink>
            <div>
            <NavLink to='/category/videojuegos' ><button className="btn btn-primary btn-outline-info navbtn">Videojuegos</button></NavLink>
                <NavLink to='/category/accesorios'><button className="btn btn-secondary btn-outline-info navbtn">Accesorios</button></NavLink>
                <NavLink to='/category/consolas' ><button className="btn btn-danger btn-outline-info navbtn">Consolas</button></NavLink>
                
            </div>
            <CartWidget/>
        </nav>
    )
}
export default Navbar