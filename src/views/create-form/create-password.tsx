import { useApolloClient, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import isInvitationValid from "../../api/gql/query/is-invitation-valid-query";
import { RootState } from "../../redux/store";
import { Container, StyledMainInputs, StyledMainTitle } from "../../styles/common.styles";
import MainButton from "../../components/main-button";
import setUserPassword from "../../api/gql/mutation/set-user-password-mutation";
import storage, { AUTH_TOKEN } from "../../utils/storage";

const CreatePassword = () => {
  const apollo = useApolloClient();
  const { token }: any = useParams();
  const { userInfo } = useSelector((state: RootState) => state.sessions);
  const [ values, setValues ] = useState({
    password: "",
    confirmPassword: "",
    token: token,
  });
  const [ setPasswordGQL ] = useMutation(setUserPassword);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (e: any) => {
		setValues(
			{
				...values,
				[e.target.name]: e.target.value,
			}
		);
	};

  const userPassword = async () => {
    const { data } = await setPasswordGQL({
      variables: { user: values }
    });
    if(data.setUserPassword) {
			storage.save(AUTH_TOKEN, values.token);
      dispatch({ type: 'STORE_USER_INFO', payload: data.setUserPassword });
    };
  };

  const invitationUserPassword = async () => {
    const { data } = await apollo.query({
      query: isInvitationValid,
      variables: { token: token }
    });

    if(!data.isUserInvitationValid) {
      navigate("/request_invalid");
    } else return
  };

  const handleSendPassword = async () => {
    if(!values.password || !values.confirmPassword) {
      alert("All fields are required");
      return;
    } else
        if(values.password === values.confirmPassword) {
        userPassword();
    } else {
        alert("The values do not match");
        return;
    }
  };

  useEffect(() => {
    invitationUserPassword();
  }, []);

  return(
    <Container>
      <StyledMainTitle>Create A Strong Password</StyledMainTitle>
      <StyledMainInputs
        placeholder="Enter New Password"
        name="password"
        value={values.password}
        onChange={handleInputChange}
      />
      <StyledMainInputs
        placeholder="Confirm New Password"
        name="confirmPassword"
        value={values.confirmPassword}
        onChange={handleInputChange}
      />
      <MainButton
        text="Confirm Password"
        onClick={handleSendPassword}
      />
    </Container>
  );
};

export default CreatePassword;