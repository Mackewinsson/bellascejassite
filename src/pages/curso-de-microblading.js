import React from "react"
import { Container, Row, Col, ResponsiveEmbed, CardDeck } from "react-bootstrap"
import ModalidadCard from "../components/academiaComponentes/ModalidadCard"
import coursesData from "../content/My-JSON-Content.json"
import SEO from "../components/seo"
import StyledButton from "../components/common/Button"

const curso = coursesData.courses[0]
const modalidad = curso.modalidades

const cursodemicroblading = () => {
  return (
    <>
      <SEO title="Curso de Microblading" />
      <Container>
        <Row className="pt-5 text-center">
          <Col xs={12} className="text-center justify-content-center">
            <h2 className="mb-5">Academia</h2>
            <h4>{curso.name}</h4>
            <small>{`By ${curso.teacher}`}</small>
          </Col>
          <Col xs={12}>
            <h6 className="mt-4 mb-4">
              <span role="img" aria-label="emoji hand pointing down">
                👇
              </span>{" "}
              Lo que dicen de nosotros{" "}
              <span role="img" aria-label="emoji hand pointing down">
                👇
              </span>{" "}
            </h6>
            <ResponsiveEmbed aspectRatio="16by9">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/_YMCugve7bM"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="microblading video"
              ></iframe>
            </ResponsiveEmbed>
          </Col>
          <Col xs={12}>
            <hr />
            <h6 className="mt-4 mb-4">¿Qué es el microblading?</h6>
            <p className="text-justify">
              El microblading es la técnica de maquillaje permanente mas
              demandada y lucrativa en la actualidad. En este curso aprenderás
              la técnica de microblading para la construcción parcial o total de
              cejas pelo a pelo. Mediante un lenguaje ameno y cercano podrás ir
              descubriendo cada una de las secciones de aprendizaje que hemos
              diseñado especialmente para ti
            </p>
          </Col>
          <Col xs={12}>
            <hr />
            <h6 className="mt-4">Modalidades disponibles</h6>
            <small className="mb-5">
              Consulta próxima fecha de modalidad <br />
              <strong>Presencial GOLD</strong>.
            </small>
            {curso.modalidades.map((el, i) => {
              return (
                <Col key={el.name}>
                  {el.featured ? (
                    <StyledButton className="mb-2" href={`#${el._ID}`} featured>
                      <span class="badge bg-dark text-light">{i + 1}</span>
                      {` ${el.name}`}
                    </StyledButton>
                  ) : (
                    <StyledButton className="mb-2" href={`#${el._ID}`}>
                      <span class="badge bg-dark text-light">{i + 1}</span>
                      {` ${el.name}`}
                    </StyledButton>
                  )}
                </Col>
              )
            })}
            <small className="mb-5">↑ Haz clic para ir a los valores ↑</small>
          </Col>
          <Col xs={12}>
            {/* PARA QUIEN ES ESTE CURSO */}
            <hr />
            <h6 className="mt-4 mb-4">{curso.details.section1.heading}</h6>
            <ul>
              {curso.details.section1.bullets.map((el, i) => {
                return (
                  <li key={el} className="text-justify">
                    {el}
                  </li>
                )
              })}
            </ul>
          </Col>
          <Col xs={12}>
            {/* QUE APRENDERAS */}
            <hr />
            <h6 className="mt-4 mb-4">{curso.details.section2.heading}</h6>
            <ul>
              {curso.details.section2.bullets.map(el => {
                return (
                  <li className="text-justify" key={el}>
                    {el}
                  </li>
                )
              })}
            </ul>
          </Col>
          <Col xs={12}>
            {/* KIT */}
            <hr />
            <h6 className="mt-4 mb-4">{curso.details.section3.heading}</h6>
            <ul>
              {curso.details.section3.bullets.map(el => {
                return (
                  <li className="text-justify" key={el}>
                    {el}
                  </li>
                )
              })}
            </ul>
          </Col>
          <Col xs={12} className="mt-5">
            <h5 className="mt-4 mb-4">Reserva ahora</h5>
            <CardDeck>
              {modalidad.map((el, i) => {
                return (
                  <ModalidadCard
                    name={el.name}
                    date={curso.date}
                    place={el.place}
                    time={el.time}
                    daysOfAccess={el.daysOfAccess}
                    maxStudents={el.maxStudents}
                    price={el.price}
                    bullets={el.bullets}
                    teacher={curso.teacher}
                    key={el.name}
                    courseName={curso.name}
                    id={el._ID}
                    link={el.flow}
                    index={i + 1}
                  />
                )
              })}
            </CardDeck>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default cursodemicroblading
