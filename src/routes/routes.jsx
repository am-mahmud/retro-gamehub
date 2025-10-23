import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import About from "../pages/About/About";
import Developer from "../pages/Developer/Developer";
import MyProfile from "../pages/Profile/MyProfile";
import ResetPassword from "../pages/Auth/ResetPassword";
import PrivetRoutes from "./PrivetRoutes";
import GameDetails from "../pages/Games/GameDetails";
import AllGames from "../pages/AllGames/AllGames";
import NotFound from "../pages/NotFound/NotFound";
import UpdateProfile from "../pages/Profile/UpdateProfile";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                index: true,
                Component: Home,
                
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/developer',
                element: <PrivetRoutes>
                    <Developer></Developer>
                </PrivetRoutes>
            },
            {
                path: "/profile",
                element: <PrivetRoutes>
                    <MyProfile></MyProfile>
                </PrivetRoutes>
            },
            {
                path: "/updateprofile",
                element: <PrivetRoutes>
                   <UpdateProfile></UpdateProfile>
                </PrivetRoutes>
            },
            {
                path: "/gamedetails",
                element: <PrivetRoutes>
                   <GameDetails></GameDetails>
                </PrivetRoutes>
            },
             {
                path: "/allgames",
                element: <PrivetRoutes>
                   <AllGames></AllGames>
                </PrivetRoutes>
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/resetpassword",
                element: <ResetPassword></ResetPassword>
            },

        ]
    }
]);

export default router;