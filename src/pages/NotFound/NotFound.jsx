import React from 'react';

import ErrorPage from '../../components/ErrorPage/ErrorPage';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';


const NotFound = () => {
    return (
        <div>
            
            <title>404 - Not Found</title>

            <Header></Header>
            <ErrorPage></ErrorPage>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;