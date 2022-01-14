import { gql } from "@apollo/client";

const setUserPassword = gql`
  mutation ($user: SetUserPasswordParams) {
    setUserPassword(user: $user) {
      firstName
      lastName
      email
      birthDate
      gender
      hireDate
      id
      insertedAt
      maritalStatus
      position
    }
  }
`;

export default setUserPassword;