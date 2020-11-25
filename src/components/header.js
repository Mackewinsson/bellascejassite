// import { Link } from "gatsby"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Nav, Navbar, Container, NavLink } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header>
    <Navbar
      style={{ backgroundColor: "#212121", padding: 0, height: "80px" }}
      variant="dark"
      expand="lg"
      collapseOnSelect
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Link to="/">
          <NavLink href="/">
            <Navbar.Brand href="/">
              {siteTitle}
              {/* <img
              src={logo}
              width="300"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /> */}
            </Navbar.Brand>
          </NavLink>
        </Link>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/academia">
              <NavLink href="/academia">Academia</NavLink>
            </Link>
            <Link to="/reservas">
              <NavLink href="/reservas">Reservas</NavLink>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
)
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
