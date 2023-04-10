import { Body } from "./GlobalStyle";
import { Router } from "./router/Router";

// export const BASE_URL = 'http://localhost:3003/'
export const BASE_URL = 'https://labeddit-backend-deploy.onrender.com/'

function App() {
  return (
    <Body>
     <Router></Router>
    </Body>
  );
}

export default App;
