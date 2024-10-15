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
  const [showUserPermission, setShowUserPermission] = useState(false);
  const [pet, setPet] = useState(null);
  const [activities, setActivities] = useState([]);

  const router = useRouter();
  const { petId } = router.query; // Receber o petId da query

  useEffect(() => {
    if (petId) {
      // Chama a função para obter os detalhes do pet
      getPetDetail(petId as string)
        .then((res) => {
          setPet(res.pet);
          setActivities(res.activities);
        })
        .catch((error) => {
          console.error('Erro ao buscar detalhes do pet:', error);
        });

    }
  }, [petId]);

  useEffect(() => {
    if (!petId) {
      router.push('/home');
    }
  });

  const handleOpenModal = (showActivity: boolean, showPet: boolean, showUserPermission: boolean) => {
    setShowNewActivityButton(showActivity);
    setShowNewPetButton(showPet);
    setShowUserPermission(showUserPermission);
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
      <IconComponent right="15px" src="/icons/Add.svg" alt="Adicionar" onClick={() => handleOpenModal(true, false, true)} />

      <CardWrapper>
        {pet ? (
          <PetCards pet={pet} SelectIcon="/icons/Edit.svg" />
        ) : (
          <p>Carregando detalhes do pet...</p>
        )}
      </CardWrapper>

      <DropdownComponent />
      {
        activities.map((ac: any) => <PetAppointmentCard
          title={ac.title}
          dateTime={new Date(ac.time)}
          activityId={ac._id}
          petId={ac.petId}
          type={ac.type}
          description={ac.description}
        />)
      }

      {isModalOpen && (
        <ModalComponent
          closeModal={handleCloseModal}
          showNewActivityButton={showNewActivityButton}
          showNewPetButton={showNewPetButton}
          showUserPermission={showUserPermission}
        />
      )}
    </PageContainerComponent>
  );
};

export default ActivityPage;
