import styled from 'styled-components';

// Container para a data e o dropdown do pet na mesma linha
export const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 15px;
`;

// Título com 28px e negrito, sem borda
export const TitleInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 28px;
  font-weight: bold;
  border: none;
  background-color: transparent;
  color: #556270;
  font-family: 'Lato', sans-serif;

  &::placeholder {
    color: #556270;
  }

  &:focus {
    outline: none; /* Remove borda ao focar */
  }
`;

// Data com 16px e regular, sem borda, placeholder "Data"
export const DateInput = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  font-weight: normal;
  border: none;
  background-color: transparent;
  color: #556270;
  font-family: 'Lato', sans-serif;

  &::placeholder {
    color: #556270;
  }

  &:focus {
    outline: none; /* Remove borda ao focar */
  }
`;

// Nome do Pet com background transparente, cor #556270, sem borda, como Dropdown
export const PetDropdown = styled.select`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  font-weight: normal;
  border: none;
  background-color: transparent;
  color: #556270;
  font-family: 'Lato', sans-serif;

  &:focus {
    outline: none; /* Remove borda ao focar */
  }
`;

// Tipo de Atividade com background #556270, cor de texto #F7EFD8, 16px negrito, 45px de altura e bordas arredondadas
export const ActivityTypeDropdown = styled.select`
  width: 100%;
  padding: 10px;
  height: 45px; /* Altura de 45px */
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: bold;
  background-color: #556270;
  color: #F7EFD8;
  border: none;
  border-radius: 10px; /* Bordas arredondadas */
  font-family: 'Lato', sans-serif;

  &:focus {
    outline: none; /* Remove borda ao focar */
  }
`;

// Descrição com 20px regular, sem borda, altura fixa de 180px, e redimensionamento desabilitado
export const DescriptionInput = styled.textarea`
  width: 100%;
  padding: 10px;
  height: 180px; /* Altura fixa de 180px */
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: normal;
  border: none;
  background-color: transparent;
  color: #556270;
  font-family: 'Lato', sans-serif;
  resize: none; /* Remove a possibilidade de redimensionar */

  &::placeholder {
    color: #556270;
  }

  &:focus {
    outline: none; /* Remove borda ao focar */
  }
`;

// Container para os blocos de anexo
export const AttachmentContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Permite que os blocos se movam para uma nova linha */
  gap: 10px; /* Espaçamento entre os blocos */
  margin-bottom: 15px; /* Espaçamento abaixo do container */
  max-width: calc(127px * 3 + 20px); /* Largura máxima para 3 blocos + espaçamento */
  width: 100%; /* Para garantir que o contêiner utilize a largura total */
  overflow: hidden; /* Esconde qualquer bloco que não couber */
`;

// Estilo para cada bloco de anexo
export const AttachmentBlock = styled.div`
  background-color: #556270; /* Cor azul */
  border-radius: 15px; /* Bordas arredondadas */
  width: 127px; /* Largura dos blocos */
  height: 127px; /* Altura dos blocos */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #F7EFD8; /* Cor do texto */
  font-family: 'Lato', sans-serif;
  font-size: 14px; /* Tamanho da fonte */
  text-align: center;
`;
