import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CommentsPage } from "../pages/CommentsPage";
import { LoginPage } from "../pages/LoginPage";
import { PostsPage } from "../pages/PostsPage";
import { SignupPage } from "../pages/SignupPage";
import { UserPage } from "../pages/UserPage";

export const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path={`/users/login`} element={<LoginPage/>}/>
        <Route path={`/users/signup`} element={<SignupPage/>}/>
        <Route path={`/posts`} element={<PostsPage/>}/>
        <Route path={`/posts/:id`} element={<CommentsPage/>}/>
        <Route path={`/users/user`} element={<UserPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}