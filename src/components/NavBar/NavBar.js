import React from 'react';
import NavBarItem from '../NavBarItem/NavBarItem'
import NavBarCart from '../NavBarCart/NavBarCart'
// import SearchArea from '../SearchArea/SearchArea'
import sakuraTitulo from '../../assets/img/sakuraTitulo.png'
import './NavBar.css'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light NavBar">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/'>
             <img src={sakuraTitulo} alt="imagen" width="200px"/>
          </Link>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavBarItem item="Quien soy?" id="#scrollspyHeading1" />
            <NavBarItem item="Mascotas" id="#scrollspyHeading2" />
            <NavBarItem item="Llaveros" id="#scrollspyHeading3" />
            <NavBarItem item="Articulos" id="#scrollspyHeading4" />
          </ul>
         {/* <SearchArea /> */}
         <NavBarCart />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
