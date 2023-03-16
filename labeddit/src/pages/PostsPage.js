import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../App";
import { Footer } from "../components/Footer"
import { Headers } from "../components/Header"
import { PostComment } from "../components/PostComment";
import { Box, Container, HorizontalLine, InputForLongText, Radius8Btn } from "../components/styledcomponents";

export const PostsPage = () => {
  const [allPosts, setAllPosts] = useState([])
  const [post, setPost] = useState("")

  const onChangePost = (e) => {
    setPost(e.target.value)
  }

  const headers = {
    headers: {
      authorization: localStorage.getItem("token")
    }
  }

  const body = {
    content: post
  }

  const createPost = async () => {
    try {
      await axios.post(BASE_URL + `posts`, body, headers)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  const getPosts = async () => {
    try {
      const response = await axios.get(BASE_URL + `posts`, headers)
      setAllPosts(response.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  useEffect(() => {
    getPosts()
  }, [allPosts])

  return (
    <>
      <Headers
        isPostsPage={true}
      />
      <Container>
        <InputForLongText 
          placeholder="Escreva seu post..."
          type="text"
          name="post"
          value={post}
          onChange={onChangePost}
        />
        <Radius8Btn onClick={() => createPost()}>Postar</Radius8Btn>
        <HorizontalLine />
        <Box>
          {allPosts.map((post) => {
            return <PostComment key={post.id} postId={post.id} isPost={true}/>
          })}
        </Box>
      </Container>
      <Footer/>
    </>
  )
}