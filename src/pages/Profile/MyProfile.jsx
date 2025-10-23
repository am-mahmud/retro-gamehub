import React from 'react';
import { Helmet } from 'react-helmet';

const MyProfile = () => {
    return (
        <div>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Profile - GameHub</title>
            </Helmet>

            <h1>This is profile</h1>
        </div>
    );
};

export default MyProfile;