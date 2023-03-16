import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../App";
import { Footer } from "../components/Footer"
import { Headers } from "../components/Header"
import { PostComment } from "../components/PostComment"
import { Box, Container, HorizontalLine, InputForLongText, Radius8Btn } from "../components/styledcomponents";

export const CommentsPage = () => {
  const { id } = useParams();
  const [postComments, setPostComments] = useState([])
  const [comment, setComment] = useState("")

  const onChangeComment = (e) => {
    setComment(e.target.value)
  }

  const headers = {
    headers: {
      authorization: localStorage.getItem("token")
    }
  }

  const body = {
    content: comment
  }

  const createPost = async () => {
    try {
      await axios.post(BASE_URL + `comments/${id}/post`, body, headers)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  //falta atualizar a pagina

  useEffect(() => {
    
  }, [postComments])

  return (
    <>
      <Headers
        isCommentsPage={true} />
      <Container>
        <div>
          <PostComment postId={id} isPost={true} setPostComments={setPostComments}/>
          <InputForLongText 
            placeholder="Adicionar comentário" 
            type="text"
            name="post"
            value={comment}
            onChange={onChangeComment}
          />
        </div>
        <Radius8Btn onClick={() =>  createPost()}>Responder</Radius8Btn>
        <HorizontalLine />
        <Box>
          {postComments.map((comment) => {
            return <PostComment 
              key={comment.id}
              isPost={false}  
              commentNickname={comment.creatorNickname} 
              commentContent={comment.content}
              commentUpvote={comment.upvote}
            />
          })}
        </Box>
      </Container>

      <Footer />
    </>
  )
}