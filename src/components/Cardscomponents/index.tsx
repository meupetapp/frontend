import React, { ReactNode } from 'react';
import { CardWrapper } from './styles';

type PropsWithChildren = {
    children: ReactNode;
};

export const PageContainerComponent: React.FC<PropsWithChildren> = ({ children }) => {
    return <CardWrapper>{children}</CardWrapper>;
};