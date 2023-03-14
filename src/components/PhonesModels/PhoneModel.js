import React from "react";
import styled, { keyframes } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  addProduct,
  deleteProduct,
  updateProduct,
} from "../../store/productReducer";
import { ProductQuantity } from "../ProductQuantity/ProductQuantity";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  border: 1px solid #ccc;
  padding: 16px;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 16px;
`;

const ProductName = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const ProductDescription = styled.p`
  font-size: 16px;
  margin-bottom: 16px;
`;

const ProductPrice = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
`;

const CartQuantity = styled.span`
`;

export const AddToCartButton = styled.button`
  background-color: #007bff;
  color: #fff;
  font-size: 18px;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const PhoneModel = ({ image, name, description, price }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const cartProduct = products.find((product) => product.name === name);
  const totalQuantity = useSelector((state) => state.product.totalQuantity);

  const handleAddProduct = () => {
    const newProduct = {
      id: Date.now() + name,
      name,
      price,
      quantity: 1,
    };
    dispatch(addProduct(newProduct));
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleUpdateProduct = (id, updates) => {
    dispatch(updateProduct({ id, ...updates }));
  };


  return (
    <ProductCardContainer>
      <ProductImage src={image} alt={name} />
      <ProductName>{name}</ProductName>
      <ProductDescription>{description}</ProductDescription>
      <ProductPrice>${price}</ProductPrice>
      {cartProduct ? (
        <ProductQuantity
          id={cartProduct.id}
          quantity={cartProduct.quantity}
          onUpdate={handleUpdateProduct}
        />
      ) : (
        <AddToCartButton onClick={handleAddProduct}>
          Add to Cart
        </AddToCartButton>
      )}
    </ProductCardContainer>
  );
};
