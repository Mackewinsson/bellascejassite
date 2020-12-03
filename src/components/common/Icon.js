import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

const StyledIcon = styled(props => <FontAwesomeIcon {...props} />)`
  font-weight: bold;
  color: white;
  font-size: 1.5em;
  margin-bottom: 10px;
`

const Icon = ({ icon }) => {
  return <StyledIcon icon={icon} />
}

export default Icon
