import React from 'react';
import { CardTitle, CardDate, Button, CardWrapper, CardAuthor, CardPet } from './styles';
import { useRouter } from 'next/router';

const PetAppointmentCard = ({ title, dateTime, activityId, petId, type, description }) => {
  const router = useRouter();

  // Função para redirecionar para a página de atividade, passando os parâmetros necessários
  const handleViewActivity = () => {
    console.log("dados:", {
      title,
      dateTime: dateTime.toISOString(),
      activityId,
      petId,
      type,
      description: encodeURIComponent(description),
    });

    router.push({
      pathname: '/newActivity',
      query: {
        mode: 'view',
        title: encodeURIComponent(title),
        dateTime: dateTime.toISOString(),
        activityId,
        petId,
        type,
        description: encodeURIComponent(description),
      },
    });
  };


  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle> {/* Exibe apenas o título */}
      <CardDate>
        {dateTime.toLocaleString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false, // Usar formato 24 horas
        })}
      </CardDate>
      <Button onClick={handleViewActivity}>Visualizar</Button> {/* O botão envia os dados */}
    </CardWrapper>
  );
};


export default PetAppointmentCard;

export const GeneralActivityList = ({ title, date, activityId, petId, type, description, petName, author }) => {
  const router = useRouter();

  // Função para redirecionar para a página de atividade, passando os parâmetros necessários
  const handleViewActivity = () => {
    console.log("dados:", {
      title,
      dateTime: date.toISOString(),
      activityId,
      petId,
      type,
      description: encodeURIComponent(description),
    });

    router.push({
      pathname: '/newActivity',
      query: {
        mode: 'view',
        title: encodeURIComponent(title),
        dateTime: date.toISOString(),
        activityId,
        petId,
        type,
        description: encodeURIComponent(description),
      },
    });
  };

  return (
    <CardWrapper onClick={handleViewActivity}> {/* Adicionando o evento de clique */}
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
      <Button onClick={handleViewActivity}>Visualizar</Button>
    </CardWrapper>
  );
};

