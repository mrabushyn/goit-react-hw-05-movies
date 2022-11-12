import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  margin: 30px;
  color: black;
  font-size: 18px;
  text-decoration: none;
  


  &.active {
    color: rgb(255, 28, 6);
    font-size: 22px;
    font-weight: 1000;
  }

  :hover:not(.active) {
    color: rgb(255, 28, 6);


  }
`;

const Box = styled.div `
margin: 15px;
border-bottom: solid 1px;
`

export { StyledLink, Box };
