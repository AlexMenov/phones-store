import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { ProductQuantity } from "../ProductQuantity/ProductQuantity";
import { updateProduct, totalPrice, totalQuantity } from "../../store/productReducer";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  width: 50%;
`;

const CartItemsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

const CartItemName = styled.div`
  flex: 1;
  margin-right: 10px;
`;

const CartItemPrice = styled.div`
  flex: 1;
  margin-right: 10px;
`;

const CartItemQuantity = styled.div`
  flex: 1;
`;

const CartSummaryContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  background-color: #f2f2f2;
`;

const CartSummary = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
  text-align: center;
`;

const StyledButton = styled(Link)`
  background-color: #008cba;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.product.products);
  const price = useSelector(totalPrice);
  const quantity = useSelector(totalQuantity);
  const handleUpdateProduct = (id, updates) => {
    dispatch(updateProduct({ id, ...updates }));
  };

  return (
    <Container>
      <CartItemsContainer>
        <CartItemsHeader>
          <CartItemName>Name</CartItemName>
          <CartItemPrice>Price</CartItemPrice>
          <CartItemQuantity>Quantity</CartItemQuantity>
        </CartItemsHeader>
        {cartItems.map((item) => (
          <CartItem key={item.id}>
            <CartItemName>{item.name}</CartItemName>
            <CartItemPrice>${item.price}</CartItemPrice>
            <CartItemQuantity>{item.quantity}</CartItemQuantity>
            <ProductQuantity
              id={item.id}
              quantity={item.quantity}
              onUpdate={handleUpdateProduct}
            />
          </CartItem>
        ))}
      </CartItemsContainer>
      <CartSummaryContainer>
        <CartSummary>Total Items: {quantity}</CartSummary>
        <CartSummary>Total Price: ${price}.00</CartSummary>
        <StyledButton to={"/payment"}>To pay</StyledButton>
      </CartSummaryContainer>
    </Container>
  );
};
