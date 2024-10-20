import { useRouter } from 'next/router';
import React from 'react';
import {
  Card, PetImage, PetInfo, PetName, PetBreed, PetDetails, LastMeal, MealText, MealTime, IconWrapper, FlexContainer, PetInfoContainer
} from './styles';
import IconComponent from '../IconComponent';

const PetCards = ({ pet, isEditPage, onEditClick }) => {
  const router = useRouter();

  // Função para calcular a idade do pet em anos e meses
  const calculateAge = (birthDate: string | number | Date) => {
    const birth = new Date(birthDate);
    const today = new Date();
    
    let ageInYears = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();
    let ageInMonths = monthDifference < 0 ? 12 + monthDifference : monthDifference;

    if (monthDifference < 0) {
      ageInYears--;
    }

    return { years: ageInYears, months: ageInMonths };
  };

  // Função para redirecionar para a página de atividades e enviar o ID do pet
  const handlePetSelection = () => {
    console.log("Enviando petId:", pet._id);
    router.push({
      pathname: '/Activities',
      query: { petId: pet._id },
    });
  };

  // Calcula a idade
  const age = calculateAge(pet.birthDate);

  return (
    <Card>
      <FlexContainer>
        <PetInfoContainer>
          <PetImage src={pet.photo} alt="Pet" />
          <PetInfo>
            <PetName>{pet.name}</PetName>
            <PetBreed>{pet.breed}</PetBreed>
            {/* Exibindo a idade em anos e meses */}
            <PetDetails>{age.years} anos e {age.months} meses</PetDetails>
          </PetInfo>
        </PetInfoContainer>

        <IconWrapper style={{ top: '10px', right: '40px' }}>
          {isEditPage ? (
            <div onClick={onEditClick}>
              <IconComponent
                src="/icons/Edit.svg" // Ícone de edição para a página de edição
                alt="Edit Icon"
                width="35px"
                height="35px"
              />
            </div>
          ) : (
            <div onClick={handlePetSelection}>
              <IconComponent
                src="/icons/Select.svg" // Ícone de seleção para outras páginas
                alt="Select Icon"
                width="35px"
                height="35px"
              />
            </div>
          )}
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
