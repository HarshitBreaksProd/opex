import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Charts from "./components/pages/charts/charts";

export const router = createBrowserRouter([
  {
    path: "/home",
    Component: App,
  },
  {
    path: "/",
    children: [
      {
        path: "/charts",
        Component: Charts,
      },
    ],
  },
]);
