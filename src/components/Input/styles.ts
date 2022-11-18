import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #3B3450;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  transition: all .3s;

  &:focus-within  {
    border-bottom: 1px solid #8747af;
  }
`

export const IconContainer = styled.div`
  margin-right: 10px;
`

export const InputText = styled.input`
  background-color: transparent;
  color: #FFFFFF;
  flex:1;
  border: 0;
  outline: 0;
  height: 30px;
  
  &::placeholder {
    color: #FFF;
  } 
`