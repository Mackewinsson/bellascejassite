import React from "react"
import { Card } from "react-bootstrap"
import styled from "styled-components"
import StyledButton from "../common/Button"

const StyledCard = styled(Card)`
  border-radius: 25px;

  &:hover {
    box-shadow: 1px 1px 2px black, 0 0 25px gray, 0 0 5px darkgray;
    transition: boxShadow 2s;
  }

  > div.card-header {
    font-weight: bold;
  }

  > p.card-text {
    font-size: 12px;
  }
`

const cards = ({ name, price, place, date, description, teacher }) => {
  return (
    <StyledCard border="primary">
      <Card.Header>{name}</Card.Header>
      <Card.Body>
        <Card.Text>{description}</Card.Text>
        <small className="text-muted">{`Inversion: ${price}`}</small>
        <br />
        <small className="text-muted">
          {`Lugar: ${place}`}
          <br />
          {`Fecha: ${date}`}
        </small>
        <br />
        <small>Profesora: {teacher}</small>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-center">
        <StyledButton
          href={`https://api.whatsapp.com/send?phone=56949363030&text=Quiero mas informacion del curso de [${name}] Bellas Cejas Academy`}
          target="_blank"
          rel="noreferrer"
        >
          Reserva
        </StyledButton>
      </Card.Footer>
    </StyledCard>
  )
}

export default cards
