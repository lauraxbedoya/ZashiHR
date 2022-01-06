import { ApolloClient, createHttpLink, DefaultOptions, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { REACT_APP_API_EP } from "../utils/env";
import storage, { AUTH_TOKEN } from "../utils/storage";

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${storage.get(AUTH_TOKEN) || storage.get(AUTH_TOKEN, true)}`,
    },
  };
});

const httpLink = createHttpLink({ uri: "https://zashi-hr.herokuapp.com/graphql" });

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};

const apolloClient = new ApolloClient({
  ssrMode: typeof window === undefined,
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
  defaultOptions,
});

export default apolloClient;
