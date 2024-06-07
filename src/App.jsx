import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Home } from "./routes/home";
import Cursos from "./routes/Cursos";
import Login from "./routes/login";
import Register from "./routes/register";
import Error from "./routes/error";

const rutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/cursos",
    element: <Cursos />,
  },
  {
    path: " debatir ",
    element: "/Debatir",
  },
  {
    path: " hazte_pro ",
    element: "/Hazte_pro",
  },
  {
    path: " team ",
    element: "/Team",
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register/>,
  },
]);
export function App() {
  return <RouterProvider router={rutes} />;
}
