import styled from "styled-components";
import upvote from "../assets/upvote.png"
import downvote from "../assets/downvote.png"
import comments from "../assets/comments.png"

const Container = styled.div`
  min-height: 120px;
  width: 364px;
  border: 1px solid #E0E0E0;
  background-color: #FBFBFB;
  padding: 9px 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 18px;
  .user{
    color: #6F6F6F;
    font-size: 12px;
  }
  .content{
    color: #000;
    font-size: 18px;
  }
  div{
    display: flex;
    gap: 10px;
    p{
      color: #6F6F6F;
      font-size: 12px;
    }
    span{
      display: flex;
      padding: 5px;
      border: 1px solid #ECECEC;
      background-color: #FBFBFB;
      border-radius: 14px;
      height: 28px;
    }
    .votes{
      justify-content: space-between;
    width: 98px;
    }
    .comments{
      justify-content: space-around;

    width: 65px;
    }
  }
`
export const PostComment = () => {
  return (
    <Container>
      <p className="user">Enviado por: ----</p>
      <p className="content">Porque a maioria dos desenvolvedores usam Linux? ou as empresas de tecnologia usam Linux ?</p>
      <div>
        <span className="votes">
          <img src={upvote} />
          <p>N</p>
          <img src={downvote} />
        </span>
        <span className="comments">
        <img src={comments} />
          <p>N</p>
        </span>
      </div>
    </Container>
  )
}