import styled from "styled-components";
import upvote from "../assets/upvote.png"
import activeUpvote from "../assets/activeUpvote.jpeg"
import downvote from "../assets/downvote.png"
import activeDownvote from "../assets/activeDownvote.jpeg"
import comments from "../assets/comments.png"
import { goToCommentsPage } from "../router/coordinator";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../App";
import { useEffect, useState } from "react";

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
    /* min-height: 5px; */
    display: flex;
    flex-direction: column;
    gap: 18px;
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

  span{
    display: flex;
    padding: 5px;
    border: 1px solid #ECECEC;
    background-color: #FBFBFB;
    border-radius: 14px;
    height: 30px;
  }

  .votes{
    justify-content: space-between;
    width: 98px;
  }

  .comments{
    justify-content: space-around;
    width: 65px;
  }
/* 
  img{

  } */
`
export const PostComment = (props) => {
  const navigate = useNavigate()
  // const [upvoteImage, setUpvoteImage] = useState(false)

  const headers = {
    headers: {
      authorization: localStorage.getItem("token")
    }
  }

  const upvoteOrDownvote = async (path, id, body, headers) => {
    // setUpvoteImage(true)
    try {
      await axios.put(BASE_URL + `${path}/${id}/vote`, body, headers)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  // useEffect(() => {
  //   setUpvoteImage(false)
  // }, [props.upvote])

  return (
    <Container length={props.content?.length}>
          <div>
            <p className="user">Enviado por: {props.creatorNickname}</p>
            <p className="content">{props.content}</p>
          </div>
          <span className="votes">
            <img src={upvote} onClick={() => upvoteOrDownvote(props.path, props.id, {vote: true}, headers)}/>
            <p>{props.upvote}</p>
            <img src={downvote} onClick={() => upvoteOrDownvote(props.path, props.id, {vote: false}, headers)}/>
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