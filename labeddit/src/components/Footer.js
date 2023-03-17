import styled from "styled-components";
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'

const Container = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  bottom: 0px;
  margin-top: 10px;
  
  div{
    height: 100%;
    width: 364px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  p{
    font-weight: 100;
    font-size: 8px;
    text-transform: uppercase;
    color: #C4C4C4;
  }
  span{
    display: flex;
    align-items: center;
    gap: 8px;
    a{
      display: flex;
      align-items: center;
    }
  }
  img{
    width: 16px;
    filter: brightness(2);
    &:active{
      filter: brightness(1.5);
    }
  }
  `

export const Footer = () => {

  return (
    <Container>
      <div>
        <span>
        <p>Designed by LABENU</p>
        <p>|</p>
        <p>Built by Laís Macedo</p>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/laisrmacedo/" target="_blank">
            <img src={linkedin} alt="" />
          </a>
          <a href="https://github.com/laisrmacedo" target="_blank">
            <img src={github} alt="" />
          </a>
        </span>
      </div>
    </Container>
  )
}