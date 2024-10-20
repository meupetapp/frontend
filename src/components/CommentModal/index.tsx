import React, { useState } from 'react';
import { ModalContainer, AcessIcon, ModalContent, CloseButton, AddButton, Text } from './styles';
import { useRouter } from 'next/router';
import { createComment } from '@/service/activityService';
interface CommentModalProps {
  closeModal: () => void;
  petId: string; // ID do pet para associar a permissão
}

const CommentModal: React.FC<CommentModalProps> = ({ closeModal, petId }) => {
  const router = useRouter();
  const [userComment, setUserComment] = useState('');
  const { activityId } = router.query;

  // Verifica se o activityId é uma string e a utiliza
  const id = typeof activityId === 'string' ? activityId : null;
  
  console.log("id de atividade",id); // Saída: 

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // Evita a propagação do clique para o fundo do modal
  };

  const handleAddAccess = async () => {
    if (!id) {
      console.error("ID da atividade não encontrado.");
      return;
    }

    try {
      // Chama a função createComment para enviar o comentário
      const response = await createComment(userComment, id);
      console.log("Comentário enviado com sucesso:", response);
      
      // Limpa o comentário e fecha o modal
      setUserComment('');
      closeModal();
      
      // Opcional: redirecionar ou atualizar os dados após o comentário ser enviado
    } catch (error) {
      console.error("Erro ao enviar o comentário:", error);
    }
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
