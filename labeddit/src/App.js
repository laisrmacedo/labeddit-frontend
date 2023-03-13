import styled from "styled-components";
import { Router } from "./router/Router";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <Container>
     <Router></Router>
    </Container>
  );
}

export default App;
