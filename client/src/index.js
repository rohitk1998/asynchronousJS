import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import {  Provider  } from "react-redux" ; 
import  configureStore  from "./redux/store/store";
import { PersistGate } from 'redux-persist/integration/react'




const { store , persistor  } = configureStore()


ReactDOM.render(
  <React.StrictMode>
    <Router>
   <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Router>
        <App/>
    </Router>
      </PersistGate>
    </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
