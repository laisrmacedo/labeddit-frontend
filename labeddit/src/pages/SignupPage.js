import { Footer } from "../components/Footer"
import { Headers } from "../components/Header"
import styled from "styled-components";
import { Container, InputForShortText, Radius25Btn } from "../components/styledcomponents";

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
  return (
    <>
      <Headers
        isSignupPage={true}
      />
      <Container>
        <ContainerSignupPage>
          <p>Olá, boas vindas ao LabEddit ;)</p>
          <div className="inputs">
            <InputForShortText placeholder="Apelidos" />
            <InputForShortText placeholder="E-mail" />
            <InputForShortText placeholder="Senha" />
          </div>
          <div className="terms">
            <p>Ao continuar, você concorda com o nosso Contrato de usuário e nossa Política de Privacidade</p>
            <span>
              <input type='checkbox' />
              <p>Eu concordo em receber emails sobre coisas legais no Labeddit</p>
            </span>
          </div>
          <Radius25Btn className="signup"> Cadastrar </Radius25Btn>
        </ContainerSignupPage>
      </Container>
      <Footer />
    </>
  )
}