import PropTypes from "prop-types"
import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import StyledLink from "./Link"
import styled from "styled-components"

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`
const StyledWrapper = styled(Nav)`
  display: flex;
  width: 40%;
  justify-content: space-between;
  padding-right: 50px;
`

const Wrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Navbar className="navbar-dark" style={{ backgroundColor: "#2A2A2A" }}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <StyledContainer>
          <StyledWrapper>
            <Nav.Link as="div">
              <StyledLink to="/">Inicio</StyledLink>
            </Nav.Link>
            <Nav.Link as="div">
              <StyledLink to="#">Staff</StyledLink>
            </Nav.Link>
            <Nav.Link as="div">
              <StyledLink to="/academia">Academia</StyledLink>
            </Nav.Link>
            <Nav.Link as="div">
              <StyledLink to="/reservas">Reservas</StyledLink>
            </Nav.Link>
            {/* <Nav.Link as="div">
            <StyledLink to="/microblading">Microblading</StyledLink>
          </Nav.Link> */}
            <Nav.Link
              href="https://api.whatsapp.com/send?phone=56990422712&text=Hola vengo de la pagina web y quiero mas informacion Bellas Cejas"
              target="_blank"
              rel="noreferrer"
            >
              +56 9 9042 2712
            </Nav.Link>
          </StyledWrapper>
        </StyledContainer>
      </Navbar.Collapse>
    </Navbar>
  </Wrapper>
)
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
