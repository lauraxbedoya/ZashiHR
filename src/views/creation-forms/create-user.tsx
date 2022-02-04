import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateAndSendUserInvitation from "../../api/gql/mutation/create-and-send-invitation-mutation";
import MainButton from "../../components/main-button";
import { Container, StyledMainInputs, StyledMainTitle } from "../../styles/common.styles";

const CreateUser = () => {
  const [ values, setValues ] = useState({
    firstName: 'laura',
    lastName: 'peña',
    email: 'laura13@hotmail.com',
    position: 'Backend Developer',
    hireDate: "2021-12-21"
  });
  const [ newUserGQL ] = useMutation(CreateAndSendUserInvitation);
  const navigate = useNavigate();

  const handleInputChange = (e: any) => {
    setValues(
			{
				...values,
				[e.target.name]: e.target.value,
			}
		)
  };

  const handleSend = async () => {
    if(!values.email || !values.firstName || !values.lastName) {
      alert("All fields are required");
			return;
    };

    try {
      const { data } = await newUserGQL({
        variables: { user: values }
      });

      if(data.createAndSendUserInvitation) {
        navigate('/login');
      }
    } catch (error) {
      alert("errorr");
    }
  };

  return(
    <Container>
      <StyledMainTitle>Create New User</StyledMainTitle>
      <StyledMainInputs
        placeholder="First Name"
        value={values.firstName}
        type="text"
        name="firtsName"
        onChange={handleInputChange}
      />
      <StyledMainInputs
        placeholder="Last Name"
        value={values.lastName}
        type="text"
        name="lastName"
        onChange={handleInputChange}
      />
      <StyledMainInputs
        placeholder="Email"
        value={values.email}
        type="email"
        name="email"
        onChange={handleInputChange}
    />
    <StyledMainInputs
        placeholder="Position"
        value={values.position}
        type="text"
        name="position"
        onChange={handleInputChange}
      />
      <span>{values.hireDate}</span>
      <MainButton
        text="Create"
        onClick={handleSend}
        disabled={false}
      />
    </Container>
  );
};

export default CreateUser;