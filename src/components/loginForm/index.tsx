import React, { useState } from "react";
import {
  FormWrapper,
  Logo,
  LineContainer,
  LineContainer2,
  Line,
  EntrarButton,
  ForgotPasswordLink,
  RedirectToCadastro,
  OrText,
  EnterAsText,
  SignUpText,
  ButtonAllign
} from "./styles"; // Certifique-se de que RedirectToCadastro está sendo estilizado
import FacebookButton from "../FacebookButton";
import GoogleButton from "../GoogleButton";
import InputWithIcon from "../InputWithIcon";
import { FormContainerComponent, FormWrapperComponent } from "../FormComponents";
import { TitleWrapperComponent, TitleText } from "../TitleComponents";
import Link from "next/link";

const EmailIconSrc = '/icons/Email.svg';
const LockIconSrc = '/icons/Lock.svg';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de login
    console.log({ email, password });
  };

  const handleForgotPassword = () => {
    if (email) {
      // Lógica para enviar o email de redefinição de senha
      console.log({ email });
    } else {
      alert("Por favor, insira o e-mail para redefinir a senha.");
    }
  };

  const handleCadastro = () => {
    // Lógica de redirecionamento para a página de cadastro
    console.log("Redirecionar para página de cadastro");
  };

  return (
    <FormWrapperComponent>
      <Logo src="/icons/Logo.svg" alt="Logo" />
      <FormContainerComponent onSubmit={handleSubmit}>
        <TitleWrapperComponent>
          <TitleText>Login</TitleText>
        </TitleWrapperComponent>
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
          style={{ marginBottom: '0' }} // Agora o 'style' é permitido
        />
        <ForgotPasswordLink onClick={handleForgotPassword}>
          Esqueceu a senha?
        </ForgotPasswordLink>

        <EntrarButton type="submit">Entrar</EntrarButton>

        <LineContainer>
          <Line>
            <OrText>Ou</OrText>
          </Line>
        </LineContainer>

        <EnterAsText>Entre com</EnterAsText>

        <ButtonAllign>
          <GoogleButton />
          <FacebookButton />
        </ButtonAllign>

        <LineContainer2>
          <Line />
        </LineContainer2>

        <SignUpText>Ainda não tem uma conta?</SignUpText>
        <Link href={"/signup"}>
        <RedirectToCadastro onClick={handleCadastro}>
          Cadastre-se
        </RedirectToCadastro>
        </Link>
      </FormContainerComponent>
    </FormWrapperComponent>
  );
};

export default LoginForm;
