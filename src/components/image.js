import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import "./image.css"

const Image = ({ name }) => {
  return (
    <StaticQuery
      query={graphql`
        query GET_IMAGE {
          logo: file(relativePath: { eq: "tebori.png" }) {
            childImageSharp {
              fluid(maxWidth: 800) {
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

export default Image
