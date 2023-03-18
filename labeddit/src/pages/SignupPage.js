import { Footer } from "../components/Footer"
import { Headers } from "../components/Header"
import styled from "styled-components";
import { Container, InputForShortText, Radius25Btn } from "../components/styledcomponents";
import axios from "axios";
import { BASE_URL } from "../App";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { goToPostsPage } from "../router/coordinator";

const ContainerSignupPage = styled.div`
  >p{
    color: black;
    font-size: 33px;
  }

  .inputs{
    display: flex;
    flex-direction: column;
    gap: 8px;
    width:100%;
    margin: 107px 0 56px 0;
  }

  .terms{
    margin: 65px 0 28px 0;
    display: flex;
    flex-direction: column;
    gap:17px;

    p{
      font-size: 14px;
      color: black;
    }

    input{
      width: 18px;
      height: 18px;
    }

    span{
      display:flex;
      align-items: center;
      justify-content: space-between;
      gap: 11px;
    }
  }

  .signup{
    background: linear-gradient(90deg, #FF6489, #F9B24E);
  }
`

export const SignupPage = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    nickname: "",
    email: "",
    password: ""
  })

  const handleClick = (e) => {
    e.preventDefault()
    signup()
  }

  const onChangeForm = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const body = {
    nickname: form.nickname,
    email: form.email,
    password: form.password
  }

  const signup = async () => {
    try {
      const response = await axios.post(BASE_URL + `users/signup`, body)
      localStorage.setItem("token", response.data.token)
      goToPostsPage(navigate)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  return (
    <>
      <Headers
        isSignupPage={true}
      />
      <Container>
        <ContainerSignupPage>
          <p>Olá, boas vindas ao LabEddit ;)</p>
          <form onSubmit={handleClick}>
            <div className="inputs">
              <InputForShortText
                placeholder="Apelido"
                required
                type="text"
                name="nickname"
                value={form.nickname}
                onChange={onChangeForm}
              />
              <InputForShortText 
                placeholder="E-mail" 
                required
                type="text"
                name="email"
                value={form.email}
                onChange={onChangeForm}
              />
              <InputForShortText 
                placeholder="Senha"
                required
                type="password"
                name="password"
                value={form.password}
                onChange={onChangeForm}
              />
            </div>
            <div className="terms">
              <p>Ao continuar, você concorda com o nosso Contrato de usuário e nossa Política de Privacidade</p>
              <span>
                <input type='checkbox' />
                <p>Eu concordo em receber emails sobre coisas legais no Labeddit</p>
              </span>
            </div>
            <Radius25Btn className="signup"> Cadastrar </Radius25Btn>
          </form>
        </ContainerSignupPage>
      </Container>
      <Footer />
    </>
  )
}