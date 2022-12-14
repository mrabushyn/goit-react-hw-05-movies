import styled from 'styled-components';
import { NavLink } from 'react-router-dom';



const StyledLink = styled(NavLink)`
  display: grid;
  margin-right: 70%;
  color: black;
  font-size: 18px;
  text-decoration: dotted;

  & .active {
    color: black;
  }

  :hover:not(.active) {
    color: rgb(255, 72, 0);
    font-size: 22px;
  }
`;

const TitleH2 = styled.h1`
  font-size: 22px;
  font-weight: 800;
margin: 25px 40px;
`;




export { StyledLink, TitleH2 };