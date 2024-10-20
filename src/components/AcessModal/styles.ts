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
  height: 378px;
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


// Container para os botões de Role (Edição e Visualização)
export const RoleOptions = styled.div`
  display: flex; /* Para alinhar os botões lado a lado */
  width: 315px; /* Largura total dos botões juntos */
  height: 40px; /* Altura dos botões */
  gap: 5px; /* Espaçamento entre os botões */
`;


export const RoleButton = styled.button<{ selected?: boolean }>`
  flex: 1; /* Permite que os botões ocupem o mesmo espaço */
  padding: 10px 0; /* Padding ajustado para se adequar à altura */
  border-radius: 20px; /* Raio de borda para um efeito mais suave */
  border: 2px solid ${({ selected }) => (selected ? 'transparent' : '#556270')}; /* Borda se não estiver selecionado */
  background-color: ${({ selected }) => (selected ? '#556270' : '#F7EFD8')}; /* Cor de fundo */
  color: ${({ selected }) => (selected ? '#F7EFD8' : '#556270')}; /* Cor do texto */
  cursor: pointer;
  font-size: 16px;
  height: 40px; /* Altura do botão */
  margin-right: 10px; /* Espaçamento entre os botões */

  /* Efeito ao passar o mouse */
  &:hover {
    background-color: ${({ selected }) => (selected ? '#445b60' : '#eee')}; /* Um tom mais escuro para o efeito hover */
  }

  /* Remove a margem do último botão */
  &:last-child {
    margin-right: 0;
  }
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
    margin-top: 18px;
`;

export const Text = styled.span`
    width: 91px;
    height: 19px;
    font-size: 16px;
    font-family: 'Lato', sans-serif;
    color: #556270;
    text-align: center;
    white-space: nowrap; /* Impede a quebra de linha */
`;
