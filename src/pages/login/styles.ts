import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;
  display: flex;
  justify-content: space-between;
  
`

export const Wrapper = styled.div`
  max-width: 300px;
`

export const Column = styled.div`
  flex: 1;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`

export const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  max-width: 90%;
  margin-bottom: 20px;
  line-height: 44px;
  color: #FFFFFF;
`

export const ErrorText = styled.p`
  color: #FF0000;
  font-size: 12px;
`

export const TitleLogin = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  margin-block: 20px;
`

export const SubtitleLogin = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  margin-bottom: 35px;
`

export const EsqueciText  = styled.a`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;

  color: #E5E044;

  &:hover {
    text-decoration: underline;
  }
` 

export const DivGradient = styled.div`
  width: 30%;
  border-radius: 50px;
  height: 10px;
  margin-bottom: 30px;
  background: linear-gradient(270deg, rgb(50, 33, 78), rgb(135, 71, 175));
`

export const CriarText =  styled.a`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: #23DD7A;

  &:hover {
    text-decoration: underline;
  }
`
