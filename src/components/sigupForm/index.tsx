import React, { useState } from 'react';
import Link from 'next/link';
import { Button, P, Line, LineContainer, Text, ButtonAllign, Icon } from './styles';
import GoogleButton from '../GoogleButton';
import { PageContainerComponent, FormContainerComponent, FormWrapperComponent } from '../FormComponents';
import { TitleText, TitleWrapperComponent } from '../TitleComponents';
import IconComponent from '../IconComponent';
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
     
            <FormWrapperComponent>
                <FormContainerComponent onSubmit={handleSubmit}>
                    <TitleWrapperComponent>
                        <TitleText>Cadastro</TitleText>
                    </TitleWrapperComponent>
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
                </FormContainerComponent>
            </FormWrapperComponent>
    );
};

export default SignUpForm;
