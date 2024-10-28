import React, { useState } from "react";
import {
  FormWrapper,
  FormContainer,
  H3,
  Text,
  PageContainer,
  ImageIcon,
  Icon,
  CreateButton,
  TitleWrapper,
  ImageContainer,
} from "./styles";
import InputWithIcon from "../InputWithIcon";
import Link from "next/link";
import { updateUser } from "@/service/userService";

import { FormContainerComponent, FormWrapperComponent } from "../FormComponents";

import { useRouter } from 'next/router'; 

const EmailIconSrc = '/icons/Email.svg';
const UserIconSrc = '/icons/User.svg';
const CalendarIconSrc = '/icons/Calendar.svg';
const LockIconSrc = '/icons/Lock.svg';

const EditUserForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [birthday, setBirthday] = useState('');

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
     
    try {
        const data = await updateUser(
            username,
            email,
            password,
            confirmPassword,
            birthday
          );
      
        alert('Usuário atualizado com sucesso!');
        console.log('Dados enviados:', data);
      
        router.push('/home'); // Redireciona para a página home
    }   catch (error: any) {
        alert(error.message || 'Erro ao atualizar usuário');
        }
  };

  return (
    <FormWrapperComponent>
      <FormContainerComponent onSubmit={handleSubmit}>
        <TitleWrapper>
          <H3>Perfil</H3>
        </TitleWrapper>
        <ImageContainer>
          <ImageIcon src="/icons/AddImage.svg" alt="AddImage" />
        </ImageContainer>
        <InputWithIcon
          type="text"
          placeholder="Nome Completo"
          iconSrc={UserIconSrc}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputWithIcon
          type="date"
          placeholder="Data de Nascimento"
          iconSrc={CalendarIconSrc}
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />
        <InputWithIcon
          type="email"
          placeholder="E-mail"
          iconSrc={EmailIconSrc}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputWithIcon
          type="password"
          placeholder="Senha"
          iconSrc={LockIconSrc}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputWithIcon
          type="password"
          placeholder="Confirmar Senha"
          iconSrc={LockIconSrc}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <CreateButton type="submit">Atualizar</CreateButton>
      </FormContainerComponent>
    </FormWrapperComponent>
  );
};

export default EditUserForm;
