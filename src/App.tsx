import { RouterProvider } from "react-router-dom";
import { APP_ROUTES } from "./routes/Routes";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={APP_ROUTES} />
      </Provider>
    </>
  );
}

export default App;
