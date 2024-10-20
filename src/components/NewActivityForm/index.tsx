import React, { useEffect, useState } from 'react';
import { TitleInput, DateInput, PetDropdown, ActivityTypeDropdown, DescriptionInput, InputRow, AttachmentContainer, AttachmentBlock, FormContainer } from './styles';
import IconComponent from '@/components/IconComponent'; // Importando o componente de ícone
import { listPets } from '@/service/petService';
import { Button } from '../ActivityList/styles';
import { createActivity } from '@/service/activityService';
import { useRouter } from 'next/router'; 
import ModalComponent from '@/components/ModalComponent'; // Importando o modal

const NewActivityForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [pets, setPets] = useState<any[]>([]);
  const [petId, setPetId] = useState(pets.length > 0 ? pets[0]._id : '');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [attachments, setAttachments] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar a visibilidade do modal
  const router = useRouter();

  // Função para adicionar um novo anexo
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
      description
    };
  
    try {
      const res = await createActivity(body);
      console.log('Atividade criada:', res);
      alert('Atividade criada com sucesso!');
      router.push("/home");
    } catch (error: any) {
      console.error('Erro ao criar a atividade:', error);
      alert(`Erro ao criar a atividade: ${error.response?.data?.error || 'Erro desconhecido'}`);
    }
  };

  useEffect(() => {
    listPets().then((pets) => {
      setPets(pets);
      if (pets.length > 0) {
        setPetId(pets[0]._id); // Defina o primeiro pet assim que carregar
      }
    });
  }, []);

  return (
    <FormContainer style={{ display: 'flex' }}>
      <TitleInput
        placeholder="Título..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <InputRow>
        <DateInput
          type="datetime-local"
          placeholder="Data"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <PetDropdown
          value={petId}
          onChange={(e) => setPetId(e.target.value)}
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
        required  
      />
      <Button onClick={handleSubmit}>Adicionar Atividade</Button>

      {/* Ícone para abrir o modal */}
      <IconComponent src="/icons/Add.svg" alt="Adicionar Anexo" onClick={() => setIsModalOpen(true)} />

      {/* Modal para adicionar Imagem, Anexo, Comentário */}
      {isModalOpen && (
        <ModalComponent 
          closeModal={() => setIsModalOpen(false)} 
          addImage={true} 
          addAnexo={true} 
          addComment={true}
          showNewActivityButton = {false}
          showNewPetButton = {false}
          onAddAttachment={addAttachment}
        />
      )}
    </FormContainer>
  );
};

export default NewActivityForm;
