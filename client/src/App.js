import { Route } from "react-router-dom";
import "./App.css";
import { mainRoute } from "./app_routes/mainroute";

function App() {
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
