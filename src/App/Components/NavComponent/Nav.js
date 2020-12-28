
import React from 'react';
import "./Nav.css"
import { Navbar, Nav } from 'react-bootstrap'
// import { useHistory } from 'react-router-dom'

const Navegacion = ({scrollTo, AboutMeRef, ServicesRef, FooterRef}) => {
  //  function handleClick(e) { e.preventDefault(); }
  //  const history = useHistory()
    return (
        <>
 <Navbar collapseOnSelect expand="lg"   style={{position: 'sticky', top: 0, zIndex: 1, opacity: 0.98}} className="nav">
      <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
      <Navbar.Collapse id="responsive-navbar-nav "  >
        <Nav className={`m-auto navLink`}>
          <Nav.Link  onClick={() => document.location.href="/"}>Home</Nav.Link>
          <Nav.Link  onClick={() => scrollTo(AboutMeRef)}>Sobre Nosotros</Nav.Link>
          <Nav.Link  onClick={() => scrollTo(ServicesRef)}>Servicios</Nav.Link>
          <Nav.Link  onClick={() => scrollTo(FooterRef)}>Contacto</Nav.Link> 
          {/* <Nav.Link  onClick={() => history.push('/contact')}>Contacto</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>

           {/* <Navbar style={{ position: 'sticky', top: 0, zIndex: 1, opacity: 0.98 }} className="nav">

                <ul>

                    <li><a href="#" onClick={handleClick} >Sobre Nosotros</a> </li>

                    <li><a href="#" onClick={handleClick} >Blog</a></li>

                    <li><a href="#" onClick={handleClick} >Contacto</a>  </li>

                    <li><a href="#" onClick={handleClick} >Servicios</a>

                        <div className="menu-desplegable">
                            <div className="text-center"><a href="#" onClick={handleClick} >Contenido</a>  </div>
                            <div className="text-center"><a href="#" onClick={handleClick} >Contenido</a></div>
                            <div className="mb-0 text-center"><a href="#" onClick={handleClick} >Contenido</a> </div>
                        </div>

                    </li>
                </ul>

    </Navbar>*/}


        </>
    );
}

export default Navegacion