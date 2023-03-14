import styled from "styled-components";

const PaymentButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
`;

const PaymentForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PaymentFormField = styled.input`
  margin-top: 8px;
  padding: 4px;
  font-size: 16px;
`;

export const PaymentFormComponent = ({
  formData,
  handleInputChange,
  handleSubmit,
  paymentMethod,
}) => {
  return (
    <PaymentForm onSubmit={handleSubmit}>
      <PaymentFormField
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Name"
        required
      />
      <PaymentFormField
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email"
        required
      />
      <PaymentFormField
        type="text"
        name="address"
        value={formData.address}
        onChange={handleInputChange}
        placeholder="Address"
        required
      />
      <PaymentFormField
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        placeholder="Phone"
        required
      />
      <PaymentButton type="submit">
        Order and pay by {paymentMethod}
      </PaymentButton>
    </PaymentForm>
  );
};
