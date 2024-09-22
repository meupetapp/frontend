import React from 'react';
import { CardTitle, CardDate, CardAuthor, Button, CardWrapper } from './styles';
import DropdownComponent from '../DropdownComponent';

const PetAppointmentCard = () => {
  return (
    <CardWrapper>
      <CardTitle>Consulta Veterinária de Rotina</CardTitle>
      <CardDate>6 de setembro de 2024</CardDate>
      <CardAuthor>Por Angela Soares</CardAuthor>
      <Button>Visualizar</Button>
      </CardWrapper>
  );
};

export default PetAppointmentCard;
