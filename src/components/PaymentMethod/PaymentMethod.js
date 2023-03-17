import styled from "styled-components";

const PaymentMethod = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PaymentMethodButton = styled.button`
  margin-top: 16px;
`;

export const PaymentMethodComponent = ({ handlePaymentMethodClick }) => {
  return (
    <PaymentMethod>
      <h3>Select Payment Method</h3>
      <PaymentMethodButton onClick={() => handlePaymentMethodClick("наличные")}>
        Cash
      </PaymentMethodButton>
      <PaymentMethodButton onClick={() => handlePaymentMethodClick("банковская карта")}>
        Card
      </PaymentMethodButton>
    </PaymentMethod>
  );
};
