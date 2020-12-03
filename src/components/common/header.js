import PropTypes from "prop-types"
import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import StyledLink from "./Link"

const Header = ({ siteTitle }) => (
  <Navbar
    className="navbar-dark"
    style={{ backgroundColor: "#212121" }}
    expand="lg"
  >
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="m-auto">
        <Nav.Link as="div">
          <StyledLink to="/">Home</StyledLink>
        </Nav.Link>
        <Nav.Link as="div">
          <StyledLink to="/academia">Academia</StyledLink>
        </Nav.Link>
        <Nav.Link as="div">
          <StyledLink to="/reservas">Reservas</StyledLink>
        </Nav.Link>
        <Nav.Link as="div">
          <StyledLink to="/microblading">Microblading</StyledLink>
        </Nav.Link>
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
