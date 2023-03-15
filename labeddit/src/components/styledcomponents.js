import styled from "styled-components";

export const Container = styled.div`
  height:calc(94% - 50px - 44px);
  width: 364px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 0 0 0;
` 

export const InputForLongText = styled.input`
  height: 131px;
  width: 100%;
  padding: 18px 0 90px 18px;
  border: 1px solid #D5D8DE;
  border-radius: 8px;
  background-color: #EDEDED;
  margin-bottom: 12px;
`

export const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, #FF6489, #F9B24E);
  margin: 16px 0 36px 0;
`

export const Radius8Btn = styled.button`
  border-radius: 8px;
  border: none;
  width:  100%;
  height: 51px;
  background: linear-gradient(90deg, #FF6489, #F9B24E);
`
