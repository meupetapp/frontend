// components/FormComponents/styles.ts
import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 75px;
  width: 100%;
  max-width: 600px;
`;

export const PageContainer = styled.div`
  min-height: 100vh; /* Agora ocupa toda a altura da tela */
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    to bottom, 
    #C8C8A9 43%, 
    #C8C8A9 43.01%, 
    #F7EFD8 43.1% 100%
  );
  background-size: cover;
  box-sizing: border-box;
  position: relative;
`;


export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: calc(100% - 30px);
  max-width: 600px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f7efd8;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
  position: relative;
  z-index: 1;
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

export const GreenPageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #C8C8A9; /* Fundo verde */
  background-size: cover;
  box-sizing: border-box;
  position: relative;
`;