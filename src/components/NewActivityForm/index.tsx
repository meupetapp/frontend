import React, { useEffect, useState } from 'react';
import { TitleInput, DateInput, PetDropdown, ActivityTypeDropdown, DescriptionInput, InputRow, AttachmentContainer, AttachmentBlock, FormContainer } from './styles';
import IconComponent from '@/components/IconComponent'; // Importando o componente de ícone
import { getUserIdFromCookies, listPets } from '@/service/petService';
import { Button } from '../ActivityList/styles';
import { createActivity } from '@/service/activityService';

const NewActivityForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [pets, setPets] = useState<any[]>([]);
  const [petId, setPetId] = useState(pets.length > 0 ? pets[0]._id : '');
  const [type, setType] = useState(''); // category
  const [description, setDescription] = useState('');
  const [attachments, setAttachments] = useState<string[]>([]);

  // Função para adicionar um novo anexo
  const addAttachment = () => {
    setAttachments([...attachments, `Anexo ${attachments.length + 1}`]);
  };

  const handleSubmit = () => {
    console.log(`title: ${title}\n date: ${time}\npetName: ${petId}\n category: ${type}\n description: ${description} `);
    const body = {
      title,
      time: new Date(time),
      petId,
      type,
      description
    };

    createActivity(body).then((res) => {
      console.log('Atividade criada:', res);
    });

  }


  useEffect(() => {
    listPets().then((pets) => {
      console.log(pets);
      setPets(pets);
      if (pets.length > 0) {
        setPetId(pets[0]._id); // Defina o primeiro pet assim que carregar
      }
    }
    );
  }, [])

  return (
    <FormContainer style={{ display: 'flex' }}>
      <TitleInput
        placeholder="Título..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <InputRow>
        <DateInput
          type="datetime-local"
          placeholder="Data"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <PetDropdown
          value={petId}
          onChange={(e) => {
            setPetId(e.target.value);
          }}
        >
          {pets.map((pet) => (
            <option key={pet._id} value={pet._id}>
              {pet.name}
            </option>
          ))}
        </PetDropdown>
      </InputRow>

      <AttachmentContainer>
        {attachments.map((attachment, index) => (
          <AttachmentBlock key={index}>
            {attachment}
          </AttachmentBlock>
        ))}
      </AttachmentContainer>

      <ActivityTypeDropdown
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="">Tipo de Atividade</option>
        <option value="food">Alimentação</option>
        <option value="health">Saúde</option>
        <option value="aesthetics">Estética</option>
        <option value="routine">Rotina</option>
      </ActivityTypeDropdown>
      <DescriptionInput
        placeholder="Descrição..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button
        onClick={handleSubmit}
      >
        Adicionar Atividade
      </Button>
      {/* Botão para adicionar anexo */}
      <IconComponent src="/icons/Add.svg" alt="Adicionar Anexo" onClick={addAttachment} />
    </FormContainer>
  );
};

export default NewActivityForm;
