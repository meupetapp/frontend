import React, { useState } from 'react';
import GoogleButton from '@/components/GoogleButton';
import Link from 'next/link';
import { PageContainerComponent, FormContainerComponent, FormWrapperComponent } from '@/components/FormComponents';
import IconComponent from '@/components/IconComponent';
import SignUpForm from '@/components/sigupForm';

const SignUpPage: React.FC = () => {
  return (
    <PageContainerComponent>
    <IconComponent src="/icons/Logo.svg" alt="Logo" width="65px" height="65px" top="15px" />
    <Link href={"/home"}>
        <IconComponent  left='15px'src="/icons/Arrow.svg" alt="Logo" />
    </Link>
    <SignUpForm/>
    </PageContainerComponent>
  );
};

export default SignUpPage;
