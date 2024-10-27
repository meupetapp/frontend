import React, { useState } from 'react';
import { ModalContainer, AcessIcon, ModalContent, CloseButton, RoleOptions, RoleButton, AddButton, Text } from './styles';
import InputWithIcon from '../InputWithIcon';
import { createUserPermission } from '@/service/userPermissionService'; // Serviço que faz a chamada ao backend

const EmailIconSrc = '/icons/Email.svg';

interface AccessModalProps {
  closeModal: () => void;
  petId: string;  // ID do pet para associar a permissão
}

const AccessModal: React.FC<AccessModalProps> = ({ closeModal, petId }) => {
  const [permissions, setpermissions] = useState<string[]>(['Visualização']);  // Alterado para array
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleRoleSelection = (role: string) => {
    setpermissions([role]);  // Agora setamos um array de permissões
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // Evita a propagação do clique para o fundo do modal
  };

  const handleAddAccess = async () => {
    setLoading(true);
    setErrorMessage(null);
    console.log(`Pet ID: ${petId}, Email: ${email}, Role: ${permissions}`);

    try {
      // Chama o serviço para criar a permissão de usuário
      await createUserPermission(email, petId, permissions);  // Agora permissions é um array
      closeModal(); // Fecha o modal após adicionar a permissão com sucesso
    } catch (error) {
      setErrorMessage('Erro! Verifique o email ou tente novamente.');
      console.error('Erro ao adicionar permissão:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ModalContainer onClick={closeModal}>
      <ModalContent onClick={handleModalClick}>
        <CloseButton onClick={closeModal}>X</CloseButton>
        <AcessIcon src="/icons/Access.svg" alt="Acesso" />
        <Text>Novo Acesso</Text>
        <InputWithIcon
          type="email"
          placeholder="E-mail"
          iconSrc={EmailIconSrc}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <RoleOptions>
          <RoleButton
            selected={permissions.includes('Edição')}
            onClick={() => handleRoleSelection('Edição')}
          >
            Edição
          </RoleButton>
          <RoleButton
            selected={permissions.includes('Visualização')}
            onClick={() => handleRoleSelection('Visualização')}
          >
            Visualização
          </RoleButton>
        </RoleOptions>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <AddButton onClick={handleAddAccess} disabled={loading}>
          {loading ? 'Adicionando...' : 'Adicionar'}
        </AddButton>
      </ModalContent>
    </ModalContainer>
  );
};

export default AccessModal;
