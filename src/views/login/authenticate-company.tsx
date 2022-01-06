import { useState } from "react";
import Login from "../../components/login"

const CompanyLogin = () => {

  const [ values, setValues ] = useState({
    email: 'loco@gmail.com',
    password: 'Password2'
  });

  const handleInputChange = () => {};
  const handleLogin = () => {};
  
  return(
    <div>
      <Login
        user="Company"
        onChange={handleInputChange}
        onLogin={handleLogin}
        emailValue={values.email}
        passwordValue={values.password}
      />
    </div>
  );
};

export default CompanyLogin;