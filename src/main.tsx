import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/profile",
    element: <Profile />
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);