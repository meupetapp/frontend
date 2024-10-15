import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import IconComponent from '@/components/IconComponent';
import { GreenPageContainerComponent } from '@/components/FormComponents';
import NewActivityForm from '@/components/NewActivityForm';
import Comments from '@/components/Comments';

const NewActivity: React.FC = () => {
  const router = useRouter();
  const { mode, title, dateTime, activityId, description, type, petId } = router.query;
  const [isViewMode, setIsViewMode] = useState(false);
  const [activityData, setActivityData] = useState(null);

  // Usar o efeito para esperar que a query esteja completamente pronta
  useEffect(() => {
    if (router.isReady) { // Certifique-se de que o router está pronto
      if (mode === 'view') {
        setIsViewMode(true);

        // Convertemos a data de volta para o formato Date
        const parsedDateTime = dateTime ? new Date(decodeURIComponent(dateTime as string)) : null;

        // Preenchemos os dados da atividade com base na query
        setActivityData({
          title: decodeURIComponent(title as string),
          time: parsedDateTime,
          activityId,
          description, type, petId
        });
      }
    }
  }, [router.isReady, mode, title, dateTime, activityId]);

  console.log("dados da atividde passados>:", activityData);
  const handleAddAttachment = () => {
    console.log('Adicionar Anexo');
  };

  return (
    <GreenPageContainerComponent>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '70px' }}>
        <IconComponent left="15px" src="/icons/Arrow.svg" alt="Voltar" onClick={() => router.back()} />
        {!isViewMode && (
          <IconComponent right="15px" src="/icons/Add.svg" alt="Adicionar Anexo" onClick={handleAddAttachment} />
        )}
      </div>
      <NewActivityForm isViewMode={isViewMode} activityData={activityData} />
      <Comments />
    </GreenPageContainerComponent>
  );
};

export default NewActivity;
