import styled from "styled-components";
import upvote from "../assets/upvote.png"
import downvote from "../assets/downvote.png"
import comments from "../assets/comments.png"
import { goToCommentsPage } from "../router/coordinator";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../App";

const Container = styled.div`
  min-height: 120px;
  width: 100%;
  border: 1px solid #E0E0E0;
  background-color: #FBFBFB;
  padding: 9px 10px;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
  gap: 18px;

  div{
    width: 100%;
    min-height: 5px;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .user{
    color: #6F6F6F;
    font-size: 12px;
  }

  .content{
    color: #000;
    font-size: 18px;
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
`
export const PostComment = (props) => {
  const navigate = useNavigate()

  return (
    <Container>

          <div>
            <p className="user">Enviado por: {props.creatorNickname}</p>
            <p className="content">{props.content}</p>
          </div>
          <span className="votes">
            <img src={upvote} />
            <p>{props.upvote}</p>
            <img src={downvote} />
          </span>


      {props.isPost &&
        <span className="comments" onClick={() => goToCommentsPage(navigate, props.postId)}>
          <img src={comments} />
          <p>{props.comments}</p>
        </span>
      }
    </Container>
  )
}