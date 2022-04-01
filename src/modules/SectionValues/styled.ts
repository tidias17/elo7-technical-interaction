import styled from 'styled-components';

export const StyledContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 20px 80px;
  @media(max-width: 840px) {
    flex-wrap: wrap;
    padding: 20px;
  }
`;

export const StyledLink = styled.section`
  width: 100%;
  display: felx;
  justify-content: center;
`;

export const StyledEnvironment = styled.section`
  width: 85%;
  height: 350px;
  margin: 20px auto;
  background-image: url(./images/foto-bottom.png);
  background-size: cover;
  background-position: center;
`;
