export type ActionType = {
  type: string,
  payload: any
};

export type UserType = {
  birthDate: string,
  email: string,
  firstName: string,
  gender: string,
  hireDate: string,
  insertedAt: string,
  lastName: string,
  maritalStatus: string,
  position: string
};

export type SettingsType = {
  logo: string,
  hideGender: boolean,
  hideMaritalStatus: boolean,
  hideSalary: boolean,
  extraTimeOff: number,
  invitationExpire: number
};

export type AppSettingsType = {
  id: string,
  name: string,
  value: string,
  type: string,
  description: string,
};

export type UserAddressType = {
  city: string,
  country: string,
  main: string,
  secondary: string,
  state: string,
  zipCode: string,
};