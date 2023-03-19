import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../App";
import { Footer } from "../components/Footer"
import { Headers } from "../components/Header"
import { PostComment } from "../components/PostComment"
import { Container, HorizontalLine, InputForLongText, Radius8Btn } from "../components/styledcomponents";

export const CommentsPage = () => {
  const { id } = useParams()
  const [postById, setPostById] = useState({})

  const headers = {
    headers: {
      authorization: localStorage.getItem("token")
    }
  }

  const getPostById = async (path, headers) => {
    try {
      const responde = await axios.get(BASE_URL + path, headers)
      setPostById(responde.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  useEffect(() => {
    getPostById(`posts/${id}`, headers)
  }, [postById.comments])

  const [comment, setComment] = useState("")

  const onChangeComment = (e) => {
    setComment(e.target.value)
  }

  const body = {
    content: comment
  }

  const createPost = async () => {
    try {
      await axios.post(BASE_URL + `comments/${id}/post`, body, headers)
      setComment("")
    } catch (error) {
      console.log(error.response.data)
    }
  }

  return (
    <>
      <Headers
        isCommentsPage={true} />
      <Container gap={true}>
        <PostComment
          isPost={true}
          id={postById.id}
          path={'posts'}
          creatorNickname={postById.creatorNickname}
          content={postById.content}
          upvote={postById.upvote}
          comments={postById.comments?.length}
        />
        <div className="fixHeightCommentsPage">
          <InputForLongText
            placeholder="Adicionar comentário"
            type="text"
            name="post"
            value={comment}
            isLimit={comment.length >= 280 ? true : false}
            onChange={onChangeComment}
          />
          <Radius8Btn onClick={() => createPost()}>Responder</Radius8Btn>
        <HorizontalLine margin={true}/>
        </div>
        {postById.comments?.reverse().map((comment) => {
          return <PostComment
            key={comment.id}
            id={comment.id}
            path={'comments'}
            isPost={false}
            creatorNickname={comment.creatorNickname}
            content={comment.content}
            upvote={comment.upvote}
          />
        }).reverse()}
      </Container>
      <Footer />
    </>
  )
}