import { gql } from "@apollo/client";

const isInvitationValid = gql`
  query ($token: String) {
    isUserInvitationValid(
      token: $token
    ) 
  }
`;

export default isInvitationValid;