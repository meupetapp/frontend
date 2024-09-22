import React, { ReactNode } from 'react';
import { FormWrapper, PageContainer, FormContainer } from './styles'; // Importa os estilos

// Define que o componente aceita filhos (children)
type PropsWithChildren = {
    children: ReactNode;
};

export const FormWrapperComponent: React.FC<PropsWithChildren> = ({ children }) => {
    return <FormWrapper>{children}</FormWrapper>;
};

export const PageContainerComponent: React.FC<PropsWithChildren> = ({ children }) => {
    return <PageContainer>{children}</PageContainer>;
};

export const FormContainerComponent: React.FC<PropsWithChildren & { onSubmit: (e: React.FormEvent) => void }> = ({ children, onSubmit }) => {
    return <FormContainer onSubmit={onSubmit}>{children}</FormContainer>;
};

