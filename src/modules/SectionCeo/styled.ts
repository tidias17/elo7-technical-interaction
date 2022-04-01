import styled from 'styled-components';

export const StyledContainer = styled.section`
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  @media(max-width: 840px) {
    flex-wrap: wrap;
  }
`;

export const StyledVideo = styled.section`
  flex: 1;
  padding: 20px;
  img {
    width: 100%;
  }
  @media(max-width: 840px) {
    flex: initial;
    width: 100%;
  }
`;

export const StyledContent = styled.section`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  p {
    margin-top: 28px;
    text-align: justify;
  }
  @media(max-width: 840px) {
    flex: initial;
    width: 100%;
  }
`;
