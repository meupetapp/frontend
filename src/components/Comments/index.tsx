import React from 'react';
import { FormWrapperComponent, FormContainerComponent } from '../FormComponents';
import { TitleText, TitleWrapperComponent } from '../TitleComponents';
import { CommentContainer, CommentHeader, CommentText } from './styles'; // Importando os estilos

const Comments: React.FC = () => {
    return (
        <FormWrapperComponent>
            <FormContainerComponent>
                <TitleWrapperComponent>
                    <TitleText>Comentários</TitleText>
                </TitleWrapperComponent>

                {/* Exemplos de comentários */}
                <CommentContainer>
                    <CommentHeader>Rosângela • 3 horas atrás</CommentHeader> //Aqui passaria o nome do user e quando ele enviou a mensagem
                    <CommentText>Coitadinho do Marlon! 😢💔</CommentText> //Aqui passaria o que ele escreveu no modal
                </CommentContainer>
                
                <CommentContainer>
                    <CommentHeader>Maurício • 2 horas atrás</CommentHeader>
                    <CommentText>👍</CommentText>
                </CommentContainer>

                {/* Adicione mais <CommentContainer> conforme necessário */}
            </FormContainerComponent>
        </FormWrapperComponent>
    );
};

export default Comments;
