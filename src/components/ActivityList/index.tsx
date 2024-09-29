import React from 'react';
import { CardTitle, CardDate, CardAuthor, Button, CardWrapper } from './styles';
import DropdownComponent from '../DropdownComponent';

const PetAppointmentCard = ({title, dateTime}: { dateTime: Date; title: string}) => {
  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
      <CardDate>{dateTime.toTimeString()}</CardDate>
      {/* <CardAuthor>Por Angela Soares</CardAuthor> */}
      <Button>Visualizar</Button>
    </CardWrapper>
  );
};

export default PetAppointmentCard;
