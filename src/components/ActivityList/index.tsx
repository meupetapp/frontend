import React from 'react';
import { CardTitle, CardDate, CardAuthor, Button, CardWrapper,CardPet } from './styles';



const PetAppointmentCard = ({ title, dateTime }: { dateTime: Date; title: string }) => {
  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
      <CardDate>
        {dateTime.toLocaleString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false // Usar formato 24 horas
        })}
      </CardDate>
      <Button>Visualizar</Button>
    </CardWrapper>
  );
};

export default PetAppointmentCard;

export const GeneralActivityList = ({ title, petName, date, author }: { title: string; petName: string; date: Date; author: string }) => {
  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
      <CardPet>{petName}</CardPet>
      <CardDate>
        {new Date(date).toLocaleString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',

        })}
      </CardDate>
      <CardAuthor>por {author}</CardAuthor>
      <Button>Visualizar</Button>
    </CardWrapper>
  );
};


