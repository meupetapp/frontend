// src/components/GoogleButton/index.tsx
import React from 'react';
import { Button } from './styles';

const GoogleButton: React.FC = () => {
  const handleGoogleLogin = () => {
    // Lógica para o login com Google aqui
    console.log('Login com Google');
  };

  return (
    <Button onClick={handleGoogleLogin}>
      <img
        src="/icons/Google_Icon.svg"  // Caminho relativo ao ícone na pasta public
        alt="Google Icon"
      />
    </Button>
  );
};

export default GoogleButton;
