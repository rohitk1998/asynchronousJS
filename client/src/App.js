import { Route } from "react-router-dom";
import "./App.css";
import { mainRoute } from "./routes/mainroute";
// import storage from 'redux-persist/lib/storage'

function App() {

  // storage.removeItem("persist:root");

  return (
    <>
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
