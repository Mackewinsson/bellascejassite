import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Nav, Navbar } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <Navbar variant="dark" style={{ backgroundColor: "#212121" }}>
    {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
    <Nav className="m-auto">
      <Link to="/">
        <Nav.Link href="/">Home</Nav.Link>
      </Link>
      <Link to="/academia">
        <Nav.Link href="/academia">Academia</Nav.Link>
      </Link>
      <Link to="/reservas">
        <Nav.Link href="/reservas">Reservas</Nav.Link>
      </Link>
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
