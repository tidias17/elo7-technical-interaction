import Typography from "components/Typography";
import Link from "components/Link";
import {
  StyledContainer,
  StyledHead,
  StyledImage,
  StyledContent
} from "./styled";

const SectionHeader = () => {

  return (
    <StyledContainer>
      <StyledHead>
        <StyledImage />
        <Typography type="title">Trabalhe no Elo7</Typography>
      </StyledHead>
      <StyledContent>
        <Typography type="normal">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Typography>
        <Link text="vagas em aberto" href="#" />
      </StyledContent>
    </StyledContainer>
  )
}

export default SectionHeader;