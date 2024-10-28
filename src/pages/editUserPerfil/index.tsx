import React from 'react';
import { PageContainer } from '@/components/FormComponents/styles';
import Link from 'next/link';
import { PageContainerComponent } from '@/components/FormComponents';
import IconComponent from '@/components/IconComponent';
import { useRouter } from 'next/router';
import EditUserForm from '@/components/EditUserPerfil';

const EditUserPerfil: React.FC = () => {
  const router = useRouter();
  const { petId } = router.query; // Receber o petId da query

  return (
    <PageContainerComponent>
      <IconComponent
        src="/icons/Logo.svg"
        alt="Mais opções"
        height="65px"
        width="65px"
        top="25px"
        right="15px"
      />
      <Link href="/home">
        <IconComponent
          left="15px" 
          top="25px" 
          src="/icons/Arrow.svg"
          alt="Voltar"
        />
      </Link>
      <EditUserForm />
    </PageContainerComponent>
  );
};

export default EditUserPerfil;

