import React from "react"
import { Card, Badge } from "react-bootstrap"
import styled from "styled-components"
import StyledLink from "../common/StyledLink"

const StyledCard = styled(Card)`
  border-radius: 25px;
  font-family: Helvetica;

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
  > p.card-text > strong {
    /* font-weight: bold !important; */
    color: blue;
    background-color: black;
  }
`

const CourseCard = ({
  name,
  price,
  place,
  date,
  description,
  teacher,
  path,
  index,
  modalidad,
}) => {
  console.log(modalidad)
  return (
    <div className="col mb-4">
      <StyledCard border="primary" className="mt-5">
        <Card.Header className="text-center">
          <span class="badge bg-dark text-light">{index}</span>
          {` ${name}`}
        </Card.Header>
        <Card.Body>
          <div className="text-left">
            <b>Descripción: </b>
            {description}
            <br />
            <b>Inversion: </b>
            {price}
            <br />
            <b>Lugar: </b>
            {place}
            <br />
            <b>Fecha: </b>
            {!modalidad ? (
              <>
                <Badge pill variant="danger">
                  No disponible
                </Badge>
                <br />
                <small>(Solo online mientras dure cuarentena)</small>
              </>
            ) : (
              date
            )}
            <br />
            <b>Teacher: </b>
            {teacher}
          </div>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-center">
          <StyledLink to={path}>VER DETALLES</StyledLink>
        </Card.Footer>
      </StyledCard>
    </div>
  )
}

export default CourseCard
