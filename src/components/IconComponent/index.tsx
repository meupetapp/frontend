import React from 'react';
import { StyledIcon } from './styles'; // Importa o estilo de ícone
import { loadEnvFile } from 'process';

type IconProps = {
  src: string;  // Caminho da imagem
  alt: string;  // Texto alternativo
  width?: string;  // Largura opcional
  height?: string;  // Altura opcional
  top?: string;  // Posição opcional (topo)
  right?: string;  // Posição opcional (direita)
  left?: string;  // Posição opcional (direita)
  onClick?: () => void;  // Função de clique opcional
};

const IconComponent: React.FC<IconProps> = ({ src, alt, width, height, top, right,left,onClick }) => {
  return (
    <StyledIcon 
      src={src} 
      alt={alt} 
      width={width} 
      height={height} 
      top={top} 
      right={right} 
      left={left} 
      onClick={onClick}
    />
  );
};

export default IconComponent;
