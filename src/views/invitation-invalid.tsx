import { useNavigate } from "react-router-dom";
import AlertPage from "../components/alert-page";

const InvitationInvalid = () => {

  const navigate = useNavigate();

  const handleRedirection = () => {
    navigate("");
  };

  return(
    <AlertPage
      text="The time to change the password expired, please contact the administrator to send you the invitation again"
      buttonText="Back"
      onClick={handleRedirection}
    />
  );
};

export default InvitationInvalid;