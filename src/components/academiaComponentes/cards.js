import React from "react"
import { Card } from "react-bootstrap"
import "./cards.css"

const cards = ({ name, price, place, date, description, teacher }) => {
  return (
    <div className="col mb-4 ml-4">
      <Card border="primary" style={{ width: "18rem" }}>
        <Card.Header>{name}</Card.Header>
        <Card.Body>
          <Card.Text>{description}</Card.Text>
          <small className="text-muted">{`Inversion: ${price}`}</small>
          <br />
          <small>{teacher}</small>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            {`Lugar: ${place}`} | {`Fecha: ${date}`}
          </small>
        </Card.Footer>
      </Card>
    </div>
  )
}

export default cards
