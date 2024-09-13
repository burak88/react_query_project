import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import HomePage from "../pages/home";
import CharacterDetail from "../pages/characterDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/character",
        element: <HomePage />,
      },
      {
        path: "/character/:character_id",
        element: <CharacterDetail/>
      }
    ],
  },
]);
