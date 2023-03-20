import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { AddProductForm } from "./AddProductForm/AddProductForm";
import { AllProducts } from "./AllProducts/AllProducts";
import { AllUsers } from "./AllUsers/AllUsers";

const AdminPAnelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 25px;
`;

const MenuButton = styled.button`
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  margin: 0 10px;
  border: 1px solid black;
  width: 150px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${({ active }) => (active ? "#00BFFF" : "#FFFFFF")};
  color: ${({ active }) => (active ? "#FFFFFF" : "#000000")};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ active }) => (active ? "#00BFFF" : "#F5F5F5")};
    color: ${({ active }) => (active ? "#FFFFFF" : "#000000")};
  }
`;

export const AdminPanel = () => {
  const [activeButton, setActiveButton] = useState("button1");
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  const handleProducts = async () => {
    const data = await axios.get("http://localhost:8000/api/getallproducts");
    setProducts(data.data);
  };
  const handleUsers = async () => {
    const users = await axios.get("http://localhost:8000/api/getallusers");
    setUsers(users.data);
  };

  const handleClick = (button) => {
    setActiveButton(button);
  };

  return (
    <AdminPAnelContainer>
      <MenuContainer>
        <MenuButton
          onClick={() => handleClick("button1")}
          active={activeButton === "button1"}
        >
          Добавить товар
        </MenuButton>
        <MenuButton
          onClick={() => {
            handleClick("button2");
            handleProducts();
          }}
          active={activeButton === "button2"}
        >
          Список товаров
        </MenuButton>
        <MenuButton
          onClick={() => {
            handleClick("button3");
            handleUsers();
          }}
          active={activeButton === "button3"}
        >
          Список юзеров
        </MenuButton>
        <MenuButton
          onClick={() => handleClick("button4")}
          active={activeButton === "button4"}
        >
          Список заказов
        </MenuButton>
      </MenuContainer>
      {activeButton === "button1" && <AddProductForm />}
      {activeButton === "button2" && <AllProducts products={products} />}
      {activeButton === "button3" && <AllUsers users={users} />}
      {/*   {activeButton === "button4" && <Component4 />}
       */}
    </AdminPAnelContainer>
  );
};
