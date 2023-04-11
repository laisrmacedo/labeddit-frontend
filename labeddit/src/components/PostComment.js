import styled from "styled-components";
import upvote from "../assets/upvote.png"
import activeUpvote from "../assets/activeUpvote.png"
import downvote from "../assets/downvote.png"
import activeDownvote from "../assets/activeDownvote.png";
import comments from "../assets/comments.png"
import { goToCommentsPage } from "../router/coordinator";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../App";
import trash from "../assets/delete.png";

const Container = styled.div`
  min-height: ${(props) => (props.length <= 35 ? '120px' : props.length > 200 ? '294px' : props.length + 82 + 'px')};
  width: 100%;
  border: 1px solid #E0E0E0;
  background-color: #FBFBFB;
  padding: 9px 10px;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
  gap: 8px;

  div{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 18px;

    span{
      display: flex;
      justify-content: space-between;

      img{
        height: 16px;
        filter: opacity(0.4);
      }
    }
  }

  .user{
    color: #6F6F6F;
    font-size: 11px;
  }

  .content{
    color: #000;
    font-size: 16px;
  }

  p{
    color: #6F6F6F;
    font-size: 12px;
  }

  >span{
    display: flex;
    padding: 5px;
    border: 1px solid #ECECEC;
    background-color: #FBFBFB;
    border-radius: 14px;
    height: 30px;
    align-items: center;

    img{
      height: 16px;
    }
  }

  .votes{
    justify-content: space-between;
    width: 98px;
  }

  .comments{
    justify-content: space-around;
    width: 65px;
  }
`
export const PostComment = (props) => {
  const navigate = useNavigate()

  const headers = {
    headers: {
      authorization: localStorage.getItem("token")
    }
  }

  const upvoteOrDownvote = async (path, id, body, headers) => {
    try {
      await axios.put(BASE_URL + `${path}/${id}/vote`, body, headers)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  const toDelete = async (path, id, headers) => {
    try {
      await axios.delete(BASE_URL + `${path}/${id}`, headers)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  return (
    <Container length={props.content?.length}>
      <div>
        <span>
          <p className="user">Enviado por: {props.creatorNickname}</p>
          {props.isPost ? 
            ((props.creatorNickname === props.user || props.user === "bigboss") ? <img src={trash} onClick={() => toDelete("posts", props.id, headers)} /> : <></>):
            ((props.creatorNickname === props.user || props.user === "bigboss") ? <img src={trash} onClick={() => toDelete("comments", props.id, headers)} /> : <></>)
          }
        </span>
        <p className="content">{props.content}</p>
      </div>
      <span className="votes">
        <img src={props.vote === "up" ? activeUpvote : upvote} onClick={() => upvoteOrDownvote(props.path, props.id, { vote: true }, headers)} />
        <p>{props.upvote}</p>
        <img src={props.vote === "down" ? activeDownvote : downvote} onClick={() => upvoteOrDownvote(props.path, props.id, { vote: false }, headers)} />
      </span>
      {props.isPost &&
        <span className="comments" onClick={() => goToCommentsPage(navigate, props.id)}>
          <img src={comments} />
          <p>{props.comments}</p>
        </span>
      }
    </Container>
  )
}