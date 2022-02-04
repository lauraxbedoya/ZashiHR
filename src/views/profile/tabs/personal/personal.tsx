import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UpdateUser from "../../../../api/gql/mutation/update-user-mutation";
import MainButton from "../../../../components/main-button";
import { RootState } from "../../../../redux/store";
import { StyledMainInputs } from "../../../../styles/common.styles";
import UserAddress from "./user-address";
import UserContact from "./user-contact";

const Personal = () => {
  const { userInfo } = useSelector((state: RootState) => state.sessions);
  const [ values, setValues ] = useState({
    birthDate: userInfo?.birthDate,
    email: userInfo?.email,
    firstName: userInfo?.firstName,
    gender: userInfo?.gender,
    id: userInfo?.id,
    hireDate: userInfo?.hireDate,
    insertedAt: userInfo?.insertedAt,
    lastName: userInfo?.lastName,
    maritalStatus: userInfo?.maritalStatus,
    position: userInfo?.position
  });
  const [ UpdateUserGQL ] = useMutation(UpdateUser);
  const [ valuesChanged, setValuesChanged ] = useState<any[]>([]);
  const [ disabled, setDisabled ] = useState(true);

  useEffect(() => {
    if(userInfo) {
      setValues(userInfo);
    }
  }, [userInfo]);
  

  const handleSave = async () => {
    try {
      const user: any= { id: userInfo.id };
      valuesChanged.forEach((prop: any) => {
        // @ts-ignore
        user[prop] = values[prop];
      });
      const { data } = await UpdateUserGQL({
        variables: { user: user },
      });
      if(data.updateUser) {
        setValues(data.updateUser)
      };
      setDisabled(true);
    } catch(error) {
      alert("error")
    }
  };

  const handleInputChange = (e: any) => {
		setValues(
			{
				...values,
				[e.target.name]: e.target.value,
			}
		);
    if(!valuesChanged.includes(e.target.name)) {
      // const newValuesChanged = [...valuesChanged];
      // newValuesChanged.push(e.target.name);

      setValuesChanged(
        [...valuesChanged, e.target.name],
      )
    };
    if(valuesChanged) {
      setDisabled(false);
    }
	};

  return(
    <div>
      <span>Personal</span>
      <div>
        <span>Basic Information</span>
        <div>
          <label>Name</label>
          <label>Preferred Name</label>
        </div>
        <div>
          <StyledMainInputs
            placeholder={values.firstName}
            value={values.firstName}
            name="firstName"
            type="text"
            onChange={handleInputChange}
          />
          <StyledMainInputs
            placeholder={values.lastName}
            value={values.lastName}
            name="lastName"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <div>
            <label>Birth Date</label>
          </div>
          <div>
            <StyledMainInputs
              placeholder={values.birthDate}
              value={values.birthDate}
              name="birthDate"
              type="date"
              onChange={handleInputChange}
            />
            <span>Age: {}</span>
          </div>
        </div>
        <div>
          <div>
            <label>Gender</label>
          </div>
          <div>
            <StyledMainInputs
              placeholder={values.gender}
              value={values.gender}
              name="gender"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <div>
            <label>Marital Status</label>
          </div>
          <div>
            <StyledMainInputs
              placeholder={values.maritalStatus}
              value={values.maritalStatus}
              name="maritalStatus"
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
      <UserAddress />
      <UserContact />
    </div>
  );
};

export default Personal;