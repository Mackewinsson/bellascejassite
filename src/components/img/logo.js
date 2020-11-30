import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
<<<<<<< HEAD
import "./logo.css"
=======
import styled from "styled-components"

const StyledLogo = styled(Img)`
  width: 50%;
`
>>>>>>> i need to align items center

const Logo = ({ name }) => {
  return (
    <StaticQuery
      query={graphql`
        query GET_LOGO {
          logo: file(relativePath: { eq: "logo.png" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
<<<<<<< HEAD
      render={data => (
        <Img fluid={data[name].childImageSharp.fluid} id="logo" />
      )}
=======
      render={data => <StyledLogo fluid={data[name].childImageSharp.fluid} />}
>>>>>>> i need to align items center
    />
  )
}

export default Logo
