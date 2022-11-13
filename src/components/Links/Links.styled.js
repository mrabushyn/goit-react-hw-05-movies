import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  margin: 30px;
  color: black;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;

  &.active {
    color: rgb(255, 28, 6);
    font-size: 18px;
    font-weight: 700;
  }

  :hover:not(.active) {
    color: rgb(255, 28, 6);
  }
`;

const TitleH2 = styled.h1`
  font-size: 20px;
  font-weight: 500;
  margin: 25px 40px;
`;

const LinkContainer = styled.ul`
  margin: 15px;
  font-size: 20px;
  padding-bottom: 20px;
  border-bottom: solid 1px;
`;

export { TitleH2, StyledLink, LinkContainer };
