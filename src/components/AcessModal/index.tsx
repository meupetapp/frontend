import React, { useState }  from 'react';
import { ModalContainer, AcessIcon, ModalContent, CloseButton, RoleOptions, RoleButton, AddButton, Text } from './styles';
import InputWithIcon from '../InputWithIcon';


const EmailIconSrc = '/icons/Email.svg';

interface AccessModalProps {
  closeModal: () => void;
}

const AccessModal: React.FC<AccessModalProps> = ({ closeModal }) => {
  const [selectedRole, setSelectedRole] = React.useState<string>('Visualização');
  const [email, setEmail] = useState('');

  const handleRoleSelection = (role: string) => {
    setSelectedRole(role);
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // Evita propagação de clique para o fundo do modal
  };

  return (
    <ModalContainer onClick={closeModal}> {/* Fecha ao clicar no fundo */}
      <ModalContent onClick={handleModalClick}> {/* Não fecha ao clicar no conteúdo */}
        <CloseButton onClick={closeModal}>X</CloseButton>
        <AcessIcon src="/icons/Access.svg" alt="Acesso" />
        <Text>Novo Acesso</Text>
        <InputWithIcon style={{marginBottom:'0px'}}
                type="email"
                placeholder="E-mail"
                iconSrc={EmailIconSrc}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
        <RoleOptions>
          <RoleButton
            selected={selectedRole === 'Edição'}
            onClick={() => handleRoleSelection('Edição')}
          >
            Edição
          </RoleButton>
          <RoleButton
            selected={selectedRole === 'Visualização'}
            onClick={() => handleRoleSelection('Visualização')}
          >
            Visualização
          </RoleButton>
        </RoleOptions>
        <AddButton onClick={() => console.log('Usuário adicionado')}>Adicionar</AddButton>
      </ModalContent>
    </ModalContainer>
  );
};

export default AccessModal;
