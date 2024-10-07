import { CardWrapper } from "@/components/ActivityList/styles";
import { PageContainerComponent } from "@/components/Cardscomponents";
import { FormContainerComponent, FormWrapperComponent } from "@/components/FormComponents";
import { PageContainer, StyledContainer, TitleWrapper } from "@/components/FormComponents/styles";
import IconComponent from "@/components/IconComponent";
import NewPetForm from "@/components/NewPetForm";
import { H3 } from "@/components/NewPetForm/styles";
import PetCards from "@/components/PetCards";
import PetItem from "@/components/PetItem";
import { TitleText, TitleWrapperComponent } from "@/components/TitleComponents";
import { listPets } from "@/service/petService";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const UserPermission: React.FC = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    listPets()
      .then((res) => {
        setPets(res);
      })
  }, [])

  return (
    <PageContainerComponent>
      <IconComponent
        src="/icons/Logo.svg"
        alt="Logo"
        height='65px' width='65px' top='5px' right='15px'
      />
      <Link href={"/home"}>
        <IconComponent
          left='15px' top='25px'
          src="/icons/Arrow.svg"
          alt="Logo"
        />
      </Link>
      <FormWrapperComponent>
        <StyledContainer>
          <TitleWrapper>
            <H3>Gerenciamento</H3>
          </TitleWrapper>
          {pets.map((pet: any) => (
            <PetItem pet={pet} />
          ))}
        </StyledContainer>

      </FormWrapperComponent>
    </PageContainerComponent>
  )
}

export default UserPermission;
