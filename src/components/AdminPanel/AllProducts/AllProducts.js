import styled from "styled-components";

const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ProductCard = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin: 16px;
  padding: 16px;
  border-radius: 8px;
  width: calc(33.33% - 32px);
  border: 1px solid tomato;
`;

const ProductName = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const ProductDescription = styled.p`
  font-size: 16px;
  margin-bottom: 8px;
`;

const ProductPrice = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const AllProducts = ({ products }) => {
  return (
    <ProductListContainer>
      {products.map((product) => (
        <ProductCard key={product.name}>
          <ProductName>{product.name}</ProductName>
          <ProductDescription>{product.description}</ProductDescription>
          <ProductPrice>${product.price}</ProductPrice>
        </ProductCard>
      ))}
    </ProductListContainer>
  );
};
