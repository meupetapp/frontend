import React, { useState,useEffect } from 'react';
import NewEditPetForm from '@/components/NewEditPetForm';
import { PageContainer } from '@/components/FormComponents/styles';
import Link from 'next/link';
import { PageContainerComponent } from '@/components/FormComponents';
import IconComponent from '@/components/IconComponent';
import ModalComponent from '@/components/ModalComponent'; // Certifique-se de que está importando seu componente de modal
import { useRouter, } from 'next/router';
import { getPetDetail } from '@/service/petService';


  
const EditPet: React.FC = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false); // Um estado único para controlar o modal
  const { petId } = router.query; // Receber o petId da query
  const [petData, setPetData] = useState(null);

  useEffect(() => {
    if (petId) {
      getPetDetail(petId as string)
        .then((data) => setPetData(data.pet))
        .catch((error) => console.error("Erro ao buscar dados do pet:", error));
    }
  }, [petId]);
  const handleMoreClick = () => {
    setIsModalOpen(true); // Abre o modal ao clicar no ícone "More"
  };

  const closeModal = () => {
    setIsModalOpen(false); // Fecha o modal
  };
  const handleBackClick = () => {
    console.log("Back button clicked");
    console.log("petId:", petId); // Verifique se petId está definido
    if (petId) {
      router.push({
        pathname: '/Activities',
        query: { petId },
      });
    } else {
      console.error("petId is undefined");
    }
  };

  return (
    <PageContainerComponent>
      <IconComponent
   left="15px"
   top="25px"
   src="/icons/Arrow.svg"
   alt="Voltar"
   onClick={handleBackClick}
 />
      <IconComponent
        src="/icons/More.svg"
        alt="Mais opções"
        height='65px'
        width='65px'
        top='5px'
        right='15px'
        onClick={handleMoreClick} // Abre o modal
      />
   
      <NewEditPetForm pet={petData} />

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
