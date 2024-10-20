import styled from "styled-components";


export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px; // Ajusted margin for better positioning
  width: 100%;
  max-width: 400px; // Adjusted width for mobile responsiveness
  font-family: 'Lato', sans-serif; // Font set as Lato

  /* Ajustes para rolagem */
  max-height: 380px; // Defina a altura máxima para a área dos cards
  overflow-y: auto;  // Ativa a rolagem vertical se necessário

  /* Opcional: Adicione padding e borda para estilizar o container */
  padding: 10px;
`;
