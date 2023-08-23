import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Root from "./routes/root.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page.jsx";
import Home from "./pages/Home.jsx";

import MainApp from "./pages/MainApp.jsx";
import Library from "./components/Library.jsx";
import Editor from "./components/Editor.jsx";

const router = createBrowserRouter([
  {
    path: "/chirrpy/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: "/chirrpy/app",
    element: <MainApp />,
  },
  {
    path: "/chirrpy/app/editor",
    element: <Editor/>
  },
  {
    path: "/chirrpy/app/library",
    element: <Library />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
