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
    border-top: solid 2px;
    border-bottom: solid 2px;
  }

  :hover:not(.active) {
    color: rgb(255, 28, 6);
  }
`;

const Container = styled.div`

  padding: 15px;
  border-bottom: solid 2px;
  border-color: red;
  background-color: lightgray;
`;

export { StyledLink, Container };
