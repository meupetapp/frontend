import React, { useEffect, useState } from 'react';
import PetCards from '@/components/PetCards';
import { PageContainerComponent } from '@/components/FormComponents';
import IconComponent from '@/components/IconComponent';
import { CardWrapper } from '@/components/Cardscomponents/styles';
import PetAppointmentCard from '@/components/ActivityList';
import DropdownComponent from '@/components/DropdownComponent';
import ModalComponent from '@/components/ModalComponent';
import { useRouter } from 'next/router';
import { getPetDetail } from '@/service/petService';
import Link from 'next/link';

const ActivityPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showNewActivityButton, setShowNewActivityButton] = useState(false);
  const [showNewPetButton, setShowNewPetButton] = useState(false);
  const [pet, setPet] = useState(null);
  
  const router = useRouter();
  const { petId } = router.query; // Receber o petId da query

  useEffect(() => {
    if (petId) {
      console.log("Fetching pet details for petId:", petId);
      // Chama a função para obter os detalhes do pet
      getPetDetail(petId, "66f5c2bf757103cc308f0b5e") // Certifique-se de que este ID de usuário esteja correto
        .then((res) => {
          setPet(res.pet); // Armazena os detalhes do pet no estado
        })
        .catch((error) => {
          console.error('Erro ao buscar detalhes do pet:', error);
        });
    }
  }, [petId]);

  const handleOpenModal = (showActivity: boolean, showPet: boolean) => {
    setShowNewActivityButton(showActivity);
    setShowNewPetButton(showPet);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <PageContainerComponent>
      <Link href="/home">
        <IconComponent left="15px" src="/icons/Arrow.svg" alt="Voltar" />
      </Link>
      <IconComponent right="15px" src="/icons/Add.svg" alt="Adicionar" onClick={() => handleOpenModal(true, false)} />
      
      <CardWrapper>
        {pet ? (
          <PetCards pet={pet} SelectIcon="/icons/Edit.svg" />
        ) : (
          <p>Carregando detalhes do pet...</p>
        )}

        <DropdownComponent />
        <PetAppointmentCard />
        <PetAppointmentCard />
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

export default ActivityPage;
