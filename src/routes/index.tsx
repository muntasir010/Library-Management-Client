import App from "@/App";
import Home from "@/pages/Home/Home";
import { createBrowserRouter } from "react-router";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
        {
          index: true,
          element: <Home/>
        },
        // {
        //   path: "tasks",
        //   element: </>
        // },
        // {
        //   path: "users",
        //   element: <Users/>
        // },
    ]
  },
]);
