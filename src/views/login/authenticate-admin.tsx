import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import authenticateAdmin from "../../api/gql/mutation/authenticate-admin-mutation";
import Login from "../../components/login"
import storage, { AUTH_TOKEN } from "../../utils/storage";

const CompanyLogin = () => {
  const [ loginUserGQL ] = useMutation(authenticateAdmin)
  const [ values, setValues ] = useState({
    email: 'admin@gmail.com',
    password: 'Password2'
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = () => {};

  const handleLogin = async () => {
    if (!values.email || !values.password) {
      alert("All fields are required");
			return;
    }

    try {
      const { data } = await loginUserGQL({
        variables: { credentials: values }
      });

      if (data.authenticateAdmin.token) {
				storage.save(AUTH_TOKEN, data.authenticateAdmin.token);
				dispatch({ type: 'STORE_USER_INFO', payload: data.authenticateAdmin.user});
				navigate('/login');
			}

    } catch(err) {
      alert(err)
    }
  };
  
  return(
    <div>
      <Login
        user="Administrator"
        onChange={handleInputChange}
        onLogin={handleLogin}
        emailValue={values.email}
        passwordValue={values.password}
      />
    </div>
  );
};

export default CompanyLogin;