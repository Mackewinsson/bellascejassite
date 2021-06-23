import React from "react"
// import Logo from "../components/img/logo"
// import Tebori from "../components/img/tebori"
import { StaticImage } from "gatsby-plugin-image"

import Ring from "../components/img/ring"

import SEO from "../components/seo"
import { Helmet } from "react-helmet"

import styled from "styled-components"

const StyledBody = styled.div`
  background-color: #2a2a2a;
  height: 100vh;
  width: 100%;

  > #ring {
    position: absolute;
    top: -50px;
  }
`

const StyledRing = styled(StaticImage)``

const IndexPage = () => (
  <>
    <Helmet>
      <script src="http://192.168.100.9:8097"></script>
    </Helmet>
    <SEO title="Home" />
    <StyledBody>
      <StaticImage src="../images/ring.png" alt="ring" id="ring" />
      <StaticImage src="../images/cone.png" alt="cone" />

      {/* <Logo name="logo" /> */}
      {/* <Tebori name="tebori" /> */}
      <div className="d-flex justify-content-center pt-5"></div>
    </StyledBody>
  </>
)

export default IndexPage
