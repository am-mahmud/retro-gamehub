import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import { AnimatePresence } from 'framer-motion';

const MainLayout = () => {
    return (
        <div>

            <Header></Header>
          
                <div className='min-h-screen max-w-7xl mx-auto'>
                    <Outlet></Outlet>
                </div>

            <Footer></Footer>
        </div>
    );
};

export default MainLayout;