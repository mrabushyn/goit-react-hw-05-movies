import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  margin: 30px;

  font-size: 18px;
  font-weight: 700;
  cursor: pointer;

`;

const Img = styled.img`
  display: flex;
`;
const Box = styled.div`
  display: inline-block;
  padding-right: 40px;
}`;

const MainContainer = styled.div`
  display: flex;
  width: 80%;
  padding: 8px 16px;
  margin: 15px;
  
`;

const Div = styled.div`
  display: row;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: 650;
  padding-bottom: 20px;
  padding-top: 20px;

`;
const TitleH2 = styled.h1`
  font-size: 18px;
  font-weight: 500;
  align-items: center;
`;


const Inform = styled.div`
  display: flex;
  align-items: center;

`;

const Li = styled.li`
  padding-right: 15px;

`;
export { Img, Box, Div, MainContainer, Title, Inform, TitleH2, Li, StyledLink };
