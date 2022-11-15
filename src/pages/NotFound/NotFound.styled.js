import styled from 'styled-components';

const Box = styled.div`
  margin: 10% 10%;
  color: black;
  font-size: 158px;

  :hover:not(.active) {
    margin: 0;
    color: red;
    font-size: 398px;
  }
`;

const Div = styled.div`
  color: black;
  font-size: 158px;

  :hover:not(.active) {
    margin-left: 2%;
    color: silver;
  }
`;

export { Box, Div };
