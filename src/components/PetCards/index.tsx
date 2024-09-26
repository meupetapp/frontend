import { useRouter } from 'next/router';
import React from 'react';
import { Card, PetImage, PetInfo, PetName, PetBreed, PetDetails, LastMeal, MealText, MealTime, IconWrapper, FlexContainer, PetInfoContainer } from './styles';
import IconComponent from '../IconComponent';
import Link from 'next/link';

const PetCards = ({ SelectIcon, pet }) => {
  const router = useRouter();

  // Função para redirecionar para a página de atividades e enviar o ID do pet
  const handlePetSelection = () => {
    console.log("Enviando petId:", pet._id);
    router.push({
      pathname: '/Activities',
      query: { petId: pet._id }, // Envia o petId para a página de atividades
    });
  };

  return (
    <Card>
      <FlexContainer>
        <PetInfoContainer>
          <PetImage src={pet.photo} alt="Pet" />
          <PetInfo>
            <PetName>{pet.name}</PetName>
            <PetBreed>{pet.breed}</PetBreed>
            <PetDetails>{pet.birthDate}</PetDetails>
          </PetInfo>
        </PetInfoContainer>

        <IconWrapper style={{ top: '10px', right: '40px' }}>
          {/* Usar onClick para enviar o petId ao clicar no botão */}
          <Link href="#" onClick={handlePetSelection}>
            <IconComponent
              src={SelectIcon}
              alt="Arrow Icon"
              width="35px"
              height="35px"
            />
          </Link>
        </IconWrapper>
      </FlexContainer>

      <LastMeal>
        <MealText>Última Refeição</MealText>
        <MealTime>12:00 por Angela Soares</MealTime>
        <IconWrapper style={{ bottom: '70px', right: '10px' }}>
          <IconComponent
            src="/icons/Refresh.svg"
            alt="Refresh Icon"
            width="20px"
            height="20px"
          />
        </IconWrapper>
      </LastMeal>
    </Card>
  );
};

export default PetCards;
