import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"

import styled from "styled-components"

const StyledBody = styled.div`
  background-color: #2a2a2a;
  height: 100vh;
  width: 100%;
  padding-top: 15%;
  padding-right: 20%;
  padding-left: 20%;
`

const StyledTitle = styled.h1`
  color: white;
  font-size: 3.7em;
  position: relative;

  &&:before {
    content: "";
    display: block;
    width: 100px;
    height: 1px;
    background-color: white;
    position: absolute;
    top: 45px;
    left: -120px;
  }
`

const StyledButton = styled.a`
  border: 1px solid white;
  background-color: transparent;
  color: white;
  border-radius: 50px;
  padding: 1em 2em;
  margin-top: 15px;
  display: inline-block;

  &:hover {
    color: white;
    text-decoration: none;
    font-size: 1.1em;
    font-weight: bold;
  }

  &:visited {
    color: white;
    text-decoration: none;
  }
`

const IndexPage = () => (
  <>
    <Helmet>
      <script src="http://192.168.100.9:8097"></script>
    </Helmet>
    <SEO title="Home" />
    <StaticImage
      src="../images/ring.png"
      alt="ring"
      style={{
        position: "absolute",
        top: "-130px",
        left: "150px",
        width: "180px",
      }}
    />
    <StaticImage
      src="../images/cone.png"
      alt="cone"
      style={{
        position: "absolute",
        top: "200px",
        right: "150px",
        width: "180px",
      }}
    />
    <StaticImage
      src="../images/cube.png"
      alt="cube"
      style={{
        position: "absolute",
        bottom: "150px",
        left: "150px",
        width: "200px",
      }}
    />
    <StyledBody>
      <StyledTitle>
        Cejas Perfectas
        <br /> en todo momento
      </StyledTitle>
      <StyledButton
        href="https://api.whatsapp.com/send?phone=56990422712&text=Hola vengo de la pagina web y quiero mas informacion Bellas Cejas"
        target="_blank"
        rel="noreferrer"
      >
        Reserva tu hora
      </StyledButton>
    </StyledBody>
  </>
)

export default IndexPage
