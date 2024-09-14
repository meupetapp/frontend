import React, { useState } from 'react';
import Link from 'next/link';
import { FormContainer, Input, Button, H3, P, Line, LineContainer, Text, ButtonAllign, Icon, FormWrapper, PageContainer, TitleWrapper } from './styles';
import GoogleButton from '../GoogleButton';
import FacebookButton from '../FacebookButton';
import InputWithIcon from '../InputWithIcon';

const EmailIconSrc = '/icons/Email.svg';
const UserIconSrc = '/icons/User.svg';
const CalendarIconSrc = '/icons/Calendar.svg';
const LockIconSrc = '/icons/Lock.svg';

const SignUpForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [birthday, setBirthday] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('As senhas não coincidem.');
            return;
        }
        // Aqui você pode adicionar a lógica de cadastro
        console.log({ email, password, name, birthday });
    };

    return (
        <PageContainer>
            <Icon src="/icons/Logo.svg" alt="Logo" style={{ height: '65px', width: '65px', top: '15px' }} />
            <Link href={"/home"}>
                <Icon style={{ left: '15px' }} src="/icons/Arrow.svg" alt="Logo" />
            </Link>
            <FormWrapper>
                <FormContainer onSubmit={handleSubmit}>
                    <TitleWrapper>
                        <H3>Cadastro</H3>
                    </TitleWrapper>
                    <InputWithIcon
                        type="text"
                        placeholder="Nome completo"
                        iconSrc={UserIconSrc}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <InputWithIcon
                        type="date"
                        placeholder="Data de nascimento"
                        iconSrc={CalendarIconSrc}
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}

                    />
                    <InputWithIcon
                        type="email"
                        placeholder="E-mail"
                        iconSrc={EmailIconSrc}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputWithIcon
                        type="password"
                        placeholder="Senha"
                        iconSrc={LockIconSrc}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputWithIcon
                        type="password"
                        placeholder="Confirmar Senha"
                        iconSrc={LockIconSrc}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <LineContainer>
                        <Line>
                            <Text>Ou</Text>
                        </Line>
                    </LineContainer>
                    <P>Cadastre-se com</P>
                    <ButtonAllign>
                        <GoogleButton />
                        <FacebookButton />
                    </ButtonAllign>
                    <LineContainer style={{ marginBottom: '30px' }}>
                        <Line />
                    </LineContainer>
                    <Button>Cadastrar</Button>
                </FormContainer>
            </FormWrapper>
        </PageContainer>
    );
};

export default SignUpForm;
