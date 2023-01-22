import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState(false);

  const navigate = useNavigate();

  function register(event) {
    event.preventDefault();
    setStatus(true);

    const object = {
      name,
      email,
      password,
      confirmPassword,
    };

    const URL = `${process.env.REACT_APP_API_URL}/sign-up`;

    axios
      .post(URL, object)
      .then((value) => {
        navigate("/");
        alert("Usuário cadastrado com sucesso!");
      })
      .catch((error) => {
        alert(error.message);
        window.location.reload();
      });
  }

  return (
    <>
      <ContainerLogo>MyWallet</ContainerLogo>

      <WrapperForm>
        <form onSubmit={register}>
          <LoginInput
            disabled={status}
            data-test="name"
            type="text"
            placeholder="Nome"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <LoginInput
            disabled={status}
            data-test="email"
            type="email"
            placeholder="E-mail"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <LoginInput
            disabled={status}
            data-test="password"
            type="password"
            placeholder="Senha"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <LoginInput
            disabled={status}
            data-test="conf-password"
            type="password"
            placeholder="Confirme a senha"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <LoginButton type="submit" data-test="sign-up-submit" state={status}>
            Cadastrar
          </LoginButton>
        </form>
      </WrapperForm>

      <Link to="/" style={{ textDecoration: "none" }}>
        <ContainerSignUp>Já tem uma conta? Entre agora!</ContainerSignUp>
      </Link>
    </>
  );
}

const ContainerLogo = styled.div`
  font-family: "Saira Stencil One", cursive;
  font-size: 32px;
  font-weight: 400;
  color: #fff;
  margin-top: 159px;
  margin-bottom: 24px;
`;
const WrapperForm = styled.div`
  width: 326px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
const LoginInput = styled.input`
  height: 58px;
  width: 326px;
  border-radius: 5px;
  border: 1px solid #8c11be;
  background-color: #fff;
  margin-top: 12px;
  box-sizing: border-box;
  padding-left: 15px;
  font-size: 15px;
  &::placeholder {
    font-size: 20px;
    color: #000;
    padding-left: 10px;
  }
`;
const LoginButton = styled.button`
  height: 58px;
  width: 326px;
  background-color: #a328d6;
  border: 1px solid #a328d6;
  border-radius: 5px;
  color: #fff;
  font-size: 20px;
  margin-top: 13px;
`;
const ContainerSignUp = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  margin-top: 36px;
`;
