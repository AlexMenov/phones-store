import styled from "styled-components";

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #1a1a1a;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ffffff;
    color: #1a1a1a;
  }
`;

export const LoginButton = ({ handleLoginClick }) => {
  return <Button onClick={handleLoginClick}>Войти</Button>;
};
