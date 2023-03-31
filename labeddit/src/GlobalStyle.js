import { createGlobalStyle } from 'styled-components';
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    font-weight: 100;
    font-family: 'Poppins', sans-serif;
    color: white;
    ::-webkit-scrollbar-track {
      background: #FFF; 
    };
    ::-webkit-scrollbar{
      width: 8px;
    };
    ::-webkit-scrollbar-thumb {
      background: #EDEDED; 
      border-radius: 4px;
    };
    ::-webkit-scrollbar-thumb:hover {
      background: #D5D8DE; 
    }
    ::-webkit-scrollbar-thumb:active {
      background: #D5D8DE; 
    }
  }
`

export const Body = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`