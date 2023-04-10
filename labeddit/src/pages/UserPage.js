import { Footer } from "../components/Footer"
import { Headers } from "../components/Header"
import styled from "styled-components";
import { Container, InputForShortText } from "../components/styledcomponents";
import axios from "axios";
import { BASE_URL } from "../App";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { goToLoginPage } from "../router/coordinator";
import { useEffect } from "react";

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
  }
  
  .inputs{
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 8px;
    width: 90%;
    height: 90px; 
    margin: 0 auto;
    /* border: 1px solid red; */

    span{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      input{
        height: 40px;
        width: 80%;
        font-weight: 400;
      }
      h2{
        color: #808080;
        cursor: pointer;
      }
    }
    h5{
      color: red;
      font-size: 10px;
    }
  }

  >span{
    display: flex;
    flex-direction: column;
    align-items: center;
    a{
      color: #808080;
      font-size: 10px;
      justify-self: flex-end;
    }
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

  const setEdit = (avatar, nickname, password) => {
    setEditAvatar(avatar)
    setEditNickname(nickname)
    setEditPassword(password)
  }


  return (
    <>
      <Headers />
      <Container>
        <Page>
          <img src={user.avatar} onClick={() => setEdit(false, true, true)} />
          <p>{user.email}</p>
          <form onSubmit={handleClick}>
            <div className="inputs">
              {editAvatar ?
                <></>
                :
                <>
                  <span>
                    <InputForShortText
                      placeholder="Novo URL para seu avatar"
                      required
                      type="text"
                      name="avatar"
                      value={form.avatar}
                      onChange={onChangeForm}
                    />
                    <h2 onClick={() => editUser(`users/${user.id}`, body, headers, `Avatar`)}>OK</h2>
                  </span>
                  {error === "ERROR: 'avatar' must be a valid image URL." ? <h5>URL inválido.</h5> : null}
                </>
              }
              {editNickname ?
                <></>
                :
                <>
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
                </>
              }
              {editPassword ?
                <></>
                :
                <>
                  <span>
                    <InputForShortText
                      placeholder="Nova senha"
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
                </>
              }
            </div>
          </form>
          <p onClick={() => setEdit(true, false, true)}>MUDAR APELIDO</p>
          <p onClick={() => setEdit(true, true, false)}>MUDAR SENHA</p>
          <p onClick={() => deleteUser(`users/${user.id}`, headers)}>DELETAR CONTA</p>
          <p onClick={() => logout()}>LOGOUT</p>
          <span>
            <a href="https://www.flaticon.com/free-icons/arrows" title="arrows icons">Arrows icons created by lutfix - Flaticon</a>
            <a href="https://www.flaticon.com/free-icons/delete" title="delete icons">Delete icons created by Ilham Fitrotul Hayat - Flaticon</a>
          </span>
        </Page>
      </Container>
      <Footer />
    </>
  )
}