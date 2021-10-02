import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import {  Provider  } from "react-redux" ; 
import  configureStore  from "./redux/store/store";
import { PersistGate } from 'redux-persist/integration/react'
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache
} from "@apollo/client";
import { client } from "./apollo/apolloclient"



const { store , persistor  } = configureStore()


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <ApolloProvider client={client}>
   <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Router>
        <App/>
    </Router>
      </PersistGate>
    </Provider>
   </ApolloProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
