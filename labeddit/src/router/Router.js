import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { SignupPage } from "../pages/SignupPage";

export const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path={`/users/login`} element={<LoginPage/>}/>
        <Route path={`/users/signup`} element={<SignupPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}