import React, {useRef} from 'react'
import './Header.css'
import {Link, Link as LinkRouter} from 'react-router-dom'
import LOGO from '../../assets/LOGO2.png'
import {FaBars, FaTimes} from 'react-icons/fa'
import {BsCart2} from 'react-icons/bs'
import LoginButton from "../auth0/LoginButton";
import {useAuth0} from "@auth0/auth0-react";
import Swal from 'sweetalert2';

const Header = () => {

    const {user} = useAuth0();
    const { logout } = useAuth0();
    const logoutAlert = () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Sesion cerrada con exito`,
            showConfirmButton: true,
            timer: 3000
        })
    }

    const navRef = useRef()

    const showNav = () => {
        navRef.current.classList.toggle("responsive_nav");
        // console.log(navRef)
    }

    let Paginas = [
        {name: 'Home', to: '/'},
        {name: 'Artistas', to: '/artistas'},
        {name: 'Productos', to: '/productos'},
        {name: 'Cursos', to: '/cursos'},
        {name: 'Sobre nosotrxs', to: '/nosotrxs'},
        {name: 'Contacto', to: '/contacto'},
    ]

    return (
        <header>
            <LinkRouter to={'/'} style={{textDecoration: 'none'}}>
                <div className='h1_img'>
                    <h1 className='header-h1'>LUROCO TATTOO STUDIO</h1>
                    <img src={LOGO} alt="logo" className='logo_header'/>
                </div>
            </LinkRouter>
            <nav className='Navbar' ref={navRef}>
                {Paginas.map(item =>
                    <LinkRouter to={item.to} key={item.name} className="navbar_links"
                                onClick={showNav}>{item.name}</LinkRouter>)}
                <LinkRouter to='/carrito' onClick={showNav}>
                    <BsCart2 className='carrito_icon'/>
                </LinkRouter>
                <button onClick={showNav} className="nav-btn nav-close-btn">
                    <FaTimes/>
                </button>
            </nav>
            {!user ? <LoginButton/> : <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={user.picture} alt="" className='user_picture'/>
        </button>
        <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={'./perfil'}>Mi Perfil</Link></li>
            <li><Link className="dropdown-item" onClick={logout}>Salir</Link></li>
        </ul>
        </div>}

            <button onClick={showNav} className="nav-btn-xpand">
                <FaBars/>
            </button>
        </header>
    )
}

export default Header