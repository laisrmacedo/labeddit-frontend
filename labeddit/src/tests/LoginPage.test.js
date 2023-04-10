import { render, waitFor, screen } from "@testing-library/react"
import { LoginPage }  from '../pages/LoginPage'

// import userEvent from "@testing-library/user-event"
// import logoLogin from '../assets/logoLogin.png'
import axios from "axios"
// import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Router } from "../router/Router"
import { createMemoryHistory } from 'history'

// jest.mock("axios")

const renderWithRouter = (component) => {
    const history = createMemoryHistory()
    return { 
    ...render (
    <Router history={history}>
        {component}
    </Router>
    )
  }
}

describe("LoginPage", () => {
    it("render image, title and subtitle", async () => {
        renderWithRouter(<LoginPage/>)
        screen.logTestingPlaygroundURL()

      // axios.get.mockResolvedValueOnce()
      // const user = userEvent.setup()

    //   render(
    //     <BrowserRouter>
    //         <Routes>
    //             <Route path={`/users/login`} element={<LoginPage/>}/>
    //         </Routes>
    //     </BrowserRouter>)

    //     screen.debug()

    // render(<Router/>)

        // expect(screen.getByText(/O projeto de rede social da Labenu/i)).toBeInTheDocument()
        // await waitFor(() => { })

        // expect(title).toBeInTheDocument()
    })
})