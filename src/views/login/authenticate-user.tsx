import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import authenticateUser from "../../api/gql/mutation/authenticate-user-mutation";
import Login from "../../components/login";
import storage, { AUTH_TOKEN } from "../../utils/storage";

const UserLogin = () => {

  const [ values, setValues ] = useState({
    email: 'loco@gmail.com',
    password: 'Password2'
  });
  const [ loginUserGQL ] = useMutation(authenticateUser);
	const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleInputChange = (e: any) => {
		setValues(
			{
				...values,
				[e.target.name]: e.target.value,
			}
		);
	};

  const handleLogin = async () => {
    if (!values.email || !values.password) {
      alert("All fields are required");
			return;
    }

    try {
      const { data } = await loginUserGQL({
        variables: { credentials: values }
      });

      if (data.authenticate.token) {
				storage.save(AUTH_TOKEN, data.authenticate.token);
				dispatch({ type: 'STORE_USER_INFO', payload: data.authenticate.user});
				navigate('/company_login');
			}

    } catch(err) {
      alert(err)
    }
  };

  return(
    <div>
      <Login
        user="User"
        emailValue={values.email}
        passwordValue={values.password}
        onChange={handleInputChange}
        onLogin={handleLogin}
      />
    </div>
  )
};

export default UserLogin;