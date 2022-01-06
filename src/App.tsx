import './App.css';
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/store';
import { ApolloProvider } from '@apollo/client';
import apolloClient from './api/apollo-client';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './AppRouter';


const App = () => {
  
  return (
    <ReduxProvider store={store}>
      <ApolloProvider client={apolloClient}>
        <Router>
          <AppRouter />
        </Router>
      </ApolloProvider>
    </ReduxProvider>
  );
};

export default App;
