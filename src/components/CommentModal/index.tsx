import React, { useState } from 'react';
import { ModalContainer, AcessIcon, ModalContent, CloseButton, AddButton, Text } from './styles';

interface CommentModalProps {
  closeModal: () => void;
  petId: string; // ID do pet para associar a permissão
}

const CommentModal: React.FC<CommentModalProps> = ({ closeModal, petId }) => {
  const [userComment, setUserComment] = useState('');

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // Evita a propagação do clique para o fundo do modal
  };

  const handleAddAccess = async () => {
    // Coloque aqui o código que será executado ao enviar o comentário
    console.log(`Comentário enviado: ${userComment}`);
  };

  return (
    <ModalContainer onClick={closeModal}>
      <ModalContent onClick={handleModalClick}>
        <CloseButton onClick={closeModal}>X</CloseButton>
        <AcessIcon src="/icons/Comment.svg" alt="Comentario" />
        <Text>Insira seu comentário abaixo</Text>
        <input
            type="text"
            placeholder="Digite aqui o seu comentário..."
            onChange={(e) => setUserComment(e.target.value)}
            value={userComment}
            style={{
                width: '315px',
                height: '80px',
                padding: '10px',
                marginTop: '0px',
                fontFamily: 'Lato, sans-serif',
                border: '3px solid #556270',  // Adicionando 'solid' para a borda
                backgroundColor: '#F7EFD8',
                borderRadius: '15px',
                fontSize: '16px',  // Removido ponto e vírgula desnecessário
                color: '#556270',
        }}
        />

        <AddButton onClick={handleAddAccess}>
          Enviar
        </AddButton>
      </ModalContent>
    </ModalContainer>
  );
};

export default CommentModal;
