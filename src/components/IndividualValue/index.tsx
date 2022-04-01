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
      <img
        src={`./images/${value.icon}.png`}
        alt={`icone referente ao valor ${value.icon}`}
      />
      <Typography type="subtitle">{value.title}</Typography>
      <Typography type="normal">{value.description}</Typography>
    </StyledContainer>
  )
}

export default IndividualValue
