import styled from "styled-components";

export const ContainerSignUp = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  justify-content: space-between;
`

export const Column = styled.div`
  flex: 1;  
`

export const Wrapper = styled.div`
  max-width: 350px;
`

export const GoBackLogin = styled.a`
  color: #8647AD;

  &:hover {
    text-decoration: underline;
  }
`

export const TitleSignUp = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  margin-block: 20px;
`

export const SubtitleSignUp = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  margin-bottom: 35px;
`

export const Declarations = styled.p`
  margin-top: 20px;
  font-size: 14px;

  a {
    color: #8647AD;
    
    &:hover {
      text-decoration: underline;
    }
  }
`

export const GoBackLogin2 = styled.p`
  margin-block: 35px;

  a {
    color: #23DD7A;
  }
`