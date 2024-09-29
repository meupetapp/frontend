import React, { useState } from 'react';
import { TitleInput, DateInput, PetDropdown, ActivityTypeDropdown, DescriptionInput, InputRow, AttachmentContainer, AttachmentBlock } from './styles';
import IconComponent from '@/components/IconComponent'; // Importando o componente de ícone

const NewActivityForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [petName, setPetName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [attachments, setAttachments] = useState<string[]>([]);

  // Função para adicionar um novo anexo
  const addAttachment = () => {
    // Adiciona um novo anexo. Você pode substituir por um nome ou lógica real de upload
    setAttachments([...attachments, `Anexo ${attachments.length + 1}`]);
  };

  return (
    <form>
      <TitleInput 
        placeholder="Título..." 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <InputRow>
        <DateInput 
          type="datetime-local" 
          placeholder="Data" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
        />
        <PetDropdown 
          value={petName} 
          onChange={(e) => setPetName(e.target.value)} 
        >
          <option value="">Selecionar Pet</option>
          <option value="Pet 1">Pet 1</option>
          <option value="Pet 2">Pet 2</option>
          <option value="Pet 3">Pet 3</option>
        </PetDropdown>
      </InputRow>

      {/* Novo componente para os anexos */}
      <AttachmentContainer>
        {attachments.map((attachment, index) => (
          <AttachmentBlock key={index}>
            {attachment} {/* Aqui você pode renderizar o conteúdo ou ícone do anexo */}
          </AttachmentBlock>
        ))}
      </AttachmentContainer>

      <ActivityTypeDropdown 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
      >
        <option value="">Tipo de Atividade</option>
        <option value="Tipo 1">Tipo 1</option>
        <option value="Tipo 2">Tipo 2</option>
        <option value="Tipo 3">Tipo 3</option>
        <option value="Tipo 4">Tipo 4</option>
        <option value="Tipo 5">Tipo 5</option>
      </ActivityTypeDropdown>
      <DescriptionInput 
        placeholder="Descrição..." 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      
      {/* Botão para adicionar anexo */}
      <IconComponent src="/icons/Add.svg" alt="Adicionar Anexo" onClick={addAttachment} />
    </form>
  );
};

export default NewActivityForm;
