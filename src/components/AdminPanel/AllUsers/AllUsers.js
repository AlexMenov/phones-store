import styled from "styled-components";

const UserListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const UserCard = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin: 16px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid tomato;
`;

const UserID = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const UserName = styled.p`
  font-size: 16px;
  margin-bottom: 8px;
`;

const UserMail = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const UserPhone = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const UserAddress = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const AllUsers = ({ users }) => {
  return (
    <UserListContainer>
      {users.map((user) => (
        <UserCard key={users.user_mail}>
          <UserID>id: {user.user_id}</UserID>
          <UserName>name: {user.user_name}</UserName>
          <UserMail>email: {user.user_mail}</UserMail>
          <UserPhone>phone: {user.user_telefon}</UserPhone>
          <UserAddress>address: {user.user_address}</UserAddress>
        </UserCard>
      ))}
    </UserListContainer>
  );
};