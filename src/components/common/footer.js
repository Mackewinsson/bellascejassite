// import { Link } from "gatsby"
import React from "react"
import StyledFooterLink from "./FooterLink"
import styled from "styled-components"
import Icon from "./Icon"
import {
  faHome,
  faPen,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons"

const FooterMenu = styled.nav`
  display: flex;
  position: fixed;
  bottom: 0;
  background-color: #212121;
  width: 100%;
  min-height: 80px;
  overflow-x: auto;
`

const footer = ({ siteTitle }) => {
  return (
    <FooterMenu className="footer">
      <StyledFooterLink to="/">
        <Icon icon={faHome} />
        <span>HOME</span>
      </StyledFooterLink>
      <StyledFooterLink to="/academia">
        <Icon icon={faGraduationCap} />
        <span>ACADEMIA</span>
      </StyledFooterLink>
      <StyledFooterLink to="/reservas">
        <Icon icon={faPen} />
        <span>RESERVAS</span>
      </StyledFooterLink>
    </FooterMenu>
  )
}

export default footer
