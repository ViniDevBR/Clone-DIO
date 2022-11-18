import styled, { css } from "styled-components";

type img = {
  filter: '1' | '2'
}

export const ContainerFlags = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 10%;
`

export const Button = styled.button<img>`
  background-color: transparent;
  border: none;
  cursor: pointer;

  img {
    width: 30px;
    transition: all .3s;

    ${({filter = '1'}) => filter !== '1' && css`
      filter: grayscale(1);
    `}

    &:hover {
      filter: none;
    }
  }


`