import React from 'react';
import NavBarItem from '../NavBarItem/NavBarItem'
import NavBarCart from '../NavBarCart/NavBarCart';
import sakuraTitulo from '../../assets/img/sakuraTitulo.png'


function NavBar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
             <img src={sakuraTitulo} alt="imagen" width="200px"/>
          </a>

          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <NavBarItem item="Quien soy?" id="#scrollspyHeading1" />
            <NavBarItem item="Mascotas" id="#scrollspyHeading2" />
            <NavBarItem item="Llaveros" id="#scrollspyHeading3" />
            <NavBarItem item="Articulos" id="#scrollspyHeading4" />
          </ul>
         <NavBarCart />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
