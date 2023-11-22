/* eslint-disable react/prop-types */

import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";
import Playground from "./pages/Playground";
import DifficultHome from "./pages/DifficultHome";
import Start from "./pages/Start";
import GameOver from "./pages/features/GameOver";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Start />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/over",

        element: <GameOver />,
      },
      {
        path: "/playground",
        element: <Playground />,
      },
      {
        path: "/difficult",
        element: <DifficultHome />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
