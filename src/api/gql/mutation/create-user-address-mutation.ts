import { gql } from "@apollo/client";

const CreateUserAddress = gql`
  mutation($userAddress: CreateUserAddressParams) {
    createUserAddress(userAddress: $userAddress) {
      city
      country
      id
      main
      secondary
      state
      userId
      zipCode
    }
  }
`;

export default CreateUserAddress;