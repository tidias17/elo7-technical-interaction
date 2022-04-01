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
