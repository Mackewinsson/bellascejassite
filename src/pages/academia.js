import React from "react"

import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"
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
        <Row className="text-center p-5">
          <Col>
            <h2>Academia</h2>
          </Col>
        </Row>
      </Container>
      <Row className="row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3">
        {coursesCards}
      </Row>
    </>
  )
}
export default Academia
