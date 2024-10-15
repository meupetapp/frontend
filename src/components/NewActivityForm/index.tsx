import React, { useEffect, useState } from 'react';
import { TitleInput, DateInput, PetDropdown, ActivityTypeDropdown, DescriptionInput, InputRow, AttachmentContainer, AttachmentBlock, FormContainer } from './styles';
import { listPets } from '@/service/petService';
import { Button } from '../ActivityList/styles';
import { createActivity } from '@/service/activityService';
import { useRouter } from 'next/router';

interface NewActivityFormProps {
  isViewMode?: boolean; // Adicionando prop para View Mode
  activityData?: any; // Dados para pré-popular os campos no modo de visualização
}

const NewActivityForm: React.FC<NewActivityFormProps> = ({ isViewMode = false, activityData }) => {
  const [title, setTitle] = useState(activityData?.title || '');
  const [time, setTime] = useState(activityData?.time ? new Date(activityData.time).toISOString().slice(0, 16) : '');
  const [pets, setPets] = useState<any[]>([]);
  const [petId, setPetId] = useState(activityData?.petId || '');
  const [type, setType] = useState(activityData?.type || '');
  const [description, setDescription] = useState(activityData?.description || '');
  const [attachments, setAttachments] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (activityData) {
      setTitle(activityData.title || '');
      setTime(activityData.time ? new Date(activityData.time).toISOString().slice(0, 16) : '');
      setPetId(activityData.petId || '');
      setType(activityData.type || '');
      // Decodifica a descrição antes de definir no estado
      setDescription(decodeURIComponent(activityData.description || ''));
    }
  }, [activityData]);
  

  const addAttachment = () => {
    setAttachments([...attachments, `Anexo ${attachments.length + 1}`]);
  };

  const handleSubmit = async () => {
    if (!title || !time || !petId || !type || !description) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const body = {
      title,
      time: new Date(time),
      petId,
      type,
      description,
    };

    try {
      const res = await createActivity(body);
      console.log('Atividade criada:', res);
      alert('Atividade criada com sucesso!');
      router.push('/home');
    } catch (error: any) {
      console.error('Erro ao criar a atividade:', error);
      alert(`Erro ao criar a atividade: ${error.response?.data?.error || 'Erro desconhecido'}`);
    }
  };

  useEffect(() => {
    listPets().then((pets) => {
      setPets(pets);
      // Se houver um petId vindo dos dados da atividade, usá-lo
      if (activityData?.petId) {
        setPetId(activityData.petId);
      } else if (pets.length > 0) {
        // Se não houver petId, mas houver pets na lista, usa o primeiro pet
        setPetId(pets[0]._id);
      }
    });
  }, [activityData]); // Observe que agora o useEffect depende de activityData também
  

  return (
    <FormContainer style={{ display: 'flex' }}>
      <TitleInput
        placeholder="Título..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        readOnly={isViewMode} // readOnly para View Mode
      />
      <InputRow>
        <DateInput
          type="datetime-local"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          readOnly={isViewMode}
        />
        <PetDropdown
          value={petId}
          onChange={(e) => setPetId(e.target.value)}
          disabled={isViewMode} // Disable no dropdown para View Mode
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
          <AttachmentBlock key={index}>{attachment}</AttachmentBlock>
        ))}
      </AttachmentContainer>

      <ActivityTypeDropdown
        value={type}
        onChange={(e) => setType(e.target.value)}
        disabled={isViewMode} // Disable no dropdown para View Mode
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
        required
        readOnly={isViewMode} // readOnly para View Mode
      />

      {!isViewMode && ( // Só mostra o botão se não estiver no modo de visualização
        <Button onClick={handleSubmit}>
          Adicionar Atividade
        </Button>
      )}
    </FormContainer>
  );
};

export default NewActivityForm;
