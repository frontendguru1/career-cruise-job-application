import { RouterProvider } from "react-router-dom";
import { appRoutes } from "./routes/AppRouting";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={appRoutes} />
      </Provider>
    </>
  );
}

export default App;
