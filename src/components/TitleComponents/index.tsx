import React, { ReactNode } from 'react';
import { TitleWrapper, H3 } from './styles'; // Importa os estilos do arquivo styles.ts

// Define que o componente aceita filhos (children)
type PropsWithChildren = {
    children: ReactNode;
};

// Componente para o Wrapper do título
export const TitleWrapperComponent: React.FC<PropsWithChildren> = ({ children }) => {
    return <TitleWrapper className='styled-title'>{children}</TitleWrapper>;
};

// Componente para o H3 do título (você pode personalizar mais se necessário)
export const TitleText: React.FC<PropsWithChildren> = ({ children }) => {
    return <H3>{children}</H3>;
};
