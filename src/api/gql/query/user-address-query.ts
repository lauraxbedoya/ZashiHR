import { gql } from "@apollo/client";

const UserAdress = gql`
  query {
    userAddress {
      city
      country
      id
      insertedAt
      main
      secondary
      state
      userId
      zipCode
    }
  }
`;

export default UserAdress;