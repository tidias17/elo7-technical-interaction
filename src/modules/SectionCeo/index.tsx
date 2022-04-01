import Typography from "components/Typography";
import {
  StyledContainer,
  StyledVideo,
  StyledContent,
  StyledDescription
} from "./styled";

const SectionCeo = () => {

  return (
    <StyledContainer>
      <StyledVideo>
        <img src="./images/placeholder-video.png" />
      </StyledVideo>
      <StyledContent>
        <Typography type="subtitle">
          Palavra do ceo
        </Typography>
        <Typography type="complementarytitle">
          Carlos Curioni
        </Typography>
        <StyledDescription>
          <Typography type="normal">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </Typography>
        </StyledDescription>
      </StyledContent>
    </StyledContainer>
  )
}

export default SectionCeo;