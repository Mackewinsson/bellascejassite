import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledTebori = styled(Img)`
  width: 50%;
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
