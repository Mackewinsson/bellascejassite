import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import "./header.css"

const Header = ({ siteTitle }) => (
  <Navbar
    className="navbar-dark"
    style={{ backgroundColor: "#212121" }}
    expand="lg"
  >
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="m-auto">
        <Link to="/">
          <span className="nav-link">Home</span>
        </Link>
        <Link to="/academia">
          <span className="nav-link">Academia</span>
        </Link>
        <Link to="/reservas">
          <span className="nav-link">Reservas</span>
        </Link>
        <Link to="/microblading">
          <span className="nav-link">Microblading</span>
        </Link>
        <Nav.Link
          href="https://api.whatsapp.com/send?phone=56990422712&text=Hola vengo de la pagina web y quiero mas informacion Bellas Cejas"
          target="_blank"
          rel="noreferrer"
        >
          +56 9 9042 2712
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
