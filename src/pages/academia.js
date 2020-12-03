import React from "react"

import SEO from "../components/seo"
import { Container, Row, Col, CardDeck } from "react-bootstrap"
import Card from "../components/academiaComponentes/cards"
import coursesData from "../content/My-JSON-Content.json"

const Academia = () => {
  const coursesCards = coursesData.courses.map(course => {
    return (
      <Card
        key={course.id}
        name={course.name}
        price={course.price}
        date={course.date}
        place={course.place}
        description={course.description}
        teacher={course.teacher}
      />
    )
  })

  return (
    <>
      <SEO title="Academia" />
      <Container>
        <Row className="pt-5 text-center">
          <Col xs={12} className="text-center justify-content-center">
            <h2 className="mb-5">Academia</h2>
            <h4>Cursos disponibles</h4>
            <small>By Yulexi Márquez</small>
          </Col>
          <Col xs={12}>
            <CardDeck className="mt-5">{coursesCards}</CardDeck>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default Academia
