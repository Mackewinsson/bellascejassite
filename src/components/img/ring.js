import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledRing = styled(Img)`
  position: absolute;
  width: 12%;
  top: -120px;
  left: 300px;
`

const Ring = ({ name }) => {
  return (
    <StaticQuery
      query={graphql`
        query GET_RING {
          ring: file(relativePath: { eq: "ring.png" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => <StyledRing fluid={data[name].childImageSharp.fluid} />}
    />
  )
}

export default Ring
