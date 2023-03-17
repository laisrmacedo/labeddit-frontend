import styled from "styled-components";

export const Container = styled.div`
  min-height:calc(94% - 50px - 44px);
  width: 364px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  
  .fixHeightPostsPage{
    width: 100%;
    height: 195px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .fixHeightCommentsPage{
    /* border: 1px solid red; */
    width: 100%;
    min-height: 192px;
    height: 00px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: sticky;
    top: 0;
    background-color: #FFF;
    margin-top: 10px;
  }
` 
export const Box = styled.div`

  height: calc(100% - 245px);
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 364px;
  gap: 10px;
`

export const InputForLongText = styled.textarea`
  height: 131px;
  width: 100%;
  padding: 18px;
  border: 1px solid #D5D8DE;
  border-radius: 8px;
  background-color: #EDEDED;
  color: #000;
`

export const InputForShortText = styled.input`
  height: 60px;
  border: 1px solid #D5D8DE;
  padding: 20px 16px;
  width: 100%;
  border-radius: 4px;
  color: #000;
`

export const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, #FF6489, #F9B24E);
  margin: 18px 0;
`

export const Radius8Btn = styled.button`
  border-radius: 8px;
  border: none;
  width:  100%;
  height: 51px;
  background: linear-gradient(90deg, #FF6489, #F9B24E);
`

export const Radius25Btn = styled.button`
  border-radius: 25px;
  border: none;
  width:  100%;
  height: 51px;
`



