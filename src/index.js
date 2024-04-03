import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import Home from "./component/Pages/";
import Contact from "./component/Pages/UserSignUp/Contact";
// import Forms from "./component/Pages/";
import Cart from './component/Pages/ViewItemOnClick/Cart';
import Routes from './component/Pages/Routers/Routes';
import Productinfo from './component/Pages/ViewItemOnClick/Productinfo';
import { Provider } from 'react-redux';
import './index.css';



import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Middle from './component/Pages/SearchBar/Middle';
import { ReactReduxContext } from 'react-redux';
import Store from './redux/Store/Store';
import Addtocart from './component/Pages/AddToCart/Addtocart';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Routes />}>
      <Route index element={<App />} />
      {/* <Route path='/' element={<Middle/>}/> */}
      {/* <Route path='form' element={<Forms />} /> */}
      <Route path='contact' element={<Contact />} />
      <Route path='cart' element={<Addtocart />} />
      <Route path="/item/:id" element={<Productinfo />} />
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>

  </React.StrictMode>
);
