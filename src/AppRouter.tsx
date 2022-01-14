import { useRoutes } from 'react-router-dom';
import CreatePassword from './views/create-form/create-password';
import CreateUser from './views/create-form/create-user';
import InvitationInvalid from './views/invitation-invalid';
import CompanyLogin from './views/login/authenticate-admin';
import UserLogin from './views/login/authenticate-user';

const AppRouter = () => {
  let element = useRoutes([
    { path: 'login', element: <UserLogin />},
    { path: 'admin_login', element: <CompanyLogin />},
    { path: 'create_new_user', element: <CreateUser />},
    { path: 'set_password', element: <CreatePassword />, children: [
      {path: ':token'}
    ]},
    { path: 'request_invalid', element: <InvitationInvalid />},
  ]);
  return ( element );
};

export default AppRouter;

// OTRA MANERA DE HACERLO

// <BrowserRouter>
//   <Routes>
//     <Route path="/login" element={<UserLogin />}></Route>
//   </Routes>
// </BrowserRouter>