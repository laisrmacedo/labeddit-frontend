import { Footer } from "../components/Footer"
import { Headers } from "../components/Header"
import styled from "styled-components";

const Container = styled.div`
  height:calc(94% - 50px - 44px);
  width: 364px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 2px solid blue; */

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
    color: #45525B;
    input{
      padding: 20px 16px;
      height: 60px;
      border: 1px solid #D5D8DE;
      border-radius: 4px;
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
      /* border: 1px solid red; */
      display:flex;
      align-items: center;
      justify-content: space-between;
      gap: 11px;
    }
  }

  button{
    width:100%;
    height: 51px;
    border-radius: 25px;
    border: none;
    background: linear-gradient(90deg, #FF6489, #F9B24E);
  }
`

export const SignupPage = () => {
  return (
    <>
      <Headers
        isSignupPage={true}
      />
      <Container>
        <p>Olá, boas vindas ao LabEddit ;)</p>
        <div className="inputs">
          <input placeholder="Apelidos" />
          <input placeholder="E-mail" />
          <input placeholder="Senha" />
        </div>
        <div className="terms">
          <p>Ao continuar, você concorda com o nosso Contrato de usuário e nossa Política de Privacidade</p>
          <span>
            <input type='checkbox' />
            <p>Eu concordo em receber emails sobre coisas legais no Labeddit</p>
          </span>
        </div>
        <button className="login"> Cadastrar </button>
      </Container>
      <Footer />
    </>
  )
}