import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import "./header.css"

const Header = ({ siteTitle }) => (
  <Navbar className="navbar-dark" style={{ backgroundColor: "#212121" }}>
    {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
    <Nav className="m-auto">
      <Link to="/">
        <span className="nav-link">Home</span>

        {/* <Nav.Link href="/">Home</Nav.Link> */}
      </Link>
      <Link to="/academia">
        <span className="nav-link">Academia</span>

        {/* <Nav.Link href="/academia">Academia</Nav.Link> */}
      </Link>
      <Link to="/reservas">
        <span className="nav-link">Reservas</span>

        {/* <Nav.Link href="/reservas">Reservas</Nav.Link> */}
      </Link>
      <Link to="/microblading">
        <span className="nav-link">Microblading</span>

        {/* <Nav.Link href="/reservas">Reservas</Nav.Link> */}
      </Link>
      <Nav.Link href="https://api.whatsapp.com/send?phone=56990422712&text=Hola vengo de la pagina web y quiero mas informacion Bellas Cejas">
        +56 9 9042 2712
      </Nav.Link>
    </Nav>
  </Navbar>
)
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
