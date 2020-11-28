import React from "react"

import SEO from "../components/seo"
import { Container, Row, Col, Button } from "react-bootstrap"

const Microblading = () => (
  <>
    <SEO title="Microblading" />
    <Container>
      <Row className="text-center p-5">
        <Col>
          <h2>Microblading</h2>
          <p className="mt-5 mb-5">
            Proximamente aqui estara todo lo que necesitas saber del
            microblading
          </p>
          <a href="https://api.whatsapp.com/send?phone=56990422712&text=Hola vengo de la pagina web y quiero mas informacion Bellas Cejas">
            <Button variant="primary" size="lg" className="mt-5">
              Reserva tu hora
            </Button>{" "}
          </a>
        </Col>
      </Row>
    </Container>
  </>
)

export default Microblading
