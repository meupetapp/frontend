// src/components/GoogleButton/styles.ts
import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;   /* Alinha o conteúdo verticalmente */
  justify-content: center; /* Alinha o conteúdo horizontalmente */
  width: 65px;
  height: 65px;
  background-color: #4A5568;  /* Cor de fundo */
  border: none;
  border-radius: 15px;  /* Bordas levemente arredondadas */
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);  /* Sombra suave */
  transition: background-color 0.3s ease;

  img {
    width: 24px;  /* Tamanho do ícone */
    height: 24px;
    display: block;  /* Garante que o ícone se comporte como um bloco */
  }

  &:hover {
    background-color: #2D3748;  /* Cor de fundo mais escura ao passar o mouse */
  }
`;
