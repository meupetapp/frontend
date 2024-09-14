import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: calc(100% - 30px); 
  max-width: 600px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 10px; /* Arredonda as bordas inferiores do formulário */
  background-color: #f7efd8;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
  position: relative;
  z-index: 1; /* Mantém o formulário abaixo do título */
`;


export const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    border-color: #0070f3;
    outline: none;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 153px;
  height: 50px;
  background-color: #4A5568;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  margin-bottom:15px;
  &:hover {
    background-color: #2D3748;
  }
`;

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

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 75px; /* Espaçamento abaixo do ícone para o formulário */
  width: 100%;
  max-width: 600px; /* Largura máxima do formulário, ajustável conforme necessário */
`;

export const PageContainer = styled.div`
height: 100vh; /* Garante que o container ocupe toda a altura da viewport */
display: flex;
flex-direction: column;
align-items: center; /* Centraliza o conteúdo horizontalmente */
background: 
linear-gradient(to bottom, 
  #C8C8A9 43%,    /* Cor superior ocupa 43% da tela */
  #C8C8A9 43.01%, /* Linha fina quase invisível (0.1% da tela) */
  #F7EFD8 43.1% 100% /* Cor inferior ocupa o restante */
);
background-size: cover; /* Faz com que a imagem cubra toda a área */
box-sizing: border-box; /* Garante que o padding não cause overflow */
position: relative; /* Necessário para posicionar o ícone absoluto */
`;
