import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../App";
import { Footer } from "../components/Footer"
import { Headers } from "../components/Header"
import { PostComment } from "../components/PostComment";
import { Box, Container, HorizontalLine, InputForLongText, Radius8Btn } from "../components/styledcomponents";
import { goToLoginPage } from "../router/coordinator";

export const PostsPage = () => {
  const navigate = useNavigate()

  const [allPosts, setAllPosts] = useState([])
  const [content, setContent] = useState("")
  const [avatar, setAvatar] = useState("")

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

  useEffect(() => {
    if(localStorage.getItem("token") === ""){
      goToLoginPage(navigate)
    }else{
      getAvatar('users/user', headers)
    }
  }, [])

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

  const getAvatar = async (path, headers) => {
    try {
      const responde = await axios.get(BASE_URL + path, headers)
      setAvatar(responde.data.avatar)
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
        avatar={avatar}
      />
      <Container>
        <div className="fixHeightPostsPage">
          <InputForLongText
            placeholder="Escreva seu post..."
            type="text"
            name="post"
            value={content}
            isLimit={content.length > 280 ? true : false}
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
                vote={post.vote}
              />
            )
          }).reverse()}
        </Box>
      </Container>
      <Footer />
    </>
  )
}