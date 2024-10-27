import React, { useEffect } from 'react';
import { FormWrapperComponent, FormContainerComponent } from '../FormComponents';
import { TitleText, TitleWrapperComponent } from '../TitleComponents';
import { CommentContainer, CommentHeader, CommentText } from './styles';

interface Comment {
  text: string;
  userId: string;
  username: string;
  createdAt: string;
}

interface CommentsProps {
  comments: Comment[]; // Definido como um array de Comment
}

const Comments: React.FC<CommentsProps> = ({ comments = [] }) => { // Garantindo um array vazio como padrão
  
  // Usando useEffect para logar os comentários quando o componente renderiza
  useEffect(() => {
    console.log('Lista de comentários:', comments);
  }, [comments]);
  return (
    <FormWrapperComponent>
      <FormContainerComponent>
        <TitleWrapperComponent>
          <TitleText>Comentários</TitleText>
        </TitleWrapperComponent>
  
        {Array.isArray(comments) && comments.length > 0 ? ( // Verificando se comments é um array
          comments.map((comment, index) => (
            <CommentContainer key={index}>
              <CommentHeader>
                {comment.username} • {new Date(comment.createdAt).toLocaleString('pt-BR', {
                  hour: '2-digit',
                  minute: '2-digit',
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                })}
              </CommentHeader>
              <CommentText>{comment.text}</CommentText>
            </CommentContainer>
          ))
        ) : (
          <p>Sem comentários</p> // Exibe uma mensagem se não houver comentários
        )}
      </FormContainerComponent>
    </FormWrapperComponent>
  );
  
};

export default Comments;
