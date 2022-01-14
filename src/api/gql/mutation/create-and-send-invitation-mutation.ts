import { gql } from "@apollo/client";

const CreateAndSendUserInvitation = gql`
  mutation($user: CreateUserParams) {
    createAndSendUserInvitation(user: $user) {
      firstName
      lastName
      id
      email
      hireDate
      birthDate
      insertedAt
      gender
    }
  }
`;

export default CreateAndSendUserInvitation;