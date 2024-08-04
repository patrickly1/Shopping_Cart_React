import App from "./App";
import Shopping from "./Shopping";
import ErrorPage from "./ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "Shopping/:name",
    element: <Shopping />,
  },
];

export default routes;
