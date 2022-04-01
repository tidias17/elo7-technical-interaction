import SectionCeo from 'modules/SectionCeo'
import SectionTeam from 'modules/SectionTeam'
import {
  StyledContainer
} from "./styled";

const SectionGroup = () => {

  return (
    <StyledContainer>
      <SectionCeo />
      <SectionTeam />
    </StyledContainer>
  )
}

export default SectionGroup;