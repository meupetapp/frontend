import React from 'react';
import IconComponent from '@/components/IconComponent';
import { GreenPageContainerComponent } from '@/components/FormComponents';
import NewActivityForm from '@/components/NewActivityForm';
import Comments from '@/components/Comments'; // Importando o componente Comments
import Link from 'next/link';

const NewActivity: React.FC = () => {

  const handleAddAttachment = () => {
    // Lógica para adicionar anexo
    console.log('Adicionar Anexo');
  };

  return (
    <GreenPageContainerComponent>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '70px' }}>
        <Link href={"/home"}>
        <IconComponent left='15px' src="/icons/Arrow.svg" alt="Voltar"/>
        </Link>
        <IconComponent right='15px' src="/icons/Add.svg" alt="Adicionar Anexo" onClick={handleAddAttachment} />
      </div>
      <NewActivityForm />
      <Comments />
    </GreenPageContainerComponent>
  );
};

export default NewActivity;
