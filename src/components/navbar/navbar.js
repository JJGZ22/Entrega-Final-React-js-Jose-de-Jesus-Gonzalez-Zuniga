import CartWidget from '../CartWidget/CartWidget'
import './navbar.css'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'


const Navbar = () =>{
    
  const { user } = useAuth()

    return(
        <nav className='Navbar'>
            <NavLink to='/' className={({ isActive }) => isActive ? 'ActiveLink' : 'Link'}><h1>GamerZone</h1></NavLink>
            <div>
            <NavLink to='/category/videojuegos' ><button className="btn btn-primary btn-outline-info navbtn">Videojuegos</button></NavLink>
                <NavLink to='/category/accesorios'><button className="btn btn-secondary btn-outline-info navbtn">Accesorios</button></NavLink>
                <NavLink to='/category/consolas' ><button className="btn btn-danger btn-outline-info navbtn">Consolas</button></NavLink>
                
            </div>
            {
            user ? (
            <CartWidget/>
            ) : (
            <NavLink to='/login' className= "btn btn-dark btn-outline-info navbtn"{...({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Login</NavLink>
          )}
        </nav>
    )
}
export default Navbar