import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./routes/root.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page.jsx";
import Home from "./pages/Home.jsx";
import Apps from "./routes/apps";
import Edit from "./routes/edit";

const router = createBrowserRouter([
  {
    path: "/chirrpy/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/chirrpy/apps",
        element: <Apps />,
      },
      {
        path: "/chirrpy/apps/editor",
        element: <Edit />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
