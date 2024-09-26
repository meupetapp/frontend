import React from 'react';
import { ModalOverlay, ModalContent, CloseButton, ModalButton } from './styles'; // Estilos do modal
import Link from 'next/link';
type ModalComponentProps = {
  closeModal: () => void;
  showNewActivityButton?: boolean; // Prop opcional para mostrar o botão de Nova Atividade
  showNewPetButton?: boolean;      // Prop opcional para mostrar o botão de Novo Pet
};

const ModalComponent: React.FC<ModalComponentProps> = ({ closeModal, showNewActivityButton = true, showNewPetButton = true }) => {
  console.log('showNewActivityButton:', showNewActivityButton);
console.log('showNewPetButton:', showNewPetButton);
  return (
    
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={closeModal}>X</CloseButton>
        
        {showNewActivityButton && ( 
  
        <ModalButton onClick={() => console.log('Nova Atividade clicada')}>Nova Atividade</ModalButton>

        )}
        
        {showNewPetButton && (
        <ModalButton onClick={() => console.log('Novo Pet clicado')}>Novo Pet</ModalButton>
        )}
        
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalComponent;
