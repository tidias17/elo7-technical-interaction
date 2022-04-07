import Typography from 'components/Typography'
import ListVacancies from 'components/ListVacancies'
import Loader from 'components/Loading';
import { useQuery } from 'customHooks/query'
import {
  StyledContainer
} from "./styled";

const SectionVacancies = () => {

  const { data: getVAcancies, isLoading }: any = useQuery(['query-get-vacancies'], `https://www.mocky.io/v2/5d6fb6b1310000f89166087b`)

  return (
    <StyledContainer id="vacancies" className="sectionClass" >
      <Typography type="subtitle">
        Vagas em aberto
      </Typography>
      {isLoading && (
        <Loader />
      )}
      {!isLoading && (
        <ListVacancies vacanciesList={getVAcancies} />
      )}
    </StyledContainer>
  )
}

export default SectionVacancies;