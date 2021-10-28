import { ChakraProvider } from "@chakra-ui/react";
import theme from "definitions/chakra/theme";
import "styles/global.css";
import { initializeApollo } from "services/graphql";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import store from "redux/store";

import Home from "pages";

function App(): JSX.Element {
  const apolloClient = initializeApollo();
  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <Provider store={store}>
          <div className="App">
            <Home />
          </div>
        </Provider>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default App;
