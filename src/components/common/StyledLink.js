import styled from "styled-components"
import { Link } from "gatsby"
import React from "react"

const StyledLink = styled(props => <Link {...props} />)`
  background-color: black;
  padding: 10px;
  color: white;
`
export default StyledLink
