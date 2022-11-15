import styled from 'styled-components';

const Input = styled.input`
  display: inline-block;
  width: 20%;
  font: inherit;
  font-size: 16px;
  height: 26px;
  border:solid 2px red;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  margin: 20px;

}

.input::placeholder {
  font: inherit;
  font-size: 16px;
}
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 2px;
  background-color: red;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  line-height: 6px;
  font-style: normal;
  font-weight: 500;
  min-width: 30px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

:hover:not(.button),
:focus:not(.button) {
  background-color: #303f9f;
}
`;

export { Input, Button };
