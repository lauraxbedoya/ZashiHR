import { useApolloClient } from "@apollo/client";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import GetOwnInfo from "../../api/gql/query/get-own-info-query";
import { UserType } from "../../utils/types";
import useStyles from "./profile-style";


const ProfileUser = () => {
  const classes = useStyles();
  const apollo = useApolloClient();
  const [ userInfo, setUserInfo ] = useState<UserType | null>(null);

  const getUser = async () => {
    const { data } = await apollo.query({
      query: GetOwnInfo,
    });
    setUserInfo(data.getOwnInfo.user);
  };

  useEffect(() => {
    getUser();
  }, []);

  return(
    <div className={classes.root}>
      <div className={classes.tabs_bar}>
        <div className={classes.div_file}>
          <input
            type="file"
          />
        </div>
        <div className={classes.div_bar}>
          <div className={classes.name_and_position}>
            <span>{userInfo?.firstName}</span>
            <span>{userInfo?.position}</span>
          </div>
          <div className={classes.menu_personal}>
            <nav>
              <Link to="personal">Personal</Link>
              <Link to="job">Job</Link>
              <Link to="time_off">Time Off</Link>
              <Link to="documents">Documents</Link>
              <Link to="benefits">Benefits</Link>
              <Link to="emergency">Emergency</Link>
            </nav>
          </div>
        </div>
      </div>

      <div className={classes.info_tabs}>
        <div className={classes.left_info_user}>
          <div></div>
          <div>
            <span>Hire Date</span>
            <span>{userInfo?.hireDate}</span>
          </div>
          <div></div>
          <div></div>
        </div>
        <div className={classes.tabs}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;