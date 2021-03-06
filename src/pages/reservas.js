import React from "react"

import SEO from "../components/seo"
import { Container, Row, Col, Button } from "react-bootstrap"

const Reservas = () => (
  <>
    <SEO title="Reservas" />
    <Container>
      <Row className="text-center p-5">
        <Col>
          <h2>Reservas</h2>
          <p className="mt-5 mb-5">
            Reserva tu hora de forma sencilla con nuestro sistema automatizado.
            Solo darle click al boton que dice "Reserva tu hora" y en breve una
            de nuestras colaboradoras te atenderá y te dará una cita en la fecha
            que te acomode
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

export default Reservas
