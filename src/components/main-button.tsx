import { StyledMainButton } from "../styles/common.styles";

type ButtonsTypes = {
  text: string,
  onClick: () => any,
}

const MainButton = ({ text, onClick }: ButtonsTypes) => {
  return(
    <StyledMainButton
      onClick={onClick}
    > {text} </StyledMainButton>
  )
};

export default MainButton;