import React from 'react';
import { Card,PetImage, PetInfo, PetName, PetBreed, PetDetails, LastMeal, MealText, MealTime, IconWrapper, FlexContainer, PetInfoContainer } from './styles';
import IconComponent from '../IconComponent';

const PetCards = ({ SelectIcon }) => {
  return (
      <Card>
        {/* Alinhamento Horizontal da Imagem e PetInfo */}
        <FlexContainer>
          <PetInfoContainer>
            {/* Imagem do Pet */}
            <PetImage src="/images/dog.png" alt="Pet" />
            
            {/* Informações do Pet */}
            <PetInfo>
              <PetName>Marlon</PetName>
              <PetBreed>Golden Retriever</PetBreed>
              <PetDetails>6 meses</PetDetails>
            </PetInfo>
          </PetInfoContainer>
          
          {/* Ícone de seta (agora dinâmico com prop) */}
          <IconWrapper style={{top: '10px', right: '40px'}}>
            <IconComponent 
              src={SelectIcon} 
              alt="Arrow Icon" 
              width="35px"
              height="35px"
            />
          </IconWrapper>
        </FlexContainer>
        
        {/* Última Refeição abaixo das Informações do Pet */}
        <LastMeal>
          <MealText>Última Refeição</MealText>
          <MealTime>12:00 por Angela Soares</MealTime>

          {/* Ícone de atualização */}
          <IconWrapper style={{bottom: '70px', right: '10px'}}>
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
