import React, { useEffect, useState } from 'react';
import PetCards from '@/components/PetCards';
import { PageContainerComponent } from '@/components/FormComponents';
import IconComponent from '@/components/IconComponent';
import { CardWrapper } from '@/components/Cardscomponents/styles';
import ModalComponent from '@/components/ModalComponent';
import StatusToggle from '@/components/StatusToggle';
import { GeneralActivityList } from '@/components/ActivityList';
import { listPets, getPetDetail } from '@/service/petService';

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showNewActivityButton, setShowNewActivityButton] = useState(false);
  const [showNewPetButton, setShowNewPetButton] = useState(false);
  const [petsWithActivities, setPetsWithActivities] = useState<any[]>([]);
  const [isScheduled, setIsScheduled] = useState(true); // Estado para controlar o toggle (agendada ou ocorrida)

  // Função para buscar as atividades dos pets
  const fetchPetActivities = async (pets: any[]) => {
    const petsWithActivities = await Promise.all(
      pets.map(async (pet) => {
        const petDetails = await getPetDetail(pet._id);

        // Ordenar as atividades pela data de forma decrescente (mais recentes primeiro)
        const sortedActivities = petDetails.activities
          .filter((activity: any) => !!activity.time) // Garantir que a atividade tenha uma data válida
          .sort((a: any, b: any) => new Date(b.time).getTime() - new Date(a.time).getTime());

        return {
          ...pet,
          activities: sortedActivities
        };
      })
    );
    setPetsWithActivities(petsWithActivities);
  };

  useEffect(() => {
    listPets()
      .then((res) => {
        fetchPetActivities(res);
      })
      .catch((error) => {
        console.error("Erro ao buscar os pets:", error);
      });
  }, []);

  const handleOpenModal = (showActivity: boolean, showPet: boolean) => {
    setShowNewActivityButton(showActivity);
    setShowNewPetButton(showPet);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Função para filtrar as atividades com base no estado isScheduled
  const filterAndLimitActivities = (activities: any[], isScheduled: boolean) => {
    const now = new Date();
    const filteredActivities = activities.filter(activity => {
      const activityDate = new Date(activity.time);
      return isScheduled ? activityDate > now : activityDate <= now;
    });

    return filteredActivities.slice(0, 3); // Limitar a 3 atividades
  };

  return (
    <PageContainerComponent>
      <IconComponent
        src="/icons/Add.svg"
        alt="Add"
        top="40px"
        onClick={() => handleOpenModal(true, true)}
      />

      {/* Verificar se há pets cadastrados */}
      {petsWithActivities.length === 0 ? (
        <p>Você ainda não tem pets cadastrados.</p>
      ) : (
        <CardWrapper>
          {petsWithActivities.map((pet) => (
            <div key={pet._id}>
              <PetCards pet={pet} SelectIcon="/icons/Select.svg" />
            </div>
          ))}
        </CardWrapper>
      )}

      {/* StatusToggle para alterar entre "Agendada" e "Ocorrida" */}
      <StatusToggle
        isScheduled={isScheduled}
        setIsScheduled={setIsScheduled} // Passando a função para alterar o estado
      />

      <CardWrapper style={{ marginTop: '5px' }}>
        {petsWithActivities.map((pet) => (
          <div key={pet._id}>
            {pet.activities && pet.activities.length > 0 && (
              <>
                {/* Exibir até 3 atividades agendadas */}
                {filterAndLimitActivities(pet.activities, true).length > 0 && isScheduled && (
                  <>
                    {filterAndLimitActivities(pet.activities, true).map((activity: any) => (
                      <GeneralActivityList
                        key={activity._id}
                        title={activity.title}
                        petName={pet.name}
                        date={new Date(activity.time)}
                        author={activity.author}
                        activityId={activity._id} // Passar o ID da atividade
                        petId={pet._id} // Passar o ID do pet
                        type={activity.type}
                        comments={encodeURIComponent(JSON.stringify(activity.comments))} // Passar o tipo de atividade
                        description={decodeURIComponent(activity.description)} // Decodifica aqui
                      />
                    ))}
                  </>
                )}

                {/* Exibir até 3 atividades ocorridas */}
                {filterAndLimitActivities(pet.activities, false).length > 0 && !isScheduled && (
                  <>
                    {filterAndLimitActivities(pet.activities, false).map((activity: any) => (
                       <GeneralActivityList
                       key={activity._id}
                       title={activity.title}
                       petName={pet.name}
                       date={new Date(activity.time)}
                       author={activity.author}
                       activityId={activity._id} // Passar o ID da atividade
                       petId={pet._id} // Passar o ID do pet
                       type={activity.type}
                       comments={encodeURIComponent(JSON.stringify(activity.comments))} // Passar o tipo de atividade
                       description={decodeURIComponent(activity.description)} // Decodifica aqui
                     />
                    ))}
                  </>
                )}
              </>
            )}
          </div>
        ))}
      </CardWrapper>



      {isModalOpen && (
        <ModalComponent
          closeModal={handleCloseModal}
          showNewActivityButton={showNewActivityButton}
          showNewPetButton={showNewPetButton}
        />
      )}
    </PageContainerComponent>
  );
};

export default HomePage;
