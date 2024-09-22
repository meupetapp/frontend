import styled from 'styled-components';


export const Card = styled.div`
  width: 365px;
  background-color: #F7EFD8;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  margin-top: 15px;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const PetImage = styled.img`
  width: 95px;
  height: 95px;
  object-fit: cover;
  border-radius: 8px;
`;

export const PetInfo = styled.div`
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Lato', sans-serif;
`;

export const PetName = styled.span`
  font-size: 22px;
  font-weight: bold;
  color: #273142;
  margin-bottom: 35px;
  font-family: 'Lato', sans-serif;
`;

export const PetBreed = styled.span`
  font-size: 14px;
  color: #273142;
  font-family: 'Lato', sans-serif;
`;

export const PetDetails = styled.span`
  font-size: 12px;
  color: #273142;
  font-family: 'Lato', sans-serif;
`;

export const LastMeal = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  border-radius: 100px;
  width: 100%;
  border: 2px solid #556270; // Borda adicionada
  font-family: 'Lato', sans-serif;
`;

// Estilo do MealText com as propriedades de tamanho e cores solicitadas
export const MealText = styled.span`
  width: 127px;
  height: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  background-color: #556270;
  color: #F7EFD8;
  border-radius: 100px;
  font-family: 'Lato', sans-serif;
`;

// Estilo do MealTime com as cores inversas de MealText
export const MealTime = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  background-color: #F7EFD8;
  color: #556270;
  border-radius: 100px;
  font-family: 'Lato', sans-serif;
  margin-left:10px
`;


// IconWrapper specifically positions the icon inside the card
export const IconWrapper = styled.div`
  position: absolute;  // This ensures that the icon is positioned relative to the card
`;
// FlexContainer substitui a div que envolvia a imagem e as informações do pet
export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// PetInfoContainer substitui a div que envolvia PetImage e PetInfo
export const PetInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;
