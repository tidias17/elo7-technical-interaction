import { StyledContainer } from './styled'

export const Loader = () => {
  return (
    <StyledContainer>
      <div className="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </StyledContainer>
  )
}

export default Loader
