import styled from 'styled-components';

// Container principal do modal
export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5); // Fundo semi-transparente
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// Conteúdo do modal
export const ModalContent = styled.div`
  background: #F7EFD8;
  padding: 20px;
  border-radius: 8px;
  width: 353px;
  height: 335px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  align-items: center; /* Centraliza horizontalmente */
  justify-content: center; /* Centraliza verticalmente */
`;

// Botão de fechar
export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #333;
`;

// Botão para adicionar usuário
export const AddButton = styled.button`
  padding: 10px;
  background-color: #C8C8A9;
  color: #F7EFD8;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  width: 145px;
  height: 50px;
  font-weight: bold;
  font-family: 'Lato', sans-serif;

  &:hover {
    background-color: #556270;
  }
`;
 
export const AcessIcon = styled.img`
    width: 90px;
    height: 90px;
    margin-top: 0px;
    display: flex;
`;

export const Text = styled.span`
    width: 100%;
    height: 19px;
    font-size: 16px;
    font-family: 'Lato', sans-serif;
    color: #556270;
    text-align: center;
    white-space: nowrap; /* Impede a quebra de linha */
    margin-top: 7px;
`;
