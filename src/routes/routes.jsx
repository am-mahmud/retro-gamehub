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
import PageWrapper from "../components/PageWrapper/PageWrapper";
// import { AnimatePresence } from "framer-motion";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                index: true,

                element: <PageWrapper>
                    <Home></Home>
                </PageWrapper>,

            },
            {
                path: '/about',

                element:

                    <PageWrapper>
                        <About></About>
                    </PageWrapper>



            },
            {
                path: '/developer',
                element:
                    <PrivetRoutes>
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
                path: "/gamedetails/:id",
                element:
                    <PageWrapper>
                        <PrivetRoutes>
                            <GameDetails></GameDetails>
                        </PrivetRoutes>
                    </PageWrapper>

            },
            {
                path: "/allgames",
                element:
                    <PageWrapper>
                        <PrivetRoutes>
                            <AllGames></AllGames>
                        </PrivetRoutes>
                    </PageWrapper>

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