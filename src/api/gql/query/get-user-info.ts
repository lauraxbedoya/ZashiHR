import { gql } from "@apollo/client";

const GetUserInfo = gql`
  query ($filter: UserFilters, $page: Int, $size: Int) {
    users(
      filter: $filter,
      orderBy: {
        insertedAt: {
          order: ASC
        }
      }
      pagination: {
        page: $page
        size: $size
      }
    ) {
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

export default GetUserInfo;


