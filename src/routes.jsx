import App from "./App";
import Shopping from "./Shopping";
import ErrorPage from "./ErrorPage";
import Home from './Home';

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "shopping/:name",
        element: <Shopping />
      },
    ],
  },
];

export default routes;
