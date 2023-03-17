import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logoHeader from '../assets/logoHeader.png'
import { goToLoginPage, goToPostsPage } from "../router/coordinator";

const Container = styled.div`
  min-height: 50px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #EDEDED;
  position: relative;
  margin: 44px 0 32px 0;

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
    justify-content: start;
    width: 70px;
    /* border: 1px red solid; */

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
    width: 70px;
    display: flex;
    justify-content: end;
    align-items: center;
    p{
      color: #4088CB;
      font-size: 18px; 
    }
  }
  `

export const Headers = (props) => {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.setItem("token", "")
    goToLoginPage(navigate)
  }

  return (
    <Container>
      <div>
        <span onClick={() => goToPostsPage(navigate)} className="closeBtn">
          {props.isCommentsPage &&
            <>
              <div className="rotate45"></div>
              <div className="rotate270"></div>
            </>
          }
        </span>
        <img src={logoHeader} />
        <span className="textBtn">
        {props.isCommentsPage &&
          <p onClick={() => logout()}>Logout</p>
        }
        {props.isPostsPage &&
          <p onClick={() => logout()}>Logout</p>
        }
        {props.isSignupPage &&
          <p onClick={() => goToLoginPage(navigate)}>Entrar</p>
        }
        </span>
      </div>
    </Container>
  )
}