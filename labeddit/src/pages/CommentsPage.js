import styled from "styled-components";
import { Footer } from "../components/Footer"
import { Headers } from "../components/Header"
import { PostComment } from "../components/PostComment"

const Container = styled.div`
  height:calc(94% - 50px - 44px);
  width: 364px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 0 0 0;
  /* justify-content: center; */
  /* border: 2px solid blue; */
  input{
    height: 131px;
    width: 100%;
    padding: 18px 0 90px 18px;
    border: 1px solid #D5D8DE;
    border-radius: 8px;
    background-color: #EDEDED;
    margin: 12px 0;
  }
  >span{
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, #FF6489, #F9B24E);
    margin: 16px 0 36px 0;
  }
  button{
    width:100%;
    height: 51px;
    border-radius: 8px;
    border: none;
    background: linear-gradient(90deg, #FF6489, #F9B24E);
  }
` 

export const CommentsPage = () => {
  return (
    <>
    <Headers
    isCommentsPage={true}/>
    <Container>
    <PostComment/>
    <input placeholder="Adicionar comentário"/>
      <button>Responder</button>
      <span></span>
      <div>
        <PostComment/>
      </div>
    </Container>
    
    <Footer/>
    </>
  )
}