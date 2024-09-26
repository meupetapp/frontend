
import React from 'react';
import LoginForm from '@/components/loginForm';
import { PageContainerComponent } from '@/components/FormComponents';

const LoginPage: React.FC = () => {
  return (
    <PageContainerComponent>
      <LoginForm />
    </PageContainerComponent>
  );
};

//
export default LoginPage;
