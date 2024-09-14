import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 18px;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 298px; /* Garante que o input use toda a largura disponível */
  padding: 8px 10px 8px 40px; /* Ajusta o padding para manter o tamanho do campo consistente */
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #C8C8A9;
  font-size: 12px; /* Ajuste o tamanho da fonte aqui */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Adiciona a sombra */
  transition: box-shadow 0.3s ease; /* Suaviza a transição ao adicionar/remover sombra */
  height:65px;
  &:focus {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Aumenta a sombra quando o input está em foco */
    outline: none; /* Remove o contorno padrão do navegador */
  }
`;

export const Icon = styled.img`
  position: absolute;
  left: 10px; /* Posiciona o ícone à esquerda */
  width: 20px;
  height: 20px;
  color: #666;
`;

export const RightIcon = styled.img`
  position: absolute;
  right: 10px; /* Alinha o ícone à direita */
  width: 20px;
  height: 20px;
  cursor: pointer; /* Faz o ícone ser clicável */
`;