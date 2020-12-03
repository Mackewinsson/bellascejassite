import styled from "styled-components"
import { Link } from "gatsby"
import React from "react"

const StyledFooterLink = styled(props => <Link {...props} />)`
  font-weight: bold;
  /* background-image: linear-gradient(
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
  color: white;
  display: flex !important;
  flex-grow: 1;
  overflow: hidden;
  min-width: 50px;
  white-space: nowrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //Hover styles
  &:hover {
    color: white;
    text-decoration: none;
  }
  > span {
    display: flex;
  }
`
export default StyledFooterLink
