import { gql } from "@apollo/client";

const updateAppSettings = gql`
  mutation ($appSettings: AppSettingsParams ) {
    updateAppSettings (appSettings: $appSettings) {
      description
      id
      name
      value
    }
  }
`;

export default updateAppSettings;