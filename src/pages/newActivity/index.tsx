import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import IconComponent from '@/components/IconComponent';
import { GreenPageContainerComponent } from '@/components/FormComponents';
import NewActivityForm from '@/components/NewActivityForm';
import Comments from '@/components/Comments';

const NewActivity: React.FC = () => {
  const router = useRouter();
  const { mode, title, dateTime, activityId, description, type, petId, comments } = router.query;

  const [isViewMode, setIsViewMode] = useState(false);
  const [activityData, setActivityData] = useState<any>(null);

  useEffect(() => {
    if (router.isReady) {
      console.log("Query inicial de comentários:", comments);
  
      if (mode === 'view') {
        setIsViewMode(true);
  
        // Convertemos a data de volta para o formato Date
        const parsedDateTime = dateTime ? new Date(decodeURIComponent(dateTime as string)) : null;
  
        let parsedComments = [];
        if (comments) {
          try {
            // Primeira decodificação
            let decodedComments = decodeURIComponent(comments as string);
  
            // Decodificação extra se necessário
            while (decodedComments.includes('%')) {
              decodedComments = decodeURIComponent(decodedComments);
            }
  
            console.log("Comentários decodificados corretamente:", decodedComments);
  
            // Remover aspas extras, se existirem
            if (decodedComments.startsWith('"') && decodedComments.endsWith('"')) {
              decodedComments = decodedComments.slice(1, -1);
            }
  
            // Agora, finalmente, faz o parse do JSON
            parsedComments = JSON.parse(decodedComments.replace(/\\"/g, '"')); // Substitui as aspas escapadas
  
            console.log("Comentários parseados:", parsedComments);
  
            // Verifique se parsedComments realmente é um array
            if (!Array.isArray(parsedComments)) {
              console.error("Comentários não são um array:", parsedComments);
              parsedComments = []; // Se não for um array, defina como array vazio
            }
          } catch (error) {
            console.error("Erro ao fazer o parse dos comentários:", error);
            parsedComments = []; // Define um array vazio em caso de erro
          }
        }
  
        // Atualize os dados da atividade, incluindo os comentários
        setActivityData({
          title: decodeURIComponent(title as string),
          time: parsedDateTime,
          activityId,
          description: decodeURIComponent(description as string),
          type,
          petId,
          comments: parsedComments, // Certifique-se de que parsedComments é sempre um array
        });
      }
    }
  }, [router.isReady, mode, title, dateTime, activityId, description, comments, type]);
  

  console.log('Dados da atividade:', activityData);

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
      {activityData?.comments && activityData.comments.length > 0 ? (
        <Comments comments={activityData?.comments || []} />
        // Passa os comentários se existir
      ) : (
        <p>Sem comentários</p>
      )}
    </GreenPageContainerComponent>
  );
};

export default NewActivity;
