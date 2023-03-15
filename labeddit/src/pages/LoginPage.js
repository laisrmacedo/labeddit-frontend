import { Footer } from "../components/Footer"
import logoLogin from '../assets/logoLogin.png'
import styled from "styled-components";
import { HorizontalLine, InputForShortText, Radius25Btn } from "../components/styledcomponents";

const ContainerLoginPage = styled.div`
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
  return (
    <>
      <ContainerLoginPage>
        <img src={logoLogin} />
        <p>O projeto de rede social da Labenu</p>
        <div className="inputs">
          <InputForShortText placeholder="E-mail" />
          <InputForShortText placeholder="Senha" />
        </div>
        <Radius25Btn className="login"> Continue </Radius25Btn>
        <HorizontalLine />
        <Radius25Btn className="signup"> Crie uma conta </Radius25Btn>
      </ContainerLoginPage>
      <Footer />
    </>
  )
}