import styled from "styled-components"
import { Button } from "react-bootstrap"
import React from "react"

const StyledButton = styled(props => <Button {...props} />)`
  font-weight: bold;
  justify-self: center;
`
export default StyledButton
