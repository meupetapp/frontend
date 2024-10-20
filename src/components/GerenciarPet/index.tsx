import React, { useState } from 'react';
import { FormWrapperComponent, FormContainerComponent } from "../FormComponents";
import { TitleWrapperComponent, TitleText } from "../TitleComponents";
import { PetContainer, PetHeader, PetName, PetImage, UserAvatar, IconExpand, UserList, UserItem, Role, AddAccessButton, Dropdown } from './styles';
import AccessModal from '../AcessModal';

const petsData = [
  {
    id: 1,
    name: 'Frederico',
    image: '/path/to/frederico.jpg', // Coloque o caminho correto da imagem
    users: [
      { id: 1, name: 'Rosangela', role: 'Edição', avatar: '/path/to/avatar1.jpg' },
      { id: 2, name: 'Maurício', role: 'Edição', avatar: '/path/to/avatar2.jpg' },
      { id: 3, name: 'Victor', role: 'Visualização', avatar: '/path/to/avatar3.jpg' },
    ],
  },
  {
    id: 2,
    name: 'Marlon',
    image: '/path/to/marlon.jpg',
    users: [
      { id: 4, name: 'Rosangela', role: 'Edição', avatar: '/path/to/avatar1.jpg' },
      { id: 5, name: 'Maurício', role: 'Edição', avatar: '/path/to/avatar2.jpg' },
      { id: 6, name: 'Victor', role: 'Visualização', avatar: '/path/to/avatar3.jpg' },
    ],
  },
];

const GerenciarPet: React.FC = () => {
  const [expandedPet, setExpandedPet] = useState<number | null>(null); // Para controlar qual pet está expandido
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleExpand = (petId: number) => {
    setExpandedPet(expandedPet === petId ? null : petId); // Alterna o estado de expandido ou não
  };


  const handleOpenModal = () => {
    console.log('Opening Modal');
    setIsModalOpen(true); // Abre o modal
  };

  const handleCloseModal = () => {
    console.log('Closing Modal');
    setIsModalOpen(false); // Fecha o modal
  };

  return (
    <FormWrapperComponent>
      <FormContainerComponent style={{height:'709px'}}>
        <TitleWrapperComponent>
          <TitleText>Gerenciamento</TitleText>
        </TitleWrapperComponent>

        {petsData.map((pet) => (
          <PetContainer key={pet.id}>
            <PetHeader onClick={() => toggleExpand(pet.id)}>
              <PetImage src={pet.image} />
              <PetName>{pet.name}</PetName>
              <IconExpand>
                <img
                  src={expandedPet === pet.id ? "/icons/Arrow_Select_Up.svg" : "/icons/Arrow_Select_Down.svg"}
                  alt="Expandir"
                  width="20px"
                  height="20px"
                />
              </IconExpand>
            </PetHeader>

            {expandedPet === pet.id && (
               
              <Dropdown>
                <UserList>
                  {pet.users.map((user) => (
                    <UserItem key={user.id}>
                      <UserAvatar src={user.avatar} />
                      <span>{user.name}</span>
                      <Role>{user.role}</Role>
                    </UserItem>
                  ))}
                </UserList>
                <AddAccessButton onClick={handleOpenModal}>
                  Novo Acesso
                </AddAccessButton>
              </Dropdown>
            )}
          </PetContainer>
        ))}
        {/* Renderiza o Modal se estiver aberto */}
        {isModalOpen && (
            <AccessModal closeModal={handleCloseModal} />
            // manageAccess={true} // Exibe o botão "Gerenciar Acesso" no modal
        )}
      </FormContainerComponent>
    </FormWrapperComponent>
  );
};

export default GerenciarPet;
