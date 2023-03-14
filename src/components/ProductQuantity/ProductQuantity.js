import styled from "styled-components";
import { AddToCartButton } from "../PhonesModels/PhoneModel";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../store/productReducer";

const ProductQuantityContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProductQuantityButton = styled.button`
  background-color: #007bff;
  color: #fff;
  font-size: 18px;
  padding: 12px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ProductQuantityValue = styled.span`
  font-size: 18px;
  font-weight: 600;
  margin: 0 16px;
`;

export const ProductQuantity = ({ id, quantity, onUpdate }) => {
  const dispatch = useDispatch();
  const handleIncrease = () => {
    onUpdate(id, { quantity: quantity + 1 });
  };

  const handleDecrease = () => {
    onUpdate(id, { quantity: Math.max(quantity - 1, 0) });
  };

  if (quantity === 0) {
    dispatch(deleteProduct(id));
    return (
      <AddToCartButton onClick={handleIncrease}>Add to Cart</AddToCartButton>
    );
  }

  return (
    <ProductQuantityContainer>
      <ProductQuantityButton onClick={handleDecrease}>-</ProductQuantityButton>
      <ProductQuantityValue>{quantity}</ProductQuantityValue>
      <ProductQuantityButton onClick={handleIncrease}>+</ProductQuantityButton>
    </ProductQuantityContainer>
  );
};
