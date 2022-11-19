import styled, { css }  from 'styled-components';

type Button = {
  variant: string
}

export const ButtonContainer = styled.button<Button>`
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 500;
  background: #565656;
  border: 0;
  border-radius: 22px;
  position: relative;
  cursor: pointer;
  color: #FFFFFF;
  margin: 0 8px;
  padding: 4px 24px;
  transition: all .3s;

  &:hover {
    background: #E4105D;
  }
    

  ${({variant}) => variant === "secondary" && css`
    width: 100%;
    min-width: 167px;
    height: 33px;
    margin-block: 20px;

    &::after {
      content: '';
      position: absolute;
      border: 1px solid #565656;
      top: -5px;
      left: -6px;
      width: calc(100% + 10px);
      height: calc(100% + 10px);
      border-radius: 22px;
      transition: all .3s;
    }

    &:hover::after {
      border: 1px solid #E4105D;
    }
  `}

  ${({variant}) => variant === "terciary" && css`
    background: #E4105D;
    min-width: 167px;
    height: 40px;
    margin-block: 32px;

    &::after {
      content: '';
      position: absolute;
      border: 1px solid #E4105D;
      top: -5px;
      left: -6px;
      width: calc(100% + 10px);
      height: calc(100% + 10px);
      border-radius: 22px;
      transition: all .3s;
    }

    &:hover {
      box-shadow: 0px 0px 29px 3px #E4105D;
    }
  `}
`