import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const ImageWrapperMobileShow = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`

const ImageWrapperMobile = () => {
  return (
    <ImageWrapperMobileShow>
      <StaticImage
        src="../images/ring.png"
        alt="ring"
        style={{
          position: "absolute",
          top: "-20px",
          left: "100px",
          width: "100px",
        }}
        imgClassName="ring"
      />
      <StaticImage
        src="../images/cone.png"
        alt="cone"
        style={{
          position: "absolute",
          top: "120px",
          right: "-20px",
          width: "100px",
        }}
        imgClassName="cone"
      />
      <StaticImage
        src="../images/cube.png"
        alt="cube"
        style={{
          position: "absolute",
          top: "500px",
          left: "120px",
          width: "100px",
        }}
        imgClassName="cube"
      />
    </ImageWrapperMobileShow>
  )
}

export default ImageWrapperMobile
