import React, { useEffect, useState } from 'react';
import PetCards from '@/components/PetCards';
import { PageContainerComponent } from '@/components/FormComponents';
import IconComponent from '@/components/IconComponent';
import { CardWrapper } from '@/components/Cardscomponents/styles';
import ModalComponent from '@/components/ModalComponent';
import { listPets } from '@/Service/petService';


const HomePage: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [showNewActivityButton, setShowNewActivityButton] = useState(true); // Controle do botão "Nova Atividade"
  const [showNewPetButton, setShowNewPetButton] = useState(true);           // Controle do botão "Novo Pet"
  const [pets, setPets] = useState([]);
  useEffect(() => {
    listPets("66f07ad216db41cd041ad705")
      .then((res) => {
        console.log('@pets ->', res)
        setPets(res);
      })
  }, [])
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
        {pets.map((pet) => (
          <PetCards pet={pet} SelectIcon="/icons/Select.svg" />
        ))}
      </CardWrapper>

      {isModalOpen && <ModalComponent closeModal={handleCloseModal} />}
    </PageContainerComponent>
  );
};

export default HomePage;
