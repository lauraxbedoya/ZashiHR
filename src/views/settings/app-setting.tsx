import { useApolloClient, useMutation } from "@apollo/client";
import { Switch, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import updateAppSettings from "../../api/gql/mutation/update-app-setttings-mutation";
import appSettingsQuery from "../../api/gql/query/app-settings-query";
import MainButton from "../../components/main-button";
import { StyledInputNumber } from "../../styles/common.styles";
import { theme } from "../../styles/theme";
import { AppSettingsType } from "../../utils/types";

const AppSettings = () => {
  const [ logo, setLogo ] = useState("");
  const [ appSettingGQL ] = useMutation(updateAppSettings);
  const apollo = useApolloClient();
  const [ appSettings, setAppSettings ] = useState<AppSettingsType[]>([]);
  const [ changes, setChanges ] = useState<{ [key: string]: any }>({});

  const getAppSetting = async () => {
    const { data } = await apollo.query({
      query: appSettingsQuery,
    });
    if(data.appSettings) {
      setAppSettings(data.appSettings)
    }
  };

  useEffect(() => {
    getAppSetting();
  }, [])

  const handleChange = (id:string, type: string, e: any) => {
    if (type === "boolean") {
      setChanges({
        ...changes,
        [id]: e.target.checked
      })
    } else if (type === "number") {
      setChanges({
        ...changes,
        [id]: e.target.value
    })
    }
  } 

  const handleSave = async () => {
    try {
      Object.entries(appSettings).map((keyvalue) => ({ id: keyvalue[0], value: keyvalue[1] }));
      const { data } = await appSettingGQL({
        variables: appSettings
      });
      if(data.appSettings) {
        alert("exito")
      }
    } catch(error) {
      alert("error");
    }
  };

  return(
    <div>
      <div>
        <img src="https://res.cloudinary.com/occupapp/image/upload/v1639926797/ZashiHR/zashilogo.png"/>
      </div>
      <div>
        {appSettings.map((set) => (
          <> 
            {set.type === "boolean" ?
              <>
                <label>{set.name.toLowerCase().split(" ")}</label>
                <Switch
                  onChange={event => handleChange(set.id, set.type, event)}
                  checked={changes.hasOwnProperty(set.id) ? changes[set.id] : (set.value === "true")}
                  name="changes"
                />
              </> :
              <>
                <label>{set.name}</label>
                <StyledInputNumber
                  type="number"
                  value={changes.hasOwnProperty(set.id) ? changes[set.id] : (set.value === "number")}
                  name="changes"
                  onChange={event => handleChange(set.id, set.type, event)}
                />
              </>
            }
          </>
        ))}
      </div>
      <MainButton
        text="Save"
        onClick={handleSave}
        disabled={false}
      />
    </div>
  );
};

export default AppSettings;