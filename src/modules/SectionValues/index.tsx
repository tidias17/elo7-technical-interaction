import IndividualValue from "components/IndividualValue";
import {
  StyledContainer
} from "./styled";

const SectionValue = () => {
  const values = [
    {
      icon: "qualidade",
      title: "Qualidade de vida",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      icon: "descontracao",
      title: "Ambiente Descontraído",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      icon: "atividades",
      title: "Atividades Extras",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
  ]

  return (
    <StyledContainer>
      {values.map((item, index) =>
        <IndividualValue value={item} key={index} />
      )}
    </StyledContainer>
  )
}

export default SectionValue;