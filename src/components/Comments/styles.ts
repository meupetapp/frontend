import styled from 'styled-components';

export const CommentContainer = styled.div`
    background-color: #F7EFD8;
    border: 3px solid #556270;
    border-radius: 15px; /* Bordas arredondadas */
    margin: 0 19px 19px; /* Margem superior e lateral */
    padding: 10px;
    width: 300px; /* Tamanho fixo de largura */
    height: auto; /* Altura automática para permitir expansão */
    min-height: 70px; /* Altura mínima para o bloco de comentário */
`;

export const CommentHeader = styled.p`
    color: #556270;
    font-weight: bold;
    font-size: 16px;
    margin: 0; /* Remove margem padrão */
`;

export const CommentText = styled.p`
    font-size: 16px;
    color: #556270; /* Cor azul do texto do comentário */
    margin: 5px 0 0; /* Margem apenas na parte superior */
`;
