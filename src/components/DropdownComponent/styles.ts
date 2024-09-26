import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-top: 30px;
  margin-bottom: 20px; /* Ajusta a posição em relação ao card */
  width: 331px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra suave */
`;

export const Dropdown = styled.select`
  width: 100%;
  height: 50px;
  background-color: #556270; /* Cor de fundo do dropdown */
  color: #F7EFD8; /* Cor do texto */
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  padding: 10px;
  padding-right: 40px; /* Espaço extra para a seta */
  appearance: none; /* Remove a aparência padrão do dropdown */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Adiciona sombra ao dropdown */
  cursor: pointer;
  position: relative;
  
  /* Seta customizada */
  background-image: url('/icons/Caret-Down.svg'); /* Caminho para a imagem da seta */
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 16px; /* Tamanho da seta */

  /* Remove a seta padrão no IE */
  &::-ms-expand {
    display: none;
  }
`;
