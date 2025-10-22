import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import About from "../pages/About/About";
import Developer from "../pages/Developer/Developer";
import MyProfile from "../pages/Profile/MyProfile";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/developer',
                element: <Developer></Developer>
            },
            {
                path: '/profile',
                element: <MyProfile></MyProfile>
            },
            {
                path: "/profile",
                element: (
                    <PrivateRoute>
                        <MyProfile></MyProfile>
                    </PrivateRoute>
                ),
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/signin",
                element: <Login></Login>
            },

        ]
    }
]);

export default router;