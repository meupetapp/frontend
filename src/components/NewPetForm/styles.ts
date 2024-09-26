// src/components/LoginForm/styles.ts
import styled from 'styled-components';


export const PageContainer = styled.div`
min-height: 100vh; /* Garante que o container ocupe toda a altura da viewport */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center; /* Centraliza o conteúdo horizontalmente */
background: 
linear-gradient(to bottom, 
  #C8C8A9 43%,    /* Cor superior ocupa 43% da tela */
  #C8C8A9 43.01%, /* Linha fina quase invisível (0.1% da tela) */
  #F7EFD8 43.1% 100% /* Cor inferior ocupa o restante */
);
background-size: cover; /* Faz com que a imagem cubra toda a área */
background-attachment: fixed; /* Mantém o background fixo enquanto rola */
box-sizing: border-box; /* Garante que o padding não cause overflow */
padding: 15px; /* Adiciona 15px de padding em todos os lados */
position: relative; /* Necessário para posicionar o ícone absoluto */
overflow: auto;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: url('/login-background.svg') no-repeat center center;
  background-size: cover;
  position: relative;
  box-sizing: border-box; /* Garante que o padding não cause overflow */
  padding: 15px; /* Adiciona 15px de padding em todos os lados */
`;

export const FormContainer = styled.form`
  width: 334px;
  height: 875px;
  border-radius: 30px;
  background-color: #F7EFD8;
  padding: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 200px;
  margin-bottom: 15px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7efd8; 
  border-radius: 200px 200px 0 0; /* Arredonda as bordas superiores */
  width: 60%; /* Ajuste conforme necessário para suavizar a transição */
  padding: 10px 20px; 
  margin-top: -40px; /* Aproxima o título da borda superior */
  position: relative;
  z-index: 2; /* Garante que o título esteja sobre o restante do formulário */
`;

export const H3 = styled.h3`
  margin: 0;
  padding: 0;
  color: #556270;
  font-size: 20px;
  text-align: center;
  font-family: 'Lato', sans-serif;
`;

export const Icon = styled.img`
  position: absolute; /* Posiciona o ícone de forma absoluta dentro do PageContainer */
  top: 30px; /* Distância do topo */
  right: 15px; /* Distância da esquerda */
  width: 26px; /* Ajuste o tamanho conforme necessário */
  height: 26px; /* Mantém a proporção do ícone */
`;

export const CreateButton = styled.button`
  padding: 10px;
  font-size: 20px;
  width: 145px;
  height: 50px;
  font-family: 'Lato', sans-serif;
  color: #F7EFD8;
  margin-top: 15px;
  background-color: #556270; /* Como vamos usar uma imagem, o fundo é transparente */
  border: none;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;

  &:hover {
    background-color: #2D3748;  /* Cor de fundo mais escura ao passar o mouse */
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 31px;
  display: flex;
  align-items: center;
  width: 138px; /* Garante que o input use toda a largura disponível */
  border-radius: 10px;
  background-color: #C8C8A9;
  height: 138px;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Adiciona a sombra */
  transition: box-shadow 0.3s ease; /* Suaviza a transição ao adicionar/remover sombra */
  flex-shrink: 0;
  margin-top: 31px;
`;

export const ImageIcon = styled.img`
  height: 32px;
  width: 32px;
  vertical-align: middle; /* Centraliza verticalmente em relação a elementos inline */
`;

export const Text = styled.text`
font-family: 'Lato', sans-serif;
color: #556270;
margin-left: 20px;
font-size: 14px;
`;
