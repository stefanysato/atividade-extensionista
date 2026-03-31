import { NavLink } from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
    return (
        <nav className='navbar'>
            <NavLink to="/" className={({ isActive }) => isActive ? "navlink active" : "navlink"}>
                🏠
                <p>Home</p>
            </NavLink>
            <NavLink to="/sobre" className={({ isActive }) => isActive ? "navlink active" : "navlink"}>
                ℹ️
                <p>Sobre</p>
            </NavLink>
            <NavLink to="/especies" className={({ isActive }) => isActive ? "navlink active" : "navlink"}>
                🔍
                <p>Explorar</p>
            </NavLink>
            <NavLink to="/perfil" className={({ isActive }) => isActive ? "navlink active" : "navlink"}>
                👤
                <p>Perfil</p>
            </NavLink>
        </nav>
    )
}