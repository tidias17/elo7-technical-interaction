import Typography from 'components/Typography'
import { StyledContainer } from './styled'

type ListVacanciesProps = {
  vacanciesList?: any
}

type LocationVacancieProps = {
  bairro: string
  cidade: string
  pais: string
}

type VacancieProps = {
  ativa: boolean
  cargo: string
  link: string
  localizacao?: LocationVacancieProps
}

const ListVacancies = ({ vacanciesList }: ListVacanciesProps) => {
  const vacanciesListTratment = () => {
    return vacanciesList?.vagas.filter((item: VacancieProps) => {
      return item.ativa
    })
  }
  const location = (value: LocationVacancieProps | undefined | null) => {
    return value ? `${value.bairro} - ${value.cidade}` : 'Remoto'
  }

  return (
    <StyledContainer>
      <Typography type="subtitle">Desenvolvimento</Typography>
      <table>
        {vacanciesListTratment().map((item: VacancieProps, index: number) => (
          <tr key={index}>
            <a href={item.link} target="blank">
              <td>{item.cargo}</td>
              <td>{location(item.localizacao)}</td>
            </a>
          </tr>
        ))}
      </table>
    </StyledContainer>
  )
}

export default ListVacancies
