import './App.css';
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/store';
import { ApolloProvider } from '@apollo/client';
import apolloClient from './api/apollo-client';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './AppRouter';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';


const App = () => {  
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={apolloClient}>
          <Router>
            <AppRouter />
          </Router>
        </ApolloProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default App;
