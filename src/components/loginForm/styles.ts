// src/components/LoginForm/styles.ts
import styled from 'styled-components';


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
padding: 15px; /* Adiciona 15px de padding em todos os lados */
position: relative; /* Necessário para posicionar o ícone absoluto */
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

export const Logo = styled.img`
  width: 192px; /* Ajuste o tamanho do logo conforme necessário */
  height: 192px;
  margin-top: 0px; /* Mantém o espaço desejado no topo */
`;

export const FormContainer = styled.form`
  width: 334px;
  height: 570px;
  border-radius: 30px;
  background-color: #F7EFD8;
  padding: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 45px;
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

export const InputWrapper = styled.div`
  position: relative;
  width: 298px;
  height: 65px;
  border-radius: 15px;
  background-color: #C8C8A9;
  border: none;
  padding: 10px;
  margin-bottom: 18px;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  /* Adicionando a sombra interna */
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.15);

  input {
    padding-left: 40px;
    width: 100%;
    height: 45px;
    border: none;
    background-color: #C8C8A9; /* Aqui faltava o ponto e vírgula */
    font-size: 14px;
    font-family: 'Lato', sans-serif;
    box-sizing: border-box; /* Certifique-se de que o box-sizing está definido para inputs também */
  }
`;

export const Icon = styled.img`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
`;

export const RightIcon = styled.img`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

// Botão Primário com suporte para imagem
export const EntrarButton = styled.button`
  padding: 10px;
  font-size: 20px;
  width: 145px;
  height: 50px;
  font-family: 'Lato', sans-serif;
  color: #F7EFD8;
  margin-top: 30px;
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

export const ForgotPasswordLink = styled.a`
  cursor: pointer;
  color: #556270;
  text-decoration: underline;
  margin-top: 7px;
  font-size: 12px;
  font-family: 'Lato', sans-serif;
  height: 14px;
  white-space; nowrap;
  display: inline-block;
  

  &:hover {
    color: #8a8a8a; /* Alterado para um tom mais claro de cinza para hover, se desejado */
  }
`;

// Adicione os estilos para os novos textos
export const OrText = styled.span`
  font-size: 14px;
  font-family: 'Lato', sans-serif;
  color: #556270; /* Cor desejada */
  position: absolute;
  padding: 0 10px;
  background-color: #F7EFD8;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;
export const LineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  margin-top: 33px;
`;

export const LineContainer2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  margin-top: 35px;
`;

export const Line = styled.div`
  flex: 1;
  height: 1px;
  background-color: #C8C8A9;
`;

export const EnterAsText = styled.p`
  font-size: 14px;
  font-family: 'Lato', sans-serif;
  color: #556270; /* Cor desejada */
  margin-top: 7px;
`;

export const SignUpText = styled.p`
  font-size: 14px;
  font-family: 'Lato', sans-serif;
  color: #556270; /* Cor desejada */
  margin-top: 30px;
`;

export const RedirectToCadastro = styled.b`
  cursor: pointer;
  color: #556270;
  text-decoration: underline;
  margin-top: 20px;
  font-size: 14px;

  &:hover {
    color: #0056b3;
  }
`;
export const ButtonAllign = styled.div`
  display:flex;
  gap:30px;
  margin-top:22px
`;




