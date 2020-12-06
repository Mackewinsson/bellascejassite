import styled from "styled-components"
import { Button } from "react-bootstrap"
import React from "react"

const StyledButton = styled(props => <Button {...props} />)`
  font-weight: bold;
  justify-self: center;
  border-radius: 25px;
  display: flex;
  align-content: center;
  align-items: center;
`
export default StyledButton
