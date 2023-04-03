import { Footer } from "../components/Footer"
import logoLogin from '../assets/logoLogin.png'
import styled from "styled-components";
import { HorizontalLine, InputForShortText, Radius25Btn } from "../components/stedcomponents";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../App";
import { useNavigate } from "react-router-dom";
import { goToPostsPage, goToSignupPage } from "../router/coordinator";

const ContainerLoginPage = styled.div`
  height: 94%;
  width: 364px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form{
    width: 100%;
    p{
      color: red;
      font-size: 10px;
    }
  }

  img{
    height: 142px;
  }

  p{
    color: black;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 100;
  }

  .inputs{
    display: flex;
    flex-direction: column;
    gap: 8px;
    width:100%;
    margin: 107px 0 56px 0;
    color: #45525B;
  }

  .login{
    background: linear-gradient(90deg, #FF6489, #F9B24E);
  }
  
  .signup{
    background-color: #FFFFFF;
    border: 1px solid #FE7E02;
    color: #FE7E02;
  }
`

export const LoginPage = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const [error, setError] = useState("")

  const handleClick = (e) => {
    e.preventDefault()
    login()
  }

  const onChangeForm = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const body = {
    email: form.email,
    password: form.password
  }

  const login = async () => {
    try {
      const response = await axios.post(BASE_URL + `users/login`, body)
      localStorage.setItem("token", response.data.token)
      goToPostsPage(navigate)
    } catch (error) {
      console.log(error.response.data)
      setError(error.response.data)
    }
  }

  // const clearForm = () => {
  //   setForm({})
  //   localStorage.setItem("form", JSON.stringify({}))
  // }

  return (
    <>
      <ContainerLoginPage>
        <img src={logoLogin} />
        <p>O projeto de rede social da Labenu</p>
        <form onSubmit={handleClick}>
          <div className="inputs">
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
            {error === "ERROR: 'email' or 'password' are wrong." ?
            <p>E-mail ou senha incorreta.</p> : null
            }
          </div>
          <Radius25Btn id="login" className="login"> Continue </Radius25Btn>
          <HorizontalLine />
        </form>
        <Radius25Btn id="signup" className="signup" onClick={() => goToSignupPage(navigate)}> Crie uma conta </Radius25Btn>
      </ContainerLoginPage>
      <Footer />
    </>
  )
}