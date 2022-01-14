import { Container } from "../styles/common.styles";

type alertType = {
  text: string,
  buttonText: string,
  onClick: () => any,
}

const AlertPage = ({ text, buttonText, onClick }: alertType) => {
  return(
    <Container>
        {text}
      <button onClick={onClick}>
        {buttonText}
      </button>
    </Container>
  )
};

export default AlertPage;