import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledTebori = styled(Img)`
  width: 90%;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    width: 60%;
    margin-right: auto;
    margin-left: auto;
  }
`

const Tebori = ({ name }) => {
  return (
    <StaticQuery
      query={graphql`
        query GET_TEBORI {
          tebori: file(relativePath: { eq: "tebori.png" }) {
            childImageSharp {
              fluid(maxWidth: 380) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => <StyledTebori fluid={data[name].childImageSharp.fluid} />}
    />
  )
}

export default Tebori
