import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MMain from '../layot/Main';
import Home from '../Home';
import Login from '../Login';
import Register from '../Register';
import ErrorPage from '../ErrorPage';
import Profile from '../Profile';
import Wallet from '../Wallet';
import Privet from './Privet';

const Routs = () => {


    const routes=createBrowserRouter([
        {
            path: '/',
            element:<MMain></MMain>,
            errorElement:<ErrorPage></ErrorPage>,
            children:[{
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/home",
              element:<Home></Home>
            },{
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/profile",
                element:<Profile></Profile>
            },
            {
                path:"/wallet",
                element:<Privet><Wallet></Wallet></Privet>
            }
        
        
        
        ]

        }
    ])
    return (
      <RouterProvider router={routes}></RouterProvider>
    );
};

export default Routs;