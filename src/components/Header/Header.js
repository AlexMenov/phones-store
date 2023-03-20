import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { resetStore, totalQuantity } from "../../store/productReducer";
import { LoginButton } from "../LoginButton/LoginButton";
import { LoginDialog } from "../LoginDialog/LoginDialog";
import { useState } from "react";
import { UserIcon } from "../UserIcon/UserIcon";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  padding: 0 50px;
  background: linear-gradient(to bottom, #ffe9f7, #ffb6c1);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const Menu = styled.nav`
  display: flex;
  justify-content: center;
  margin: 0 50px;
`;

const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  font-weight: bold;
  color: #00bfff;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: ${({ active }) => active && "0 0 10px rgba(0, 191, 255, 0.5)"};

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 10px rgba(0, 191, 255, 0.5);
  }

  &.active {
    box-shadow: 0 0 10px rgba(0, 191, 255, 0.5);
  }
`;

const Cart = styled(Link)`
  display: flex;
  align-items: center;
`;

const CartIcon = styled.i`
  font-size: 24px;
  margin-right: 10px;
  cursor: pointer;
`;

const CartCount = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

export const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const quantity = useSelector(totalQuantity);
  const isAuthenticated = useSelector((state) => state.product.isAuthenticated);
  const user = useSelector((state) => state.product.user);
  const userName = user ? user.user_name : null; 
  const handleResetStore = () => {
    dispatch(resetStore());
  };
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginDialogOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleLoginDialogClose = () => {
    setIsLoginDialogOpen(false);
    document.body.style.overflow = "visible";
  };
  return (
    <HeaderContainer>
      <h1>Online Store</h1>
      <p onClick={handleResetStore}>reset store</p>
      <Menu>
        <MenuItem to="/" active={location.pathname === "/"}>
          Main page
        </MenuItem>
        <MenuItem to="/catalog" active={location.pathname === "/catalog"}>
          Catalog
        </MenuItem>
        <MenuItem to="/contacts" active={location.pathname === "/contacts"}>
          Contacts
        </MenuItem>
        <MenuItem to="/about" active={location.pathname === "/about"}>
          About us
        </MenuItem>
      </Menu>
      {isAuthenticated ? (
        <UserIcon userName={userName} />
      ) : (
        <LoginButton handleLoginClick={handleLoginClick} />
      )}
      <LoginDialog
        isOpen={isLoginDialogOpen}
        onClose={handleLoginDialogClose}
      />
      <Cart to="/shoppingcart">
        <div>
          <CartIcon className="fa fa-shopping-cart" />
          <CartCount>{quantity}</CartCount>
        </div>
      </Cart>
    </HeaderContainer>
  );
};
