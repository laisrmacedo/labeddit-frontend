import styled from "styled-components";

export const Container = styled.div`
  height:calc(94% - 50px - 44px);
  width: 364px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 0 0 0;
  
  >div{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
` 

export const InputForLongText = styled.input`
  height: 131px;
  width: 100%;
  padding: 18px 0 90px 18px;
  border: 1px solid #D5D8DE;
  border-radius: 8px;
  background-color: #EDEDED;
  margin-bottom: 12px;
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

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 364px;
  gap: 10px;
`

