import React from "react"

import Tebori from "../components/img/tebori"
import Logo from "../components/img/logo"

import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Container>
      <Row className="text-center">
        <Col xs={12}>
          <Logo name="logo" />
          <Tebori name="tebori" />
        </Col>
      </Row>
    </Container>
  </>
)

export default IndexPage
