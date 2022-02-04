import { useApolloClient, useMutation } from "@apollo/client";
import { useState } from "react";
import CreateUserAddress from "../../../../api/gql/mutation/create-user-address-mutation";
import UserAdress from "../../../../api/gql/query/user-address-query";
import { StyledMainInputs } from "../../../../styles/common.styles";
import { UserAddressType } from "../../../../utils/types";

const UserContact = () => {

  const apollo = useApolloClient();
  const [ userAddressGQL ] = useMutation(CreateUserAddress);
  const [ values, setValues ] = useState({
    city: "",
    country: "",
    main: "",
    secondary: "",
    state: "",
    zipCode: ""
  });

  const saveAddress = async () => {
    const { data } = await userAddressGQL({
      variables: values
    })
  };

  const getUserAddress = async () => {
    const { data } = await apollo.query({
      query: UserAdress
    }); 
  };

  const handleInputChange = (e: any) => {
    setValues(
      {
        ...values,
        [e.target.name]: e.target.value,
      }
    );
  };

  return(
    <div>
      <span>Contact</span>
      <div>
        <label>Main</label>
        <div>
          <StyledMainInputs
            placeholder={values.main}
            value={values.main}
            name="main"
            type="text"
            onChange={handleInputChange}
          />
          <StyledMainInputs
            placeholder={values.main}
            value={values.main}
            name="main"
            type="text"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email</label>
        </div>
        <div>
          <StyledMainInputs
            placeholder={values.main}
            value={values.main}
            name="main"
            type="text"
            onChange={handleInputChange}
          />
          <StyledMainInputs
            placeholder={values.main}
            value={values.main}
            name="main"
            type="text"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Social Links</label>
        </div>
        <div>
          <StyledMainInputs
            placeholder={values.main}
            value={values.main}
            name="main"
            type="text"
            onChange={handleInputChange}
          />
          <StyledMainInputs
            placeholder={values.main}
            value={values.main}
            name="main"
            type="text"
            onChange={handleInputChange}
          />
          <StyledMainInputs
            placeholder={values.main}
            value={values.main}
            name="main"
            type="text"
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default UserContact;