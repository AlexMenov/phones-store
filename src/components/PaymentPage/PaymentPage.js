import styled from "styled-components";
import { totalPrice, totalQuantity } from "../../store/productReducer";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { PaymentMethodComponent } from "../PaymentMethod/PaymentMethod";
import { PaymentFormComponent } from "../PaymentForm/PaymentForm";
import { generatedId } from "../../store/generateId";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { resetStore } from "../../store/productReducer";

const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PaymentCard = styled.div`
  width: 400px;
  height: 300px;
  border: 1px solid #ccc;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PaymentTotal = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 20px;
`;

export const PaymentPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const order = useSelector((state) => state.product.products);
  const quantity = useSelector(totalQuantity);
  const price = useSelector(totalPrice);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    id: generatedId(),
  });

  const handlePaymentMethodClick = (method) => {
    setPaymentMethod(method);
    setShowForm(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (order.length === 0) {
      console.log("В корзине отсутствуют товары");
      return;
    }
    try {
      await axios.post("http://localhost:8000/api/order", {
        user: formData,
        order,
        paymentMethod,
        orderId: generatedId(),
        date: new Date().toLocaleDateString("ru-RU"),
        price,
      });
      console.log("Заказ выполнен успешно");
      dispatch(resetStore());
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PaymentContainer>
      <PaymentCard>
        <div>
          <h2>Payment Information</h2>
          <p>Quantity: {quantity}</p>
          <PaymentTotal>
            <span>Total:</span>
            <span>${price}.00</span>
          </PaymentTotal>
        </div>
        {showForm ? (
          <PaymentFormComponent
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            paymentMethod={paymentMethod}
          />
        ) : (
          <PaymentMethodComponent
            handlePaymentMethodClick={handlePaymentMethodClick}
          />
        )}
      </PaymentCard>
    </PaymentContainer>
  );
};
