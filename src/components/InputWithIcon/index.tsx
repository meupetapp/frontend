import React, { useRef, useState } from 'react';
import { InputContainer, Input, Icon, RightIcon } from './styles'; // Adicione `RightIcon` no arquivo de estilos

type InputWithIconProps = {
  type: string;
  placeholder: string;
  iconSrc: string; // URL do ícone à esquerda (ex.: cadeado)
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties; // Adiciona a propriedade 'style' opcional
};

const InputWithIcon: React.FC<InputWithIconProps> = ({ type, placeholder, iconSrc, value, onChange, style }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar senha

  // Função para alternar entre mostrar/ocultar senha
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <InputContainer style={style}> {/* Aplica o style aqui */}
      <Icon src={iconSrc} alt="Ícone" /> {/* Ícone à esquerda */}
      <Input
        type={showPassword && type === 'password' ? 'text' : type} // Alterna entre "text" e "password"
        placeholder={placeholder}
        ref={inputRef}
        value={value}
        onChange={onChange}
        required
      />
      {type === 'password' && (
        <RightIcon
          src={showPassword ? '/icons/Eye.svg' : '/icons/Hidden.svg'} // Ícone para mostrar/ocultar senha
          alt="Mostrar/Ocultar Senha"
          onClick={togglePasswordVisibility}
          style={{ cursor: 'pointer' }}
        />
      )}
    </InputContainer>
  );
};

export default InputWithIcon;
