import { gql } from "@apollo/client";

const GetOwnInfo = gql`
  query {
    getOwnInfo {
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
  }`
;

export default GetOwnInfo;