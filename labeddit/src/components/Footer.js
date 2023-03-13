import styled from "styled-components";
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'

const Container = styled.div`
  height: 50px;
  width: 100vw;
  /* background-color: #5D5D5D; */
  display: flex;
  align-items: flex-end;
  justify-content: center;
  bottom: 0px;
  
  border: 1px red solid;
  div{
    height: 100%;
    max-width: 1275px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }
  p{
    font-weight: 100;
    font-size: 12px;
    text-transform: uppercase;
    color: #C4C4C4;
  }
  span{
    display: flex;
    align-items: center;
    gap: 5px;
    a{
      display: flex;
      align-items: center;
    }
  }
  img{
    width: 20px;
    filter: invert();
    &:hover{
      filter: none;
    }
    &:active{
      filter: brightness(1.5);
    }
  }
  `

export const Footer = () => { 

  return(
    <Container>
      <div>
        <p>Designed by LABENU</p>
        <p>|</p>
        <span>
          <p>Built by Laís Macedo</p>
            <a href="https://www.linkedin.com/in/laisrmacedo/" target="_blank">
                <img src={linkedin} alt=""/>
            </a>
            <a href="https://github.com/laisrmacedo" target="_blank">
                <img src={github} alt=""/>
            </a>
        </span>
      </div>
    </Container>
  )
}