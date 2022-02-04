import { useApolloClient, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import CreateUserAddress from "../../../../api/gql/mutation/create-user-address-mutation";
import UpdateUserAddress from "../../../../api/gql/mutation/update-user-address-mutation";
import UserAdress from "../../../../api/gql/query/user-address-query";
import MainButton from "../../../../components/main-button";
import { StyledMainInputs } from "../../../../styles/common.styles";

const UserAddress = () => {
  const [valuesEdit, setValuesEdit] = useState({
    city: "",
    country: "",
    state: "",
    zipCode: "",
    main: "",
    secondary: "",
    id: ""
  });
  const apollo = useApolloClient();
  const [createUserAddressGQL] = useMutation(CreateUserAddress);
  const [UpdateAddressGQL] = useMutation(UpdateUserAddress);
  const [disabled, setDisabled] = useState(true);
  const [valuesChanged, setValuesChanged] = useState<any[]>([]);


  const handleSave = async () => {
    const values: any = { ...valuesEdit };

    try {
      if (values.id) {
        const address: any = {};
        valuesChanged.forEach((prop: any) => {
          // @ts-ignore
          address[prop] = values[prop]
        });
        const { data } = await UpdateAddressGQL({
          variables: { userAddress: address }
        });
        if (data.updateUserAddress) {
          setValuesEdit(data.updateUserAddress);
        }
      } else {
        delete values.id;
        const { data } = await createUserAddressGQL({
          variables: { userAddress: values }
        });
        if (data.createUserAddress) {
          setValuesEdit(data.createUserAddress)
        };
      }
    } catch (error) {
      alert("Some fields are required")
    }
  };

  const getUserAddress = async () => {
    const { data } = await apollo.query({
      query: UserAdress,
    });
    if (data.userAddress) {
      setValuesEdit(data.userAddress);
    }
  };

  const handleInputChange = (e: any) => {
    setValuesEdit(
      {
        ...valuesEdit,
        [e.target.name]: e.target.value,
      }
    );
    if (!valuesChanged.includes(e.target.name)) {
      setValuesChanged(
        [...valuesChanged, e.target.name],
      )
    };
    if (valuesChanged) {
      setDisabled(false);
    }
  };

  useEffect(() => {
    getUserAddress();
  }, []);


  return (
    <div>
      <div>
        <span>Address</span>
        <div>
          <label>Main</label>
          <label>*</label>
          <StyledMainInputs
            placeholder={valuesEdit.main}
            value={valuesEdit.main}
            name="main"
            type="text"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Secondary</label>
          <StyledMainInputs
            placeholder={valuesEdit.secondary}
            value={valuesEdit.secondary}
            name="secondary"
            type="text"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <div>
            <label>Country</label>
            <label>*</label>
            <StyledMainInputs
              placeholder={valuesEdit.country}
              value={valuesEdit.country}
              name="country"
              type="text"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>City</label>
            <label>*</label>
            <StyledMainInputs
              placeholder={valuesEdit.city}
              value={valuesEdit.city}
              name="city"
              type="text"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>State</label>
            <label>*</label>
            <StyledMainInputs
              placeholder={valuesEdit.state}
              value={valuesEdit.state}
              name="state"
              type="text"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Zip Code</label>
            <StyledMainInputs
              placeholder={valuesEdit.zipCode}
              value={valuesEdit.zipCode}
              name="zipCode"
              type="text"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <MainButton
          text="Save"
          onClick={handleSave}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default UserAddress;