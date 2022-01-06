import { gql } from "@apollo/client";

const authenticateUser = gql`
  mutation LoginUser($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      token
      user {
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
  }
`;

export default authenticateUser;