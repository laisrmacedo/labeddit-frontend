import { Footer } from "../components/Footer"
import logoLogin from '../assets/logoLogin.png'
import styled from "styled-components";

const Container = styled.div`
  height: 94%;
  width: 364px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 2px solid blue; */

  img{
    height: 142px;
  }
  p{
    color: black;
    font-size: 16px;
  }
  .inputs{
    display: flex;
    flex-direction: column;
    gap: 8px;
    width:100%;
    margin: 107px 0 56px 0;
    color: #45525B;
    input{
      padding: 20px 16px;
      height: 60px;
      border: 1px solid #D5D8DE;
      border-radius: 4px;
    }
  }

  button{
    width:100%;
    height: 51px;
    border-radius: 25px;
    border: none;
  }
  .login{
    background: linear-gradient(90deg, #FF6489, #F9B24E);
  }
  .signup{
    background-color: #FFFFFF;
    border: 1px solid #FE7E02;
    color: #FE7E02;
  }

  span{
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, #FF6489, #F9B24E);
    margin: 18px 0;
  }
`


export const LoginPage = () => {
  return (
    <>
      <Container>
        <img src={logoLogin} />
        <p>O projeto de rede social da Labenu</p>
        <div className="inputs">
          <input placeholder="E-mail" />
          <input placeholder="Senha" />
        </div>
        <button className="login"> Continue </button>
        <span></span>
        <button className="signup"> Crie uma conta </button>
      </Container>
      <Footer />
    </>
  )
}