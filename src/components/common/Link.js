import styled from "styled-components"
import { Link } from "gatsby"
import React from "react"

const StyledLink = styled(props => <Link {...props} />)`
  font-weight: bold;
  /* background-image: -webkit-linear-gradient(
    to right,
    #462523 0,
    #cb9b51 22%,
    #f6e27a 45%,
    #f6f2c0 50%,
    #f6e27a 55%,
    #cb9b51 78%,
    #462523 100%
  );
  color: transparent;
  -webkit-background-clip: text; */
  color: #ffd700;

  //Hover styles
  &:hover {
    color: white;
    text-decoration: none;
  }
`
export default StyledLink
