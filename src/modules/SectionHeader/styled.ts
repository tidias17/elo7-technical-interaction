import styled from 'styled-components';

export const StyledContainer = styled.section`
  width: 100%;
  height: auto;
`;

export const StyledHead = styled.section`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  h1 {
    margin-bottom: 150px;
    z-index: 2;
  }
  @media(max-width: 840px) {
    height: 400px;
  }
`;

export const StyledImage = styled.section`
  width: 100%;
  height: 100%;
  background-image: url(./images/foto-header.png);
  opacity: .95;
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;


export const StyledContent = styled.section`
  padding: 32px 40px;
  max-width: 1200px;
  margin: 0 auto;
  p {
    text-align: center;
  }
`;
