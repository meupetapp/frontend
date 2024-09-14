import React, { useRef, useState } from 'react';
import { InputContainer, Input, Icon, RightIcon } from './styles'; // Adicione `RightIcon` no arquivo de estilos

type InputWithIconProps = {
  type: string;
  placeholder: string;
  iconSrc: string; // URL do ícone à esquerda (ex.: cadeado)
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputWithIcon: React.FC<InputWithIconProps> = ({ type, placeholder, iconSrc, value, onChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar senha

  // Função para alternar entre mostrar/ocultar senha
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  // Função para lidar com mudanças no input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let maskedValue = e.target.value;
    if (inputRef.current) {
      inputRef.current.value = maskedValue;
    }
    onChange(e);
  };

  return (
    <InputContainer>
      <Icon src={iconSrc} alt="Ícone" /> {/* Ícone à esquerda */}
      <Input
        type={showPassword && type === 'password' ? 'text' : type} // Alterna entre "text" e "password"
        placeholder={placeholder}
        ref={inputRef}
        value={value}
        onChange={handleChange}
        required
      />
      {type === 'password' && (
        <RightIcon
          src={showPassword ? '/icons/Eye.svg' : '/icons/Hidden.svg'} // Ícone para mostrar/ocultar senha
          alt="Mostrar/Ocultar Senha"
          onClick={togglePasswordVisibility} // Alterna visibilidade ao clicar
          style={{ cursor: 'pointer' }} // Estilo para indicar que é clicável
        />
      )}
    </InputContainer>
  );
};

export default InputWithIcon;
