import { Typography } from "@material-ui/core";
import { Email, Lock } from '@material-ui/icons';
import { Container, StyledMainTitle } from "../styles/common.styles";
import MainButton from "./main-button";

type LoginType = {
  user: string,
  emailValue: string,
  passwordValue: string,
  onLogin: () => any,
  onChange: (e: any) => any,
};

const Login = ({ user, emailValue, passwordValue, onChange, onLogin }: LoginType) => {
  return(
    <Container>
      <div>
        <StyledMainTitle>Member Login</StyledMainTitle>
        <Typography variant="h6">{user}</Typography>
        <div>
          <Email />
          <input
            placeholder="Email"
            type="email"
            name="email"
            value={emailValue}
            onChange={onChange}
          />
        </div>
        <div>
          <Lock />
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={passwordValue}
            onChange={onChange}
          />
        </div>
        <div>
          <MainButton
            onClick={onLogin}
            text="Sign In"
          />
        </div>
        <div>
          <div>
            <input type="checkbox"/>
            <label>Remember Me</label>
          </div>
          <div>
            <label>Forgot Password?</label>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;