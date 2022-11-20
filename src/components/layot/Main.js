import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';

const MMain = () => {
    return (
        <div>
<Navbar></Navbar>
<Outlet></Outlet>
        
        </div>
    );
};

export default MMain;