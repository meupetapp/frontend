// src/pages/home/index.tsx
import React from 'react';
import NewPetForm from '@/components/NewPetForm';

const NewPet: React.FC = () => {
  return (
    <div>
      <NewPetForm />
    </div>
  );
};

export default NewPet;