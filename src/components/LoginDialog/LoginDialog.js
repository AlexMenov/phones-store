import { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/productReducer";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  width: 100%;
  height: 30px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "300px",
    height: "250px",
    padding: "20px",
    borderRadius: "8px",
  },
};

export const LoginDialog = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToLogin = await axios.post("http://localhost:8000/api/login", {
      email,
      phone,
    });
    dispatch(addUser(dataToLogin.data));
    setEmail("");
    setPhone("");
    onClose();
    navigate("/account-page");
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      ariaHideApp={false}
    >
      <Wrapper>
        <Title>Войти или зарегистрироваться</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="menovlex@mail.ru"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="+79132504486"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Button type="submit">Авторизоваться</Button>
        </form>
      </Wrapper>
    </Modal>
  );
};
