import { render, waitFor, screen } from "@testing-library/react"
import { LoginPage }  from '../pages/LoginPage'

// import userEvent from "@testing-library/user-event"
// import logoLogin from '../assets/logoLogin.png'
import axios from "axios"
import { BrowserRouter, Route, Routes } from "react-router-dom"

jest.mock("axios")

describe("LoginPage", () => {
    it("render image, title and subtitle", async () => {
      // axios.get.mockResolvedValueOnce()
      // const user = userEvent.setup()
      render(
        <BrowserRouter>
            <Routes>   
                <Route path={`/users/login`} element= {<LoginPage/>}/>
            </Routes>
        </BrowserRouter>)

        expect(screen.getByText(/O projeto de rede social da Labenu/i)).toBeInTheDocument()
        // await waitFor(() => { })
        screen.logTestingPlaygroundURL()

        // expect(title).toBeInTheDocument()
    })
})