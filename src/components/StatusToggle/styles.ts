import styled from 'styled-components';

export const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #556270; /* Cor da borda ajustada */
  border-radius: 25px;
  overflow: hidden;
  background-color: #f0e6d6;
  width: 300px;  /* Tamanho do componente */
  margin-top: 30px;
`;

export const ToggleButton = styled.button<{ active: boolean }>`
  background-color: ${({ active }) => (active ? '#5d657a' : '#f0e6d6')};
  color: ${({ active }) => (active ? '#fff' : '#5d657a')};
  border: none; /* Removendo a borda do botão individual */
  padding: 10px 20px;
  flex: 1;
  cursor: pointer;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:focus {
    outline: none;
  }

  &:first-child {
    border-right: 1px solid #556270; /* Linha entre os botões */
  }
`;
