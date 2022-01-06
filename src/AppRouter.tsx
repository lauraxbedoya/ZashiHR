import { BrowserRouter, useRoutes } from 'react-router-dom';
import CompanyLogin from './views/login/authenticate-company';
import UserLogin from './views/login/authenticate-user';

const AppRouter = () => {
  let element = useRoutes([
    { path: 'user_login', element: <UserLogin />},
    { path: 'company_login', element: <CompanyLogin />},
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