// index.tsx
import React, { useState } from 'react';
import * as S from './style';
import Image from 'next/image';
import { createUserPermission } from '@/service/userPermissionService';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  pet: { _id: string };
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, pet }) => {
  const [email, setEmail] = useState('');
  const [permission, setPermission] = useState<'WRITE' | 'READ' | null>(null);
  if (!isOpen) return null;

  const handleEditClick = () => {
    setPermission('WRITE');
  };

  const handleViewClick = () => {
    setPermission('READ');
  };

  const handleAddClick = () => {
    if (!email || !permission) {
      alert('Por favor, preencha o e-mail e selecione uma permissão.');
      return;
    }

    createUserPermission(email, [permission], pet._id).then((res) => {
      alert('Permissão criada com sucesso!');
    })
  
    onClose();
  };

  return (
    <S.Overlay>
      <S.ModalContent>
        <S.CloseButton onClick={onClose}>×</S.CloseButton>
        <S.Header>
          <S.Icon className="fas fa-user-lock" />
          <S.Title>Novo Acesso</S.Title>
          <Image alt='' width={100} height={100} src={'/icons/Access.png'} />
        </S.Header>
        <S.Body>
          <S.InputGroup>
            <S.EmailIcon className="fas fa-envelope" />
            <S.EmailInput
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </S.InputGroup>
          <S.ButtonGroup>
            <S.EditButton onClick={handleEditClick} isSelected={permission === 'WRITE'}>
              Edição
            </S.EditButton>
            <S.ViewButton onClick={handleViewClick} isSelected={permission === 'READ'}>
              Visualização
            </S.ViewButton>
          </S.ButtonGroup>
        </S.Body>
        <S.AddButton onClick={handleAddClick}>Adicionar</S.AddButton>
      </S.ModalContent>
    </S.Overlay>
  );
};

export default Modal;
