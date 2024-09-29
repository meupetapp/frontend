import React, { useState } from 'react';
import Link from 'next/link';
import { Button, P, Line, LineContainer, Text, ButtonAllign, Icon } from './styles';
import GoogleButton from '../GoogleButton';
import { PageContainerComponent, FormContainerComponent, FormWrapperComponent } from '../FormComponents';
import { TitleText, TitleWrapperComponent } from '../TitleComponents';
import IconComponent from '../IconComponent';
import FacebookButton from '../FacebookButton';
import InputWithIcon from '../InputWithIcon';
import { registerUser } from '@/service/userService'; // Importe o serviço de registro
import { useRouter } from 'next/router'; // Importando o useRouter

const EmailIconSrc = '/icons/Email.svg';
const UserIconSrc = '/icons/User.svg';
const CalendarIconSrc = '/icons/Calendar.svg';
const LockIconSrc = '/icons/Lock.svg';



const SignUpForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');
    const [birthday, setBirthday] = useState('');

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('As senhas não coincidem.');
            return;
        }

        try {
            const data = await registerUser(username, email, password);
            alert('Usuário cadastrado com sucesso!');
            console.log('Resposta do backend:', data);
            
            // Redireciona o usuário para a página de login após o cadastro
            router.push('/login');
        } catch (error: any) {
            alert(`Erro ao registrar: ${error.message}`);
        }
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
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
