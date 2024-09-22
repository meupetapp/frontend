import React, { useState } from 'react';
import PetCards from '@/components/PetCards';
import { PageContainerComponent } from '@/components/FormComponents';
import IconComponent from '@/components/IconComponent';
import { CardWrapper } from '@/components/Cardscomponents/styles';
import ModalComponent from '@/components/ModalComponent';

const HomePage: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [showNewActivityButton, setShowNewActivityButton] = useState(true); // Controle do botão "Nova Atividade"
  const [showNewPetButton, setShowNewPetButton] = useState(true);           // Controle do botão "Novo Pet"

  const handleOpenModal = (showActivity: boolean, showPet: boolean) => {
    setShowNewActivityButton(showActivity);
    setShowNewPetButton(showPet);
    setModalOpen(true); // Abre o modal
  };

  const handleCloseModal = () => {
    setModalOpen(false); // Fecha o modal
  };

  return (
    <PageContainerComponent>
<IconComponent src="/icons/Add.svg" alt="Add" top="40px" onClick={() => handleOpenModal(true, true)}  />
      <CardWrapper>
        <PetCards SelectIcon="/icons/Select.svg" />
        <PetCards SelectIcon="/icons/Select.svg" />
        <PetCards SelectIcon="/icons/Select.svg" />
        <PetCards SelectIcon="/icons/Select.svg" />
      </CardWrapper>

      {isModalOpen && <ModalComponent closeModal={handleCloseModal} />}
    </PageContainerComponent>
  );
};

export default HomePage;
