import React, { useState, useEffect } from "react";
import {
  FormWrapperComponent,
  FormContainerComponent,
} from "../FormComponents";
import { TitleWrapperComponent, TitleText } from "../TitleComponents";
import {
  PetContainer,
  PetHeader,
  PetName,
  PetImage,
  UserAvatar,
  IconExpand,
  UserList,
  UserItem,
  Role,
  AddAccessButton,
  Dropdown,
} from "./styles";
import AccessModal from "../AcessModal";
import { listPets } from "@/service/petService"; // Certifique-se de que o caminho está correto
import { useRouter } from "next/router";
import { listUserPermissionByPet } from "@/service/userPermissionService";

const GerenciarPet: React.FC = () => {
  const router = useRouter();
  const { petId } = router.query; // Obtém o petId da URL
  const [expandedPet, setExpandedPet] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [petsData, setPets] = useState<any[]>([]); // Armazena os dados dos pets
  useEffect(() => {
    listPets()
      .then((res) => {
        setPets(res);
      })
      .catch((error) => {
        console.error("Erro ao listar pets:", error);
      });
  }, []);

  const [userPermissions, setUserPermissions] = useState<any[]>([]);

  const listUserPermissions = (petId: string) => {
    listUserPermissionByPet(petId)
      .then((res) => {
        setUserPermissions(res.userPermissions);
      })
      .catch((error) => {
        console.error("Erro ao listar userPermissions", error);
      });
  };

  const toggleExpand = (petId: string) => {
    console.log('@petid', petId)
    setExpandedPet(expandedPet === petId ? '' : petId);
    listUserPermissions(petId)
  };

  const handleOpenModal = () => {
    console.log("id=", petId), setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <FormWrapperComponent>
      <FormContainerComponent style={{ height: "709px" }}>
        <TitleWrapperComponent>
          <TitleText>Gerenciamento</TitleText>
        </TitleWrapperComponent>
        {/* <button onClick={ () => console.log(expandedPet, user)}>teste</button> */}

        {petsData.length > 0 ? (
          petsData.map((pet) => (
            <PetContainer key={pet.id}>
              <PetHeader onClick={() => toggleExpand(pet._id)}>
                <PetImage src={pet.photo} />
                <PetName>{pet.name}</PetName>
                <IconExpand>
                  <img
                    src={
                      expandedPet === pet._id
                        ? "/icons/Arrow_Select_Up.svg"
                        : "/icons/Arrow_Select_Down.svg"
                    }
                    alt="Expandir"
                    width="20px"
                    height="20px"
                  />
                </IconExpand>
              </PetHeader>

              {expandedPet === pet._id && (
                <Dropdown>
                  <UserList>
                    {Array.isArray(userPermissions) && userPermissions.length > 0 ? ( // Verificação se "users" é um array válido
                      userPermissions.map((userPermission: any) => (
                        <UserItem key={userPermission.id}>
                          <UserAvatar src={userPermission.avatar} />
                          <span>{userPermission.username}</span>
                          <Role>{userPermission.permissions[0]}</Role>
                        </UserItem>
                      ))
                    ) : (
                      <p>Nenhum usuário com acesso</p> // Mensagem caso não haja usuários
                    )}
                  </UserList>
                  <AddAccessButton onClick={handleOpenModal}>
                    Novo Acesso
                  </AddAccessButton>
                </Dropdown>
              )}
            </PetContainer>
          ))
        ) : (
          <p>Nenhum pet encontrado</p>
        )}

        {isModalOpen && (
          <AccessModal petId={petId as string} closeModal={handleCloseModal} />
        )}
      </FormContainerComponent>
    </FormWrapperComponent>
  );
};

export default GerenciarPet;
