
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import toast, { Toaster } from 'react-hot-toast';

import Homepage from './Components/Homepage';
import Dashboard from './Components/Dashboard/Dashboard';
import ErrorPage from './error-page';

const router = createHashRouter([
 
  {
    path: "/dashboard",
    element: <Dashboard/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Homepage />,
    
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
