import { Body } from "./GlobalStyle";
import { Router } from "./router/Router";

export const BASE_URL = 'http://localhost:3003/'

function App() {
  return (
    <Body>
     <Router></Router>
    </Body>
  );
}

export default App;
