import { gql } from "@apollo/client";

const authenticateAdmin = gql`
  mutation LoginAdmin($credentials: AuthenticateInput) {
    authenticateAdmin(credentials: $credentials) {
      token
      user {
        firstName
        lastName
        role
        email
        id
        insertedAt
      }
    }
  }
`;

export default authenticateAdmin;