import styled from 'styled-components';

// Overlay para o modal
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); // Cor de fundo do overlay
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// Conteúdo do modal
export const ModalContent = styled.div`
  background-color: #F7EFD8; // Cor de fundo do modal
  border: 2px solid #556270;
  border-radius: 8px;
  padding: 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 15px; /* Espaçamento entre os botões */
  align-items: center;
  position: relative;
`;

// Botão de fechar o modal
export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

// Botões do modal
export const ModalButton = styled.button`
  width: 200px;
  padding: 10px;
  background-color: #F7EFD8;
  color: #556270;
  font-size: 16px;
  border: 2px solid #556270;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #556270;
    color: #F7EFD8;
  }
`;
