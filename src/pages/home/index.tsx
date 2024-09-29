import React, { useEffect, useState } from 'react';
import PetCards from '@/components/PetCards';
import { PageContainerComponent } from '@/components/FormComponents';
import IconComponent from '@/components/IconComponent';
import { CardWrapper } from '@/components/Cardscomponents/styles';
import ModalComponent from '@/components/ModalComponent';
import { cookies } from 'next/headers';
import { listPets } from '@/service/petService';


const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showNewActivityButton, setShowNewActivityButton] = useState(false); // Iniciar como false
  const [showNewPetButton, setShowNewPetButton] = useState(false); // Iniciar como false
  const [pets, setPets] = useState([]);

  useEffect(() => {
    listPets()
      .then((res) => {
        setPets(res);
      })
  }, [])


  const handleOpenModal = (showActivity: boolean, showPet: boolean) => {
    setShowNewActivityButton(showActivity); // Atualizar estado corretamente
    setShowNewPetButton(showPet);           // Atualizar estado corretamente
    setIsModalOpen(true);                   // Abrir o modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);                  // Fechar o modal
  };

  return (
    <PageContainerComponent>
      <IconComponent
        src="/icons/Add.svg"
        alt="Add"
        top="40px"
        onClick={() => handleOpenModal(true, true)}  // Apenas "Novo Pet"
      />
      <CardWrapper>
        {pets.map((pet) => (
          <PetCards pet={pet} SelectIcon="/icons/Select.svg" />
        ))}
      </CardWrapper>

      {isModalOpen && (
        <ModalComponent
          closeModal={handleCloseModal}
          showNewActivityButton={showNewActivityButton}
          showNewPetButton={showNewPetButton}
        />
      )}
    </PageContainerComponent>
  );
};

export default HomePage;
