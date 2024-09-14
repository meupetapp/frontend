// src/components/GoogleButton/index.tsx
import React from 'react';
import { Button } from './styles';

const FacebookButton: React.FC = () => {
  const handleFacebookLogin = () => {
    // Lógica para o login com Google aqui
    console.log('Login com Facebook');
  };

  return (
    <Button onClick={handleFacebookLogin}>
      <img
        src="/icons/Facebook_Icon.svg"  // Caminho relativo ao ícone na pasta public
        alt="Facebook Icon"
      />
    </Button>
  );
};

export default FacebookButton;
