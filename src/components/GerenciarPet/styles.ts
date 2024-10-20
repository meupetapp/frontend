import styled from 'styled-components';

export const PetContainer = styled.div`
  margin-bottom: 20px;
  border: 3px solid #556270;
  border-radius: 30px;
  padding: 10px;
  width: 304px;
  margin-top: 5px;
`;

export const PetHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const PetImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 15px;
  margin-right: 10px;
  border: 3px solid #556270;
//   box-shadow: 0 0 0 2px #F7EFD8;
`;

export const PetName = styled.span`
  font-size: 20px;
  font-weight: bold;
  font-family: 'Lato', sans-serif;
  color: #556270;
`;

export const IconExpand = styled.span`
  font-size: 18px;
`;

export const Dropdown = styled.div`
  background-color: #F7EFD8;
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;
`;

export const UserList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const UserItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-size: 14px;
  font-family: 'Lato', sans-serif;
  color: #556270;
`;

export const UserAvatar = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 15px;
  border: 3px solid #556270; /* Borda externa */
  box-shadow: 0 0 0 2px #F7EFD8; /* Borda interna */
  margin-right: 10px;
`;

export const Role = styled.span`
  background-color: #556270;
  padding: 5px 10px;
  border-radius: 10px;
  width: 93px;
  height: 27px;
  font-size: 14px;
  font-family: 'Lato', sans-serif;
  color: #F7EFD8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddAccessButton = styled.button`
  padding: 10px;
  font-size: 16px;
  width: 235px;
  height: 40px;
  font-family: 'Lato', sans-serif;
  color: #F7EFD8;
  background-color: #556270;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto; /* Centraliza o botão */
  transition: opacity 0.3s ease;

  &:hover {
    background-color: #2D3748;  /* Cor de fundo mais escura ao passar o mouse */
  }
`;
