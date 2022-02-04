import { gql } from "@apollo/client";

const UpdateUserAddress = gql`
  mutation($userAddress: UpdateUserAddressParams) {
    updateUserAddress(userAddress: $userAddress) {
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

export default UpdateUserAddress;