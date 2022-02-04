import { useApolloClient } from "@apollo/client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import GetOwnInfo from "../api/gql/query/get-own-info-query";
import { RootState } from "../redux/store";
import useStyles from "../styles/layout-style";
import storage, { AUTH_TOKEN } from "../utils/storage";
import Search from "./search";

const Layout = () => {
  const { userInfo } = useSelector((state: RootState) => state.sessions);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [ searchValue, setSearchValue ] = useState({});
  const apollo = useApolloClient();

  const handleLogout = () => {
    storage.remove(AUTH_TOKEN);
    dispatch({ type: 'REMOVE_USER_INFO'});
  };

  const handleInputChange = (e: any) => {
    setSearchValue(
      {...searchValue,
          [e.target.name]: e.target.value,
      }
    );
  };

  const loadUserInfo = async () => {
    try {
      const token = storage.get(AUTH_TOKEN) || storage.get(AUTH_TOKEN, true);
      if(token) {
        const { data } = await apollo.query({
          query: GetOwnInfo
        });
        dispatch({ type: 'STORE_USER_INFO', payload: data.getOwnInfo.user })
      };
    } catch(error) {
      alert("error")
    }
  };

  useEffect(() => {
    loadUserInfo();
  }, []);
  

  return(
    <div>
      <div className={classes.top_bar}>
        {userInfo ?
          <button onClick={handleLogout} className={classes.logout_button}>Logout</button> :
          <Link className={classes.logout_button} to="/login">Login</Link>
    }
      </div>
      <header className={classes.header_bar}>
        {userInfo ? 
          <div className={classes.settings_bar}>
            <div className={classes.settings_and_profile}>COMPANY LOGO HERE</div>
            <Link to="settings">Settings</Link>
            <Link to="my_profile">My Profile</Link>
          </div> :
          <div className={classes.settings_bar}>
            <div>COMPANY LOGO HERE</div>
          </div>
        }

        {userInfo ?
          <div className={classes.menu_bar}>
            <div>
              <Link to="/" className={classes.link_bar}>Home</Link>
              <Link to="" className={classes.link_bar}>Employees</Link>
              <Link to="" className={classes.link_bar}>Job Openings</Link>
              <Link to="" className={classes.link_bar}>Reports</Link>
              <Link to="" className={classes.link_bar}>Files</Link>
            </div>
            <div className={classes.search}>
              <Search
                placeholder="Search..."
                type="text"
                onChange={() => handleInputChange}
              />
            </div>
          </div> :
          <div className={classes.menu_bar}>
            <Link to="/" className={classes.link_bar}>Home</Link>
          </div>
      }

      </header>
      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;