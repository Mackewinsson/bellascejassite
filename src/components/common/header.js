import PropTypes from "prop-types"
import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import StyledLink from "./Link"
import styled from "styled-components"

const Header = ({ siteTitle }) => (
  <Navbar className="navbar-dark" style={{ backgroundColor: "#212121" }}>
    <Navbar.Toggle aria-controls="basic-navbar-nav d-flex" />
    <Navbar.Collapse id="basic-navbar-nav justify-content-end">
      <Nav className="">
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
