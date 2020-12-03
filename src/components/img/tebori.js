import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledTebori = styled(Img)`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  /* transform: rotate(-90deg);
  z-index: -200;
  position: absolute !important;
  bottom: 300px; */
`

const Tebori = ({ name }) => {
  return (
    <StaticQuery
      query={graphql`
        query GET_TEBORI {
          tebori: file(relativePath: { eq: "tebori.png" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
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
