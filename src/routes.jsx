import App from "./App";
import Home from "./Home";
import ErrorPage from "./ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "Home/:name",
    element: <Home />,
  },
];

export default routes;
