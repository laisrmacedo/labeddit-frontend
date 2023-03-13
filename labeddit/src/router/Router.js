import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<HomePage/>}/>
        <Route path={`/pokedex`} element={<PokedexPage/>}/>
        <Route path={`/details/:name`} element={<DetailsPage/>}/>
        <Route path='*' element={<ErrorPage/>}/> */}
      </Routes>
    </BrowserRouter>
  )
}