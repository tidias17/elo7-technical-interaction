import styled, { css } from 'styled-components'
import { theme } from 'theme'

export const typographys: any = {
  title: {
    tag: 'h1',
    style: css`
      font-size: 28px;
      font-weight: 700;
      color: ${theme.colors.white};
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
    `
  },
  normal: {
    tag: 'p',
    style: css`
      font-size: 14px;
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
