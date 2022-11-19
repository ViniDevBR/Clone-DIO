import styled, { css }  from 'styled-components';

type Tdiv = {
  auth: boolean
}

type MenuOptions = {
  option?: 'yellow' | 'green'
}


export const Wrapper = styled.div<Tdiv>`
  
  background-color: #151515;
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-inline: 20px;

  ${({auth}) => auth === true && css`
    background-color: #0a0a0a;
  `}
`

export const Container = styled.div`  
  width: 100%;
  height: 47px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`

export const Row = styled.div`
  display: flex;
  align-items: center;
`

export const BuscarInputContainer = styled.div`
  width: 200px;
  height: 2.75rem;
  background: #2d2d37;
  border-radius: 8px;
  padding: 0px 16px;
  margin: 0 12px;
  display: flex;
  align-items: center;
`

export const Menu = styled.a<MenuOptions>`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #FFFFFF;
  padding-inline: 8px;
  margin-right: 12px;
  cursor: pointer;
  &:hover {
    color: purple;
  }

  ${({option}) => option === 'yellow' && css`
    &:hover {
      color: yellow;
    }
  `}
  ${({option}) => option === 'green' && css`
    color: #000;
    background-color: #22dd7a;
    border-radius: 5px;
    height: 42px;
    padding-inline: 12px;
    

    &:hover {
      color: #fff;
    }
  `}
`

export const MenuRight = styled.a`
  cursor: pointer;
  font-style: normal;
  font-size: 16px;
  line-height: 25px;
  color: #FFFFFF;
  margin-right: 12px;
  transition: all .3s;

  &:hover {
    color: #E4105D;
  }
`

export const UserPicture = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 22px;
  border: 3px solid #FFFFFF;
`

export const Input = styled.input`
  background: transparent;
  padding-inline: 16px;
  flex: 1;
  border: 0;
  outline: 0;
  color: #FFFFFF;
  width: 70%;

  &::placeholder {
    color: #AEACAC;
  }
`



export const UserDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: 20px;
`