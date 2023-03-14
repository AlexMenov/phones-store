import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 20px;
  background: linear-gradient(to bottom, #f9c0c9, #f782a4);
  border-radius: 10px 10px 0 0;
  color: #fff;
  font-weight: bold;
`;

const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <div>&copy; {new Date().getFullYear()} My Online Store</div>
      <div>Created by Jane Doe</div>
      <div>
        <FooterLink to="/">Back to Main Page</FooterLink>
      </div>
    </FooterContainer>
  );
};
