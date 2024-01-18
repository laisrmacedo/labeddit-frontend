import styled from "styled-components";

export const Container = styled.div`
  min-height:calc(100% - 60px - 90px);
  width: 364px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => (props.gap ? '10px' : 0)};
  position: relative;
  
  .fixHeightPostsPage{
    width: 100%;
    height: 195px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .fixHeightCommentsPage{
    width: 100%;
    min-height: 228px;
    height: 00px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: sticky;
    top: -2px;
    background-color: #FFF;
  }
` 
export const Box = styled.div`
  height: calc(100% - 195px);
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
  color: ${(props) => (props.isLimit ? 'red' : '#000')};
`

export const InputForShortText = styled.input`
  height: 60px;
  border: 1px solid #D5D8DE;
  padding: 20px 16px;
  width: 100%;
  border-radius: 4px;
  color: #000;
  font-weight: 100;
`

export const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, #FF6489, #F9B24E);
  margin: ${(props) => (props.margin? '6px 0 16px 0' : '16px 0')};
`

export const Radius8Btn = styled.button`
  border-radius: 8px;
  border: none;
  width:  100%;
  height: 51px;
  background: linear-gradient(90deg, #FF6489, #F9B24E);
  cursor: pointer;
  `

export const Radius25Btn = styled.button`
  border-radius: 25px;
  border: none;
  width:  100%;
  height: 51px;
  cursor: pointer;
`



