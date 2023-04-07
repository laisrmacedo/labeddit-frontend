import { Footer } from "../components/Footer"
import { Headers } from "../components/Header"
import styled from "styled-components";
import { Container, InputForShortText, Radius25Btn } from "../components/styledcomponents";
import axios from "axios";
import { BASE_URL } from "../App";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { goToLoginPage, goToPostsPage } from "../router/coordinator";
import { useEffect } from "react";
import pen from "../assets/pen.png"

const Page = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 5%;
  
  >p{
    color: #808080;
    font-size: 18px;
  }
  
  >img{
    width: 40%;
    border-radius: 50%;
  }

  form{
    width:100%;
    input{
      height: 45px;
    }
  }

  .inputAvatar{
    display: flex;
    width:100%;
    height: 80px; 
    /* border: 1px solid blue; */

    span{
      width: 100%;
      display: flex;
      align-items: center;
      gap: 10px;

      h2{
      color: #808080;
      }
    }
  }
  
  .inputs{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    width:100%;
    height: 130px; 
    /* margin: 20px 0; */
    /* border: 1px solid red; */
    
    span{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;

      img{
        width: 22px;
        height: 22px;
        filter: opacity(0.5);
      }
    }
    p{
      color: #808080;
      font-size: 18px;
      text-transform: uppercase;
      font-weight: 100;
    }
    h5{
      color: red;
      font-size: 10px;
      align-self: start;
    }
    h2{
      color: #808080;
    }
  }
  
  .error{
    p{
      color: red;
      font-size: 10px;
    }
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
    /* border: 1px solid red; */

  a{
    color: #D5D8DE;
    font-size: 10px;
  }
`

export const UserPage = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({})
  const [editAvatar, setEditAvatar] = useState(true)
  const [editNickname, setEditNickname] = useState(true)
  const [editPassword, setEditPassword] = useState(true)

  const [form, setForm] = useState({
    nickname: "",
    email: "",
    password: ""
  })

  const [error, setError] = useState("")

  const handleClick = (e) => {
    e.preventDefault()
  }

  const onChangeForm = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const body = {
    avatar: form.avatar,
    nickname: form.nickname,
    password: form.password
  }

  const headers = {
    headers: {
      authorization: localStorage.getItem("token")
    }
  }

  const getUser = async (path, headers) => {
    try {
      const responde = await axios.get(BASE_URL + path, headers)
      setUser(responde.data)
    } catch (error) {
      if (error.response.data === "ERROR: Login failed.") {
        goToLoginPage(navigate)
      }
      console.log(error.response.data)
    }
  }

  useEffect(() => {
    if (localStorage.getItem("token") === "") {
      goToLoginPage(navigate)
    }
  }, [])

  useEffect(() => {
    getUser('users/user', headers)
  }, [user])

  const editUser = async (path, body, headers, btn) => {
    try {
      await axios.put(BASE_URL + path, body, headers)

      btn === 'Avatar' ? setEditAvatar(true) : btn === 'Nickname' ? setEditNickname(true) : setEditPassword(true)
    } catch (error) {
      setError(error.response.data)
      console.log(error.response.data)
    }
  }

  const logout = () => {
    localStorage.setItem("token", "")
    goToLoginPage(navigate)
  }

  const deleteUser = async (path, headers) => {
    try {
      await axios.delete(BASE_URL + path, headers)
      logout()
    } catch (error) {
      console.log(error.response.data)
    }
  }


  return (
    <>
      <Headers />
      <Container>
        <Page>
          <img src={user.avatar} onClick={() => setEditAvatar(false)} />
          <p>{user.email}</p>
          <form onSubmit={handleClick}>
            {editAvatar ?
              <div className="inputAvatar">
                <span>
                </span>
              </div>
              :
              <div className="inputAvatar">
                <span>
                  <InputForShortText
                    placeholder="Novo URL"
                    required
                    type="text"
                    name="avatar"
                    value={form.avatar}
                    onChange={onChangeForm}
                  />
                  <h2 onClick={() => editUser(`users/${user.id}`, body, headers, `Avatar`)}>OK</h2>
                </span>
              </div>
            }
            {editNickname ?
              <div className="inputs">
                <p>Apelido</p>
                <span>
                  <h2>{user.nickname}</h2>
                  <img src={pen} onClick={() => setEditNickname(false)} />
                </span>
              </div>
              :
              <div className="inputs">
                <p>Apelido</p>
                <span>
                  <InputForShortText
                    placeholder="Novo apelido"
                    required
                    type="text"
                    name="nickname"
                    value={form.nickname}
                    onChange={onChangeForm}
                  />
                  <h2 onClick={() => editUser(`users/${user.id}`, body, headers, `Nickname`)}>OK</h2>
                </span>
                {error === "ERROR: 'nickname' must be at least 4 characters." ? <h5>Apelido deve ter pelo menos 4 caracteres.</h5> : null}
                {error === "ERROR: 'nickname' already exists." ? <h5>Apelido já cadastrado.</h5> : null}
              </div>
            }
            {editPassword ?
              <div className="inputs">
                <p>Senha</p>
                <span>
                  <h2>-------</h2>
                  <img src={pen} onClick={() => setEditPassword(false)} />
                </span>
              </div>
              :
              <div className="inputs">
                <p>Senha</p>
                <span>
                  <InputForShortText
                    placeholder="Nova Senha"
                    required
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={onChangeForm}
                  />
                  <h2 onClick={() => editUser(`users/${user.id}`, body, headers, `Password`)}>OK</h2>
                </span>
                {error === "ERROR: 'password' must be between 8 and 12 characters, with uppercase and lowercase letters and at least one number and one special character." ?
              <h5>A senha deve ter entre 8 e 12 caracteres, com letras maiúscula e minúscula, pelos menos um número e um caracter especial.</h5> : null}
              </div>

            }
          </form>
          <p onClick={() => deleteUser(`users/${user.id}`, headers)}>DELETAR CONTA</p>
          <p onClick={() => logout()}>LOGOUT</p>
          <a href="https://www.flaticon.com/" title="icons">Ícones gratuitos de www.flaticon.com</a>
        </Page>
      </Container>
      <Footer />
    </>
  )
}