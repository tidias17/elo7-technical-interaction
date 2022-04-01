import Typography from "components/Typography";
import {
  StyledContainer,
  StyledMembers
} from "./styled";

const SectionTeam = () => {
  const team = [
    {
      id: "camila",
    },
    {
      id: "guto",
    },
    {
      id: "david",
    },
    {
      id: "beatriz",
    },
  ]

  return (
    <StyledContainer>
      <Typography type="subtitle">
        Conheça nosso time <br />
        Fora de série
      </Typography>
      <StyledMembers>
        {team.map((item, index) =>
          <img
            src={`./images/${item.id}.png`}
            alt={`Membro do time | ${item.id}`}
            key={index}
          />
        )}
      </StyledMembers>
    </StyledContainer>
  )
}

export default SectionTeam;