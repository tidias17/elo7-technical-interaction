import styled from 'styled-components'
import { theme } from 'theme'

export const StyledContainer = styled.section`
  width: 85%;
  margin: 0 auto;
  h2 {
    margin-bottom: 32px;
  }
  table {
    width: 100%;
    a {
      width: 100%;
      display: flex;
      margin: 12px 0;
      td {
        width: 50%;
        &:first-child {
          font-size: 20px;
          font-weight: 600;
          color: ${theme.colors.link};
          text-transform: uppercase;
        }
        &:last-child {
          text-align: right;
          font-size: 20px;
          font-weight: 600;
          text-transform: uppercase;
          color: ${theme.colors.normal};
        }
      }
      &:hover {
        opacity: 0.8;
      }
      @media (max-width: 840px) {
        flex-wrap: wrap;
        td {
          width: 100%;
          &:last-child {
            text-align: left;
          }
        }
      }
    }
  }
`
