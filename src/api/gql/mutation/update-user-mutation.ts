import { gql } from "@apollo/client";

const UpdateUser = gql`
  mutation ($user: UpdateUserParams) {
    updateUser(user: $user) {
      birthDate
      email
      firstName
      gender
      hireDate
      id
      insertedAt
      lastName
      maritalStatus
      position
    }
  }
`;

export default UpdateUser;