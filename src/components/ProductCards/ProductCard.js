import styled from "styled-components";
import { animated } from "react-spring";
import { Link } from "react-router-dom";

const ProductContainer = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  text-align: center;
  width: 400px;
  height: 400px;
  border: tomato 2px solid;
  border-radius: 5px;
  &:hover img {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    height: 200px;
    margin: 5px;
  }
  img {
    width: 200px;
    min-height: 230px;
    transition: transform 0.3s;

    @media (max-width: 768px) {
      width: 100px;
      height: 100px;
    }
  }
  h3 {
    margin-top: 10px;
  }
  a {
    text-decoration: none;
    color: black;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ProductCard = ({ image, name, link, style }) => {
  return (
    <ProductContainer style={style}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <Link to={link}>Shop Now</Link>
    </ProductContainer>
  );
};
