import { BrowserRouter, Routes, useRoutes, Route } from 'react-router-dom';
import AppSettings from './views/settings/app-setting';
import CreatePassword from './views/creation-forms/create-password';
import CreateUser from './views/creation-forms/create-user';
import InvitationInvalid from './views/invitation-invalid';
import CompanyLogin from './views/login/authenticate-admin';
import UserLogin from './views/login/authenticate-user';
import { Children, useEffect } from 'react';
import appSettings from './api/gql/query/app-settings-query';
import { useDispatch } from 'react-redux';
import { useApolloClient } from '@apollo/client';
import Layout from './components/layout';
import ProfileUser from './views/profile/profile-user';
import Personal from './views/profile/tabs/personal/personal';
import Job from './views/profile/tabs/job';

const AppRouter = () => {

  const dispatch = useDispatch();
  const apollo = useApolloClient();
  
  const getSettings = async () => {
    const { data } = await apollo.query({
      query: appSettings,
    });
    dispatch({ payload: data.appSettings });
  };

  useEffect(() => {
    getSettings();
  }, []);

  return(
    <Routes>
      <Route path="/" element={ <Layout/> }>
        <Route path="login" element={ <UserLogin/> } />
        <Route path="admin_login" element={ <CompanyLogin/> }/>
        <Route path="create_new_user" element={ <CreateUser/> }/>
        <Route path="set_password" element={ <CreatePassword/> }>
          <Route path=":token" />
        </Route>
        <Route path="request_invalid" element={ <InvitationInvalid/> }/>
        <Route path="settings" element={ <AppSettings/> }/>

        <Route path="my_profile" element={ <ProfileUser/> }>
          <Route path="personal" element={ <Personal/> }/>
          <Route path="job" element={ <Job /> }/>
          <Route path="time_off"/>
          <Route path="documents"/>
          <Route path="benefits"/>
          <Route path="emergency"/>
        </Route>

      </Route>
    </Routes>
  );
};

export default AppRouter;

// let element = useRoutes([
  //   { path: '', element: <Layout />, children: [
  //     { path: 'login', element: <UserLogin />},
  //     { path: 'admin_login', element: <CompanyLogin />},
  //     { path: 'create_new_user', element: <CreateUser />},
  //     { path: 'set_password', element: <CreatePassword />, children: [
  //       {path: ':token'}
  //     ]},
  //     { path: 'request_invalid', element: <InvitationInvalid />},
  //     { path: 'settings', element: <AppSettings />},
  //   ] }
  // ]);
  // return ( element );

// OTRA MANERA DE HACERLO

// <BrowserRouter>
//   <Routes>
//     <Route path="/login" element={<UserLogin />}></Route>
//   </Routes>
// </BrowserRouter>