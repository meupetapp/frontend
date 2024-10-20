import React, { useState } from 'react';
import { ModalOverlay, ModalContent, CloseButton, ModalButton } from './styles'; // Estilos do modal
import Link from 'next/link';
import { useRouter } from 'next/router';
import CommentModal from '../CommentModal';

type ModalComponentProps = {
  closeModal: () => void;
  onAddAttachment?: () => void;
  showNewActivityButton?: boolean;
  showNewPetButton?: boolean;
  manageAccess?: boolean; 
  showUserPermission?:boolean;// Nova prop para o modal "Gerenciar Acesso"
  deletePet?: boolean;    // Nova prop para o modal "Deletar Pet"
  addImage?: boolean;
  addAnexo?: boolean;
  addComment: boolean;
  petId?: string;         // Nova prop para receber o ID do pet
};

const ModalComponent: React.FC<ModalComponentProps> = ({
  closeModal,
  onAddAttachment,
  showNewActivityButton = true,
  showNewPetButton = true,
  manageAccess = false,
  deletePet = false,
  addImage = false,
  addAnexo = false,
  addComment = false,
  petId
}) => {
  const router = useRouter();
  const [isCommentModalOpen, setCommentModalOpen] = useState(false); 

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // Verifica se o clique foi no overlay (fora do modal)
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleManageAccessClick = () => {
    if (petId) {
      router.push({
        pathname: '/gerenciarpet',
        query: { petId }
      });
    }
  };

  const handleCommentClick = () => {
    setCommentModalOpen(true); // Abre o CommentModal
  };

  const handleCloseCommentModal = () => {
    setCommentModalOpen(false); // Fecha o CommentModal
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent>
        <CloseButton onClick={closeModal}>X</CloseButton>

        {showNewActivityButton && (
          <ModalButton onClick={() => router.push('/newActivity')}>
            Nova Atividade
          </ModalButton>
        )}

        {showNewPetButton && (
          <Link href="/newpet">
            <ModalButton>Novo Pet</ModalButton>
          </Link>
        )}

        {manageAccess && (
          <ModalButton onClick={handleManageAccessClick}>
            Gerenciar Acesso
          </ModalButton>
        )}

        {deletePet && (
          <ModalButton onClick={() => console.log('Deletar Pet clicado')}>
            Deletar Pet
          </ModalButton>
        )}

        {addImage && (
           <ModalButton onClick={() => console.log('Imagem clicada')}>
            Imagem
          </ModalButton>
        )}

        {addAnexo && (
          <ModalButton onClick={onAddAttachment}>
            Anexo
          </ModalButton>
        )}

        {addComment && (
          <ModalButton onClick={handleCommentClick}>
            Comentário
          </ModalButton>
        )}
      </ModalContent>
      {isCommentModalOpen && (
        <CommentModal closeModal={handleCloseCommentModal} petId={petId || ''} />
      )}
    </ModalOverlay>
);
};

export default ModalComponent;

