import React, { ReactNode,CSSProperties  } from 'react';
import { FormWrapper, PageContainer, FormContainer, GreenPageContainer } from './styles'; // Importa os estilos

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

// Adiciona a propriedade style opcional para o componente
type FormContainerComponentProps = PropsWithChildren & { 
    onSubmit?: (e: React.FormEvent) => void, 
    style?: CSSProperties 
  };
  
  export const FormContainerComponent: React.FC<FormContainerComponentProps> = ({ children, onSubmit, style }) => {
    return (
      <FormContainer onSubmit={onSubmit} style={style}>
        {children}
      </FormContainer>
    );
  };
export const GreenPageContainerComponent: React.FC<PropsWithChildren> = ({ children }) => {
    return <GreenPageContainer>{children}</GreenPageContainer>;
};