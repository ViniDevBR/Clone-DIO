import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: calc(100vh - 60px);
  margin: 0 auto;
  background: linear-gradient(99.06deg, rgb(0, 0, 0) 45.8%, rgba(0, 0, 0, 0) 90.54%) center center / cover no-repeat, url('./banner-play.webp');
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const TitleContainer = styled.div`
  width: 90%;
  margin: auto;
`

export const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  margin-bottom: 20px;
  width: 70%;

  color: #FFFFFF;
`

export const TitleHighlight = styled.span`
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(90.33deg, rgb(166, 75, 214) , rgb(227, 18, 96));
`

export const TextContent = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  margin: 10px 0;
  color: #FFFFFF;
  width: 65%;
`
