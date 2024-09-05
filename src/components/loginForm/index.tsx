// src/components/LoginForm/index.tsx
import React, { useState } from 'react';
import { FormContainer, Input, Button } from './styles';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de login
    console.log({ email, password });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h2>Login</h2>
      <Input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit">Entrar</Button>
    </FormContainer>
  );
};

export default LoginForm;
