import styled from "styled-components";
import { Link } from "react-router-dom";

const Icon = styled(Link)`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #1a1a1a;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s ease;
`;

export const UserIcon = ({ userName }) => {
  return <Icon to={"/account-page"}>{userName}</Icon>;
};
