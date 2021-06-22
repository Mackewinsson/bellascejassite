import React from "react"

import Logo from "../components/img/logo"
import Tebori from "../components/img/tebori"

import SEO from "../components/seo"
import StyledButton from "../components/common/Button"
import { Helmet } from "react-helmet"

import styled from "styled-components"

const StyledBody = styled.div`
  background-color: #2a2a2a;
`

const IndexPage = () => (
  <>
    <Helmet>
      <script src="http://192.168.100.9:8097"></script>
    </Helmet>
    <SEO title="Home" />
    <StyledBody>
      {/* <Logo name="logo" /> */}
      {/* <Tebori name="tebori" /> */}
      <small className="d-flex justify-content-center mt-5">
        By Yulexi Marquez
      </small>
      <div className="d-flex justify-content-center mt-5">
        <StyledButton
          href={`https://api.whatsapp.com/send?phone=56990422712&text=Hola vengo de la pagina web y quiero mas informacion de Bellas Cejas`}
          target="_blank"
          rel="noreferrer"
          className="mt-4"
        >
          Microblading
        </StyledButton>
      </div>
    </StyledBody>
  </>
)

export default IndexPage
