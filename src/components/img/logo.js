import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledLogo = styled(Img)`
  margin-top: 200px;
`

const Logo = ({ name }) => {
  return (
    <>
      <StaticQuery
        query={graphql`
          query GET_LOGO {
            logo: file(relativePath: { eq: "logo.png" }) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => <StyledLogo fluid={data[name].childImageSharp.fluid} />}
      />
    </>
  )
}

export default Logo
