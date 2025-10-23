import React from 'react';

import ErrorPage from '../../components/ErrorPage/ErrorPage';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { Helmet } from 'react-helmet';

const NotFound = () => {
    return (
        <div>
             <Helmet>
                <meta charSet="utf-8" />
                <title>404 - GameHub</title>
            </Helmet>

            <Header></Header>
            <ErrorPage></ErrorPage>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;