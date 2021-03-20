import React from "react"

import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"
import CourseCard from "../components/academiaComponentes/CourseCard"
import coursesData from "../content/My-JSON-Content.json"

const Academia = () => {
  const coursesCards = coursesData.courses.map((course, i) => {
    return (
      <CourseCard
        key={course.id}
        name={course.name}
        price={course.price}
        date={course.modalidades[0].date}
        place={course.place}
        description={course.description}
        teacher={course.teacher}
        path={course.path}
        index={i + 1}
        modalidad={course.modalidades[0].disponiblidad}
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
        </Row>
        <Row as="div" className="row-cols-1 row-cols-md-3">
          {coursesCards}
        </Row>
      </Container>
    </>
  )
}
export default Academia
