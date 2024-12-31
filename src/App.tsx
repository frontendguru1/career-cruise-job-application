import { RouterProvider } from "react-router-dom";
import { appRoutes } from "./routes/AppRouting";

function App() {
  return <RouterProvider router={appRoutes} />;
}

export default App;
