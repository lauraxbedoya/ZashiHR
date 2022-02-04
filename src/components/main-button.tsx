import { StyledMainButton } from "../styles/common.styles";

type ButtonsTypes = {
  text: string,
  onClick: () => any,
  disabled: boolean
}

const MainButton = ({ text, onClick, disabled }: ButtonsTypes) => {
  return(
    <StyledMainButton
      onClick={onClick}
      disabled={disabled}
    > {text} </StyledMainButton>
  )
};

export default MainButton;