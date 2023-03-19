import styled from "styled-components";

const OrderListWrapper = styled.ul`
  // add your styles here
`;

const OrderItem = styled.li`
  // add your styles here
`;

export const OrderList = ({ orders }) => {
  return (
    <OrderListWrapper>
      {orders.map(({orders_id, order_date, order_price, orders_status}) => (
        <OrderItem key={orders_id}>
          <p>Order ID: {orders_id}</p>
          <p>Order Date: {order_date}</p>
          <p>Order Total: {order_price}</p>
          <p>Order Status: {orders_status}</p>
        </OrderItem>
      ))}
    </OrderListWrapper>
  );
};

