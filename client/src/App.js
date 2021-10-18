import { Route } from "react-router-dom";
import "./App.css";
import { mainRoute } from "./app_routes/mainroute";
// import storage from 'redux-persist/lib/storage'
import SingIn from "./components/authentication/singin";

function App() {

  // storage.removeItem("persist:root");

  console.log('sss')

  return (
    <>
     <Route path="/login" exact={true} component={SingIn} />
      {mainRoute.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            render={(props) => {
              return (
                <route.layout>
                  <route.component {...props} />
                </route.layout>
              );
            }}
          />
        );
      })}
    </>
  );
}

export default App;
