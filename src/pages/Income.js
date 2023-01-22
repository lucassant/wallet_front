import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import AppContext from "../AppContext/Context";

export default function Entry(token) {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { user } = useContext(AppContext);

  async function createEntry(e) {
    e.preventDefault();

    const URL = `${process.env.REACT_APP_API_URL}/transaction`;
    const body = { value, description, type: "entry" };
    const configuration = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    if (isNaN(Number(value))) return alert("Apenas números");

    axios
      .post(URL, body, configuration)
      .then((response) => {
        alert("Entrada adicionada com sucesso!");
        navigate("/home");
      })
      .catch((error) => {
        alert(error.response.data);
      });
  }

  return (
    <>
      <StyledHeader>
        <p>Nova entrada</p>
      </StyledHeader>
      <WrapperForm>
        <form onSubmit={(e) => createEntry(e)}>
          <EntryInput
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            data-test="registry-amount-input"
            placeholder="Valor"
          />
          <EntryInput
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            data-test="registry-name-input"
            placeholder="Descrição"
          />
          <LoginButton type="submit" data-test="registry-save">
            Salvar entrada
          </LoginButton>
        </form>
      </WrapperForm>
    </>
  );
}

const StyledHeader = styled.div`
  width: 375px;
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  margin-right: 24px;
  margin-bottom: 40px;
  p {
    margin-left: 24px;
    font-size: 26px;
    font-weight: 700;
    color: #fff;
  }
`;
const WrapperForm = styled.div`
  width: 326px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const EntryInput = styled.input`
  height: 58px;
  width: 326px;
  border-radius: 5px;
  border: 1px solid #8c11be;
  background-color: #fff;
  margin-top: 12px;
  margin-right: 24px;
  box-sizing: border-box;
  padding-left: 15px;
  font-size: 15px;
  &::placeholder {
    font-size: 20px;
    color: #000;
    padding-left: 15px;
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
  margin-right: 24px;
`;
