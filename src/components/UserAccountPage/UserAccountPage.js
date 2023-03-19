import { useState, useEffect } from "react";
import styled from "styled-components";
import { OrderList } from "./OrderList";
import axios from "axios";
import { useSelector } from "react-redux";

const UserAccountPageWrapper = styled.div`
  // add your styles here
`;

export const UserAccountPage = () => {
  const userId = useSelector((state) => state.product.user.user_id);
  console.log("на странице аккаунта", userId);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(
        "http://localhost:8000/api/orders/" + userId
      );
      console.log(data);
      setOrders(data.data);
    }
    fetchData();
  }, [userId]);

  return (
    <UserAccountPageWrapper>
      {orders.length > 0 ? (
        <>
          <h1>Your Orders</h1>
          <OrderList orders={orders} />
        </>
      ) : (
        <h2>Пока отсутствуют заказы ((</h2>
      )}
    </UserAccountPageWrapper>
  );
};
