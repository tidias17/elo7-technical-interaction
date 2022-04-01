import Typography from 'components/Typography'
import { StyledContainer } from './styled'

type ListVacanciesProps = {
  vacanciesList?: any
}

const ListVacancies = ({ vacanciesList }: ListVacanciesProps) => {
  return (
    <StyledContainer>
      <Typography type="subtitle">Desenvolvimento</Typography>
    </StyledContainer>
  )
}

export default ListVacancies
