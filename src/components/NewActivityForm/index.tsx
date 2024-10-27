import React, { useEffect, useState } from 'react';
import { TitleInput, DateInput, PetDropdown, ActivityTypeDropdown, DescriptionInput, InputRow, AttachmentContainer, FormContainer } from './styles';
import IconComponent from '@/components/IconComponent';
import { listPets } from '@/service/petService';
import { Button } from '../ActivityList/styles';
import { createActivity } from '@/service/activityService';
import { useRouter } from 'next/router';
import axios from 'axios';

interface NewActivityFormProps {
  isViewMode?: boolean;
  activityData?: any;
}

const NewActivityForm: React.FC<NewActivityFormProps> = ({ isViewMode = false, activityData }) => {
  const [title, setTitle] = useState(activityData?.title || '');
  const [time, setTime] = useState(activityData?.time ? new Date(activityData.time).toISOString().slice(0, 16) : '');
  const [pets, setPets] = useState<any[]>([]);
  const [petId, setPetId] = useState(activityData?.petId || '');
  const [type, setType] = useState(activityData?.type || '');
  const [description, setDescription] = useState(activityData?.description || '');
  const [attachment, setAttachment] = useState<string | null>(activityData?.attachment || null);
  const [photo, setPhoto] = useState<string | null>(activityData?.photo || null);
  const router = useRouter();

  useEffect(() => {
    if (activityData) {
      setTitle(activityData.title || '');
      setTime(activityData.time ? new Date(activityData.time).toISOString().slice(0, 16) : '');
      setPetId(activityData.petId || '');
      setType(activityData.type || '');
      setDescription(decodeURIComponent(activityData.description || ''));
      setAttachment(activityData.attachment || null);
      setPhoto(activityData.photo || null);
    }
  }, [activityData]);
  

  const addAttachment = async (file: File) => {
    try {
      // Solicita uma URL pré-assinada para upload
      const response = await axios.post("http://localhost:3001/generate-upload-url", {
        filename: file.name,
      });
      const { url } = response.data;

      // Faz o upload do arquivo para o S3
      await axios.put(url, file, {
        headers: {
          "Content-Type": file.type,
        },
      });

      // Define a URL do anexo
      const uploadedUrl = url.split("?")[0]; // Remove parâmetros da URL
      setAttachment(uploadedUrl);
      alert("Anexo carregado com sucesso!");
    } catch (error) {
      console.error("Erro ao carregar o anexo:", error);
      alert("Erro ao carregar o anexo.");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      addAttachment(file);
    }
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
      photo: attachment || undefined, // Inclui a URL do anexo
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
      if (activityData?.petId) {
        setPetId(activityData.petId);
      } else if (pets.length > 0) {
        setPetId(pets[0]._id);
      }
    });
  }, [activityData]);

  return (
    <FormContainer style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <TitleInput
        placeholder="Título..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        readOnly={isViewMode}
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
          disabled={isViewMode}
        >
          {pets.map((pet) => (
            <option key={pet._id} value={pet._id}>
              {pet.name}
            </option>
          ))}
        </PetDropdown>
      </InputRow>

      <AttachmentContainer>
        <label htmlFor="file-input">
          <img
            src={attachment || photo || "/icons/AddImage.svg"}
            alt="Adicionar Anexo"
            style={{
              width: attachment ? "100px" : "50px",
              height: attachment ? "100px" : "50px",
              borderRadius: "10px",
              cursor: !isViewMode ? "pointer" : "default",
            }}
          />
        </label>
        {!isViewMode && (
          <input
            id="file-input"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        )}
      </AttachmentContainer>

      <ActivityTypeDropdown
        value={type}
        onChange={(e) => setType(e.target.value)}
        disabled={isViewMode}
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
        readOnly={isViewMode}
      />
  
      <Button onClick={handleSubmit} disabled={isViewMode}>
        {isViewMode ? 'Visualizar' : 'Criar Atividade'}
      </Button>
    </FormContainer>
  );
};

export default NewActivityForm;
