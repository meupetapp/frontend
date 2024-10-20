import React from 'react';
import { ModalOverlay, ModalContent, CloseButton, ModalButton } from './styles'; // Estilos do modal
import Link from 'next/link';
import { useRouter } from 'next/router';

type ModalComponentProps = {
  closeModal: () => void;
  showNewActivityButton?: boolean;
  showNewPetButton?: boolean;
  manageAccess?: boolean; // Nova prop para o modal "Gerenciar Acesso"
  deletePet?: boolean;    // Nova prop para o modal "Deletar Pet"
  petId?: string;         // Nova prop para receber o ID do pet
};

const ModalComponent: React.FC<ModalComponentProps> = ({
  closeModal,
  showNewActivityButton = true,
  showNewPetButton = true,
  manageAccess = false,
  deletePet = false,
  petId
}) => {
  const router = useRouter();

  const handleManageAccessClick = () => {
    if (petId) {
      router.push({
        pathname: '/gerenciarpet',
        query: { petId }
      });
    }
  };

  return (
    <ModalOverlay>
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
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalComponent;

