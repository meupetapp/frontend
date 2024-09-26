import React, { useEffect, useState } from 'react';
import { Card, PetImage, PetInfo, PetName, PetBreed, PetDetails, LastMeal, MealText, MealTime, IconWrapper, FlexContainer, PetInfoContainer } from './styles';
import IconComponent from '../IconComponent';
import { listPets } from '@/Service/petService';
import Link from 'next/link';

const PetCards = ({ SelectIcon, pet }) => {
  
  return (
    <Card>
      {/* Alinhamento Horizontal da Imagem e PetInfo */}
      <FlexContainer>
        <PetInfoContainer>
          {/* Imagem do Pet */}
          <PetImage src={pet.photo} alt="Pet" />
          
          <PetInfo>
            <PetName>{pet.name}</PetName>
            <PetBreed>{pet.breed}</PetBreed>
            <PetDetails>{pet.birthDate}</PetDetails>
          </PetInfo>
          {/* Informações do Pet */}

        </PetInfoContainer>

        {/* Ícone de seta (agora dinâmico com prop) */}
        <IconWrapper style={{ top: '10px', right: '40px' }}>
        <Link href={"/Activities"}>
          <IconComponent
            src={SelectIcon}
            alt="Arrow Icon"
            width="35px"
            height="35px"
          /></Link>
        </IconWrapper>
      </FlexContainer>

      {/* Última Refeição abaixo das Informações do Pet */}
      <LastMeal>
        <MealText>Última Refeição</MealText>
        <MealTime>12:00 por Angela Soares</MealTime>

        {/* Ícone de atualização */}
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
