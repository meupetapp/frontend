import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 365px;
  background-color: #F7EFD8; /* Cor de fundo */
  border: 2px solid #556270; /* Borda arredondada */
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  margin-top:15px
`;

export const CardTitle = styled.h3`
  font-size: 22px;
  color: #556270; /* Cor do título */
  font-family: 'Lato', sans-serif;
  margin-bottom: 10px;
`;

export const CardDate = styled.p`
  font-size: 16px;
  color: #556270;
  font-family: 'Lato', sans-serif;
  margin: 5px 0;
`;
export const CardPet = styled.p`
  font-size: 18px;
  color: #556270;
  font-family: 'Lato', sans-serif;
  margin: 5px 0;
  text-align: center;
  text-decoration: underline;
  text-decoration-color: #556270;
  text-decoration-thickness: 1px;
  text-underline-offset: 3px; /* Adiciona um espaço maior entre o texto e o sublinhado */
   font-weight: bold;
`;


export const CardAuthor = styled.p`
  font-size: 14px;
  color: #556270;
  font-family: 'Lato', sans-serif;
`;

export const Button = styled.button`
  width: 331px; /* Largura do botão */
  height: 50px; /* Altura do botão */
  background-color: #556270; /* Cor de fundo do botão */
  color: #F7EFD8; /* Cor do texto do botão */
  font-size: 14px;
  font-family: 'Lato', sans-serif;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center; /* Centraliza o texto vertical e horizontalmente */

  &:hover {
    background-color: #F7EFD8;
    color: #556270;
    border: 1px solid #556270;
  }
`;

