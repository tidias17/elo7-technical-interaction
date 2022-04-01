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
  display: flex;
  justify-content: center;
  img {
    width: 85%;
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

export const StyledDescription = styled.section`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  @media(min-width: 841px) and (max-width: 1199px) {
    -webkit-line-clamp: 5;
  }
`;
