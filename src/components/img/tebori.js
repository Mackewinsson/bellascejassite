import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
<<<<<<< HEAD
import "./tebori.css"
=======
import styled from "styled-components"

const StyledTebori = styled(Img)`
  width: 50%;
`
>>>>>>> i need to align items center

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
