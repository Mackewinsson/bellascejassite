// import { Link } from "gatsby"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "./footer.css"

const footer = ({ siteTitle }) => {
  return (
    <footer className="footer">
      <Container>
        <Row className="text-center light">
          <Col>
            <a href="https://www.mackewinsson.pro" style={{ color: "white" }}>
              By Mackewinsson
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default footer
