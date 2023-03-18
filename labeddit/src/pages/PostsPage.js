import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../App";
import { Footer } from "../components/Footer"
import { Headers } from "../components/Header"
import { PostComment } from "../components/PostComment";
import { Box, Container, HorizontalLine, InputForLongText, Radius8Btn } from "../components/styledcomponents";

export const PostsPage = () => {
  const [allPosts, setAllPosts] = useState([])
  const [content, setContent] = useState("")

  const onChangePost = (e) => {
    setContent(e.target.value)
  }

  const headers = {
    headers: {
      authorization: localStorage.getItem("token")
    }
  }

  const body = {
    content: content
  }

  const createPost = async () => {
    try {
      await axios.post(BASE_URL + `posts`, body, headers)
      setContent("")
    } catch (error) {
      console.log(error.response.data)
    }
  }

  const getPosts = async (path, headers) => {
    try {
      const responde = await axios.get(BASE_URL + path, headers)
      setAllPosts(responde.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  useEffect(() => {
    getPosts('posts', headers)
  }, [allPosts])

  return (
    <>
      <Headers
        isPostsPage={true}
      />
      <Container>
        <div className="fixHeightPostsPage">
          <InputForLongText
            placeholder="Escreva seu post..."
            type="text"
            name="post"
            value={content}
            onChange={onChangePost}
          />
          <Radius8Btn onClick={() => createPost()}>Postar</Radius8Btn>
        </div>
        <HorizontalLine />
        <Box>
          {allPosts.map((post) => {
            return (
              <PostComment
                key={post.id}
                id={post.id}
                path={'posts'}
                creatorNickname={post.creatorNickname}
                content={post.content}
                upvote={post.upvote}
                comments={post.comments.length}
                isPost={true}
              />
            )
          }).reverse()}
        </Box>
      </Container>
      <Footer />
    </>
  )
}