// src/pages/home/index.tsx
import React from 'react';
import NewPetForm from '@/components/NewPetForm';
import { PageContainer } from '@/components/FormComponents/styles';
import { Icon } from '@/components/InputWithIcon/styles';
import Link from 'next/link';
import { PageContainerComponent } from '@/components/FormComponents';
import IconComponent from '@/components/IconComponent';

const NewPet: React.FC = () => {
  return (
    <PageContainerComponent>
       <IconComponent
        src="/icons/Logo.svg"
        alt="Logo"
         height= '65px'width= '65px' top= '5px' right='15px'  
      />
      <Link href={"/home"}>
        <IconComponent
          left= '15px' top= '25px' 
          src="/icons/Arrow.svg"
          alt="Logo"
        />
      </Link>
      <NewPetForm />
    </PageContainerComponent>
  );
};

export default NewPet;