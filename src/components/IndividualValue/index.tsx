import Typography from 'components/Typography'
import { StyledContainer } from './styled'

type IndividualValueProps = {
  value: ValueProps
}

type ValueProps = {
  icon: string
  title: string
  description: string
}

const IndividualValue = ({ value }: IndividualValueProps) => {
  return (
    <StyledContainer>
      <Typography type="subtitle">{value.title}</Typography>
    </StyledContainer>
  )
}

export default IndividualValue
