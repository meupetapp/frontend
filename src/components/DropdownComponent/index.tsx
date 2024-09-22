import React from 'react';
import { Dropdown, DropdownWrapper } from './styles';

const DropdownComponent = () => {
  return (
    <DropdownWrapper>
      <Dropdown>
        <option value="">Agendadas</option>
        <option value="opcao1">Opção 1</option>
        <option value="opcao2">Opção 2</option>
        <option value="opcao3">Opção 3</option>
      </Dropdown>
    </DropdownWrapper>
  );
};

export default DropdownComponent;
