import React, { useState } from 'react';
import NewEditPetForm from '@/components/NewEditPetForm';
import { PageContainer } from '@/components/FormComponents/styles';
import Link from 'next/link';
import { PageContainerComponent } from '@/components/FormComponents';
import IconComponent from '@/components/IconComponent';
import ModalComponent from '@/components/ModalComponent'; // Certifique-se de que está importando seu componente de modal
import { useRouter } from 'next/router';


  
const EditPet: React.FC = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false); // Um estado único para controlar o modal
  const { petId } = router.query; // Receber o petId da query

  const handleMoreClick = () => {
    setIsModalOpen(true); // Abre o modal ao clicar no ícone "More"
  };

  const closeModal = () => {
    setIsModalOpen(false); // Fecha o modal
  };

  return (
    <PageContainerComponent>
      <IconComponent
        src="/icons/More.svg"
        alt="Mais opções"
        height='65px'
        width='65px'
        top='5px'
        right='15px'
        onClick={handleMoreClick} // Abre o modal
      />
      <Link href="/home">
        <IconComponent
          left='15px' 
          top='25px' 
          src="/icons/Arrow.svg"
          alt="Voltar"
        />
      </Link>
      <NewEditPetForm />

      {/* Modal para Gerenciar Acesso e Deletar Pet */}
      {isModalOpen && (
        <ModalComponent
          closeModal={closeModal}
          showNewActivityButton={false} // Esconde o botão de Nova Atividade
          showNewPetButton={false}      // Esconde o botão de Novo Pet
          manageAccess={true}           // Mostra a opção de Gerenciar Acesso
          deletePet={true}              // Mostra a opção de Deletar Pet
          petId={petId}                 // Passa o PetId para o Modal
        />
      )}
    </PageContainerComponent>
  );
};

export default EditPet;
