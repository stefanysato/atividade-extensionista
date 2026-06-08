import { NavLink } from 'react-router-dom'
import './NavBar.css'

import home from '../assets/img/icons/home.png'
import info from '../assets/img/icons/info.png'
import search from '../assets/img/icons/search.png'
import user from '../assets/img/icons/user.png'

export default function NavBar() {
    return (
        <nav className='navbar'>
            <NavLink to="/" className={({ isActive }) => isActive ? "navlink active" : "navlink"}>
                <img src={home} className='icon' />
                <p>Home</p>
            </NavLink>
            <NavLink to="/sobre" className={({ isActive }) => isActive ? "navlink active" : "navlink"}>
                <img src={info} className='icon' />
                <p>Sobre</p>
            </NavLink>
            <NavLink to="/especies" className={({ isActive }) => isActive ? "navlink active" : "navlink"}>
                <img src={search} className='icon' />
                <p>Explorar</p>
            </NavLink>
            <NavLink to="/perfil" className={({ isActive }) => isActive ? "navlink active" : "navlink"}>
                <img src={user} className='icon' />
                <p>Perfil</p>
            </NavLink>
        </nav>
    )
}