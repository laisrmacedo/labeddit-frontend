import styled from "styled-components";
import logoHeader from '../assets/logoHeader.png'

const Container = styled.div`
  height: 50px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #EDEDED;
  position: relative;
  margin-top: 44px;

  div{
    /* border: 1px red solid; */
    width: 364px;
    display: flex;
    justify-content: space-between;
    position: relative;
  }

  .closeBtn{
    display: flex;
    align-items: center;
    width:35px;
    display:flex;

    div{
      position: absolute;
      left: 12px;
      background-color: #A3A3A3;
      height: 34px;
      width: 1px;
    }
    .rotate45 {
      transform: rotate(45deg);
    }
    .rotate270 {
      transform: rotate(-45deg);
    } 
  }

  img{
    height: 32px;
  }

  .textBtn{
    /* border: 1px red solid; */
    display: flex;
    align-items: center;
    color: #4088CB;
  }
  `

export const Headers = () => { 

  return(
    <Container>
      <div>
        <span className="closeBtn">
          <div className="rotate45"></div>
          <div className="rotate270"></div>
        </span>
        <img src={logoHeader}/>
        <span className="textBtn">
          Logout
        </span>
      </div>
    </Container>
  )
}