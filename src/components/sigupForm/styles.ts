import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 153px;
  height: 50px;
  background-color: #556270;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s ease;
  font-size: 20px;
  font-family: 'Lato', sans-serif;
  margin-bottom:15px;
  color: #F7EFD8;
  &:hover {
    background-color: #2D3748;
  }
`;

// padding: 10px;
// font-size: 20px;
// width: 145px;
// height: 50px;
// font-family: 'Lato', sans-serif;
// color: #F7EFD8;
// margin-top: 30px;
// background-color: #556270; /* Como vamos usar uma imagem, o fundo é transparente */
// border: none;
// border-radius: 20px;
// cursor: pointer;
// display: flex;
// align-items: center;
// justify-content: center;
// transition: opacity 0.3s ease;

// &:hover {
//   background-color: #2D3748;  /* Cor de fundo mais escura ao passar o mouse */
// }
// `;

export const P = styled.p`
  text-align: center;
  color: #273142;
`;

export const LineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  margin-top: 30px;
  margin-bottom: 15px;
`;

export const Line = styled.div`
  flex: 1;
  height: 1px;
  background-color: #C8C8A9;
`;

export const Text = styled.span`
  position: absolute;
  background-color: #F7EFD8;
  padding: 0 10px;
  font-size: 12px;
  color: #273142;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const ButtonAllign = styled.div`
  display:flex;
  gap:30px;
  margin-top:25px
`;
export const Icon = styled.img`
  position: absolute; /* Posiciona o ícone de forma absoluta dentro do PageContainer */
  top: 30px; /* Distância do topo */
  right: 15px; /* Distância da esquerda */
  width: 26px; /* Ajuste o tamanho conforme necessário */
  height: 26px; /* Mantém a proporção do ícone */
`;

