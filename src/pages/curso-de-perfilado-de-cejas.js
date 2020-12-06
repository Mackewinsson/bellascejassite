import React from "react"
import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"
import coursesData from "../content/My-JSON-Content.json"
import StyledButton from "../components/common/Button"
const curso = coursesData.courses[4]

const cursodeperfiladodecejas = () => {
  return (
    <>
      <SEO title="Curso de perfilado de cejas" />
      <Container>
        <Row className="pt-5 text-center">
          <Col xs={12} className="text-center justify-content-center">
            <h2 className="mb-5">Academia</h2>
            <h4>{curso.name}</h4>
            <small>{`By ${curso.teacher}`}</small>
            <br />
            <br />
            <p>Proximamente anunciaremos las fechas 2021.</p>
            <StyledButton
              href="https://instagram.com/bellascejasacademycl"
              target="_blank"
              rel="noreferrer"
            >
              Ir a Instagram
            </StyledButton>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default cursodeperfiladodecejas
