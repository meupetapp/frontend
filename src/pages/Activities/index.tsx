import React,{useState} from 'react';
import PetCards from '@/components/PetCards';
import { PageContainerComponent } from '@/components/FormComponents';
import IconComponent from '@/components/IconComponent';
import { CardWrapper } from '@/components/Cardscomponents/styles';
import PetAppointmentCard from '@/components/ActivityList';
import DropdownComponent from '@/components/DropdownComponent';
import ModalComponent from '@/components/ModalComponent';

const ActivityPage: React.FC = () => {
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
              <IconComponent  left='15px' src="/icons/Arrow.svg" alt="Logo" />   
              <IconComponent  right='15px' src="/icons/Add.svg" alt="Logo"   onClick={() => handleOpenModal(false, true)} />   
            <CardWrapper>
                <PetCards SelectIcon="/icons/Edit.svg" />
                <DropdownComponent></DropdownComponent>
                <PetAppointmentCard></PetAppointmentCard>
                <PetAppointmentCard></PetAppointmentCard>
            </CardWrapper>
            {isModalOpen && <ModalComponent closeModal={handleCloseModal} />}
        </PageContainerComponent>
    )
}

export default ActivityPage;