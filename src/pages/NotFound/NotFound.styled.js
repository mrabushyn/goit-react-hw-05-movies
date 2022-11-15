import styled from 'styled-components';

const Box = styled.div`
  margin: 10% 10%;
  color: black;
  font-size: 58px;

  :hover:not(.active) {
    margin: 0;
    color: red;
    font-size: 158px;
  }
`;

const Div = styled.div`
  color: black;
  font-size: 58px;

  :hover:not(.active) {
    margin-left: 2%;
    color: silver;
    font-size: 70px;
  }
`;

export { Box, Div };
