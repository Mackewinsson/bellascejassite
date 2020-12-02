import PropTypes from "prop-types"
import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import StyledLink from "../common/Link"

const Header = ({ siteTitle }) => (
  <Navbar
    className="navbar-dark"
    style={{ backgroundColor: "#212121" }}
    expand="lg"
  >
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="m-auto">
        <StyledLink to="/">
          <span className="nav-link">Home</span>
        </StyledLink>
        <StyledLink to="/academia">
          <span className="nav-link">Academia</span>
        </StyledLink>
        <StyledLink to="/reservas">
          <span className="nav-link">Reservas</span>
        </StyledLink>
        <StyledLink to="/microblading">
          <span className="nav-link">Microblading</span>
        </StyledLink>
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
