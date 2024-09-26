import styled from 'styled-components';

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7efd8; 
  border-radius: 200px 200px 0 0; /* Arredonda as bordas superiores */
  width: 60%; /* Ajuste conforme necessário para suavizar a transição */
  padding: 10px 20px; 
  margin-top: -35px; /* Aproxima o título da borda superior */
  position: relative;
  z-index: 2; /* Garante que o título esteja sobre o restante do formulário */
`;

export const H3 = styled.h3`
  margin: 0;
  padding: 0;
  color: #556270;
  font-size: 20px;
  text-align: center;
`;