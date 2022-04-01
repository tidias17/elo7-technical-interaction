import Typography from 'components/Typography'
import { StyledContainer, StyledContent } from './styled'

type LinkProps = {
  text: string
  href: string
}

const Link = ({ text, href }: LinkProps) => {
  return (
    <StyledContainer>
      <StyledContent>
        <Typography type="link" href={href}>
          {text}
        </Typography>
      </StyledContent>
    </StyledContainer>
  )
}

export default Link
