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
import { getPetDetail } from "@/service/petService"; // Use a função correta para buscar um pet específico
import { useRouter } from "next/router";
import { listUserPermissionByPet } from "@/service/userPermissionService";

const GerenciarPet: React.FC = () => {
  const router = useRouter();
  const { petId } = router.query; // Obtém o petId da URL
  const [expandedPet, setExpandedPet] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [petData, setPetData] = useState<any>(null); // Armazena os dados de um pet específico
  const [userPermissions, setUserPermissions] = useState<any[]>([]);

  // Obtém os detalhes do pet específico quando o petId é fornecido
  useEffect(() => {
    if (petId) {
      getPetDetail(petId as string)
        .then((res) => {
          setPetData(res); // Armazena os dados do pet retornado
        })
        .catch((error) => {
          console.error("Erro ao obter detalhes do pet:", error);
        });
    }
  }, [petId]); // Executa o efeito sempre que o petId mudar

  // Função para listar permissões de usuários por petId
  const listUserPermissions = (petId: string) => {
    listUserPermissionByPet(petId)
      .then((res) => {
        setUserPermissions(res.userPermissions); // Armazena as permissões de usuários
      })
      .catch((error) => {
        console.error("Erro ao listar userPermissions", error);
      });
  };

  // Alterna o estado de expansão e chama a função para listar as permissões
  const toggleExpand = (petId: string) => {
    setExpandedPet(expandedPet === petId ? '' : petId);
    listUserPermissions(petId); // Certifica-se de listar as permissões ao expandir
  };

  // Abre o modal de acesso
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Fecha o modal de acesso
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <FormWrapperComponent>
      <FormContainerComponent style={{ height: "709px" }}>
        <TitleWrapperComponent>
          <TitleText>Gerenciamento</TitleText>
        </TitleWrapperComponent>

        {petData && petData.pet ? ( // Verifica se os dados do pet estão disponíveis
          <PetContainer key={petData.pet._id}>
            <PetHeader onClick={() => toggleExpand(petData.pet._id)}>
              <PetImage src={petData.pet.photo} />
              <PetName>{petData.pet.name}</PetName>
              <IconExpand>
                <img
                  src={
                    expandedPet === petData.pet._id
                      ? "/icons/Arrow_Select_Up.svg"
                      : "/icons/Arrow_Select_Down.svg"
                  }
                  alt="Expandir"
                  width="20px"
                  height="20px"
                />
              </IconExpand>
            </PetHeader>

            {expandedPet === petData.pet._id && (
              <Dropdown>
                <UserList>
                  {Array.isArray(userPermissions) && userPermissions.length > 0 ? (
                    userPermissions.map((userPermission: any) => (
                      <UserItem key={userPermission.id}>
                        <UserAvatar src={userPermission.avatar} />
                        <span>{userPermission.username}</span>
                        <Role>{userPermission.permissions[0]}</Role>
                      </UserItem>
                    ))
                  ) : (
                    <p style={{ color: "black" }}>Nenhum usuário com acesso</p>
                  )}
                </UserList>
                <AddAccessButton onClick={handleOpenModal}>
                  Novo Acesso
                </AddAccessButton>
              </Dropdown>
            )}
          </PetContainer>
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
