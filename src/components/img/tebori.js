import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
// import "./tebori.css"

const Tebori = ({ name }) => {
  return (
    <StaticQuery
      query={graphql`
        query GET_TEBORI {
          tebori: file(relativePath: { eq: "tebori.png" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => <Img fluid={data[name].childImageSharp.fluid} />}
    />
  )
}

export default Tebori
