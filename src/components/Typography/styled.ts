import styled, { css } from 'styled-components'
import { theme } from 'theme'

export const typographys: any = {
  title: {
    tag: 'h1',
    style: css`
      width: 100%;
      font-size: 48px;
      font-weight: 700;
      color: ${theme.colors.white};
      text-align: center;
      text-shadow: 1px 1px 2px ${theme.colors.gray};
      @media (max-width: 840px) {
        font-size: 32px;
      }
    `
  },
  subtitle: {
    tag: 'h2',
    style: css`
      font-size: 18px;
      font-weight: 700;
      color: ${theme.colors.normal};
      text-transform: uppercase;
    `
  },
  complementarytitle: {
    tag: 'h3',
    style: css`
      font-size: 18px;
      font-weight: 600;
      color: ${theme.colors.brand};
    `
  },
  link: {
    tag: 'a',
    style: css`
      font-size: 20px;
      font-weight: 600;
      color: ${theme.colors.link};
      text-transform: uppercase;
      text-decoration: none;
      &:hover {
        font-size: 20px;
        font-weight: 600;
        text-transform: uppercase;
        opacity: 0.8;
        color: ${theme.colors.link};
      }
    `
  },
  normal: {
    tag: 'p',
    style: css`
      font-size: 16px;
      font-weight: 400;
      color: ${theme.colors.normal};
    `
  }
}

export const Container = styled.div.attrs(({ type, href }: any) => ({
  type,
  href,
  as: typographys[type].tag,
  styles: typographys[type].style
}))`
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
  ${(props) => props.styles};
`
