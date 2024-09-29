import React from 'react';
import { CardTitle, CardDate, CardAuthor, Button, CardWrapper } from './styles';
import DropdownComponent from '../DropdownComponent';

const PetAppointmentCard = ({title, dateTime}: { dateTime: Date; title: string}) => {
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

      {/* <CardAuthor>Por Angela Soares</CardAuthor> */}
      <Button>Visualizar</Button>
    </CardWrapper>
  );
};

export default PetAppointmentCard;
