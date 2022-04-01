import styled from 'styled-components';

export const StyledContainer = styled.section`
  margin-top: 32px;
  h2 {
    text-align: center;
  }
`;

export const StyledMembers = styled.section`
  margin: 40px 0;
  display: flex;
  justify-content: center;
  flex-wrap: no-wrap;
  @media (max-width: 840px) {
    flex-wrap: wrap;
  }
  img {
    flex: 1;
    margin: 0 12px;
    @media (max-width: 840px) {
      flex: initial;
      margin: 20px;
      max-width: 280px;
    }
  }
`;
