import styled from "styled-components";
import { ProductCards } from "../ProductCards/ProductCards";
import { AddProductForm } from "../Admin/Admin";
import { LoginForm } from "../Login/Login";
import { PhonesModels } from "../PhonesModels/PhonesModels";
import { Routes, Route, Navigate } from "react-router-dom";
import { ShoppingCart } from "../ShoppingCart/ShoppingCart";
import { PaymentPage } from "../PaymentPage/PaymentPage";
import { UserAccountPage } from "../UserAccountPage/UserAccountPage";

const MainContent = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

export const Main = () => {
  const isLoggedIn = localStorage.getItem("loggedIn");
  return (
    <MainContent>
      <Routes>
        <Route path="/" element={<ProductCards />} />
        <Route path="/phones/:id" element={<PhonesModels />} />
        <Route path="payment" element={<PaymentPage />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/admin" /> : <LoginForm />}
        />
        <Route
          path="/admin"
          element={isLoggedIn ? <AddProductForm /> : <Navigate to="/login" />}
        />
        <Route path="/account-page" element={<UserAccountPage />} />
      </Routes>
    </MainContent>
  );
};
