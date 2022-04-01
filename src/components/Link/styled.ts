import styled from 'styled-components'
import { theme } from 'theme'

export const StyledContainer = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin: 32px 0;
`

export const StyledContent = styled.section`
  width: auto;
  height: auto;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: -12px;
    left: -6px;
    width: calc(100% + 12px);
    height: 1px;
    background-color: ${theme.colors.normal};
  }
`
