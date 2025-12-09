import React from 'react';
import Navbar from '../../components/Headers/Navbar';
import { Outlet } from 'react-router';
import Footers from '../../components/Footers/Footers';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footers></Footers>
        </div>
    );
};

export default Root;