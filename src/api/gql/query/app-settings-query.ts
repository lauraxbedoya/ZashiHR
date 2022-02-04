import { gql } from "@apollo/client";

const appSettings = gql`
  query {
    appSettings {
      id
      name
      type
      value
      description
    }
  }
`;

export default appSettings;