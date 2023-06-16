import { createBrowserRouter } from "react-router-dom";


import Main from "../LayOut/Main";
import AddTask from "../pages/AddTask/AddTask";
import TaskList from "../pages/TaskList/TaskList";
import UpdateTask from "../pages/UpdateTask/UpdateTask";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <TaskList />,
      },
      {
        path: "/addtask",
        element: <AddTask />,
      },
      {
        path: "/tasklist",
        element: <TaskList />,
      },
      {
        path: "/taskupdate/:id",
        element: <UpdateTask />,
      },
    ],
  },
]);