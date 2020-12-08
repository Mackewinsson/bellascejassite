import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledWebpay = styled(Img)`
  width: 90%;
  margin-right: 10px;
`

const WebPay = ({ name }) => {
  return (
    <>
      <StaticQuery
        query={graphql`
          query GET_WEBPAY {
            webpay: file(relativePath: { eq: "webpay.png" }) {
              childImageSharp {
                fluid(maxWidth: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <StyledWebpay fluid={data[name].childImageSharp.fluid} />
        )}
      />
    </>
  )
}

export default WebPay
