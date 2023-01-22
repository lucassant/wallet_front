import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import AppContext from "../AppContext/Context";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(AppContext);

  const navigate = useNavigate();

  function signIn(event) {
    event.preventDefault();

    const URL = `${process.env.REACT_APP_API_URL}/sign-in`;

    axios
      .post(URL, { email: email, password: password })
      .then((res) => {
        const loggedUser = {
          name: res.data.user.name,
          email: email,
          token: res.data.token,
        };
        setUser(loggedUser);
        navigate("/home");
      })
      .catch((error) => {
        alert("Usuário ou senha incorretos!");
      });
  }

  return (
    <>
      <ContainerLogo>
        <h1> MyWallet</h1>
      </ContainerLogo>
      <WrapperForm>
        <form onSubmit={signIn}>
          <LoginInput
            data-test="email"
            type="email"
            placeholder="E-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <LoginInput
            data-test="password"
            type="password"
            placeholder="Senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <LoginButton data-test="sign-in-submit" type="submit">
            Entrar
          </LoginButton>
        </form>
      </WrapperForm>

      <Link to="/cadastro" style={{ textDecoration: "none" }}>
        <ContainerSignUp>Primeira vez? Cadastre-se!</ContainerSignUp>
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
