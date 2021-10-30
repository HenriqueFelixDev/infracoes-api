import Link from 'next/link'
import { Navbar, Nav, NavItem, NavLink } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCar } from '@fortawesome/free-solid-svg-icons'

export default function AppBar() {
  return (
    <header>
      <Navbar expand="lg" bg="primary" variant="dark" className="px-5" >
        <Navbar.Brand href="/">
          <img src="/car-icon-white.png" height="32" /> Infrações API
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="nav-menu" />
        <Navbar.Collapse id="nav-menu">
          <Nav className="ml-auto">
            <NavItem>
              <NavLink href="/" className="font-weight-bold text-white">
                <FontAwesomeIcon icon={faSearch} className="mr-1" height="16" />
                Consulta
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/infracoes" className="font-weight-bold text-white">
                <FontAwesomeIcon icon={faCar} className="mr-1" height="16" />
                Infrações
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <div className="container-fluid">
        <Link href="/" >
          <a className="navbar-brand">Infrações API</a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Mostrar/Esconder Menu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">Consulta</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/infracoes">
                <a className="nav-link">Infrações</a>
              </Link>
            </li>
          </ul>
        </div>
      </div> */}
    </header>
  )
}