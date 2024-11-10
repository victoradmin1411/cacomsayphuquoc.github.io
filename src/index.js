import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ContactPage } from './pages/contact';
import { ProductPage } from './pages/product';
import { HomePage } from './pages/home';
import { ProcedurePage } from './pages/procedure';
import { PricePage } from './pages/price';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "procedure/",
        element: <ProcedurePage />,
      },
      {
        path: "contact/",
        element: <ContactPage />,
      },
      {
        path: "product/",
        element: <ProductPage />,
      },
      {
        path: "price/",
        element: <PricePage />,
      },
    ],
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
