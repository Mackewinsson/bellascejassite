import React from "react"

import Tebori from "../components/img/tebori"
import Logo from "../components/img/logo"

import SEO from "../components/seo"
import "./index.css"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Logo name="logo" />
    <Tebori name="tebori" />
  </>
)

export default IndexPage
