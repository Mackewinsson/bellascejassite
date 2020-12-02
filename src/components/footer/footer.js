// import { Link } from "gatsby"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import StyledLink from "../common/Link"
import styled from "styled-components"

const FooterMenu = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  background-color: #212121;
  width: 100%;
  min-height: 100px;
`

const footer = ({ siteTitle }) => {
  return (
    <FooterMenu className="footer">
      <Container>
        <Row className="text-center light">
          <Col>
            <StyledLink to="/">HOME</StyledLink>
          </Col>
          <Col>
            <StyledLink to="/academia">ACADEMIA</StyledLink>
          </Col>
          <Col>
            <StyledLink to="/reservas">RESERVAS</StyledLink>
          </Col>
        </Row>
      </Container>
    </FooterMenu>
  )
}

export default footer
