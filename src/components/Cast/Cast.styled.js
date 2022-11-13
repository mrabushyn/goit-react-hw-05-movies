import styled from 'styled-components';


const CastList = styled.ul`
  display: flex;
  
  flex-wrap: wrap;
  color: black;
  font-size: 18px;
`;

const Actor = styled.li`
  display: flex;

  flex-wrap: wrap;
  font-size: 14px;
  text-decoration: none;
`;

const Name = styled.p`
padding: 4px;
  width: 120px;
`;

export { Actor, CastList, Name };
