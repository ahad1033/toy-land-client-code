import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import ViewDetails from "../pages/viewDetails/ViewDetails";
import Blogs from "../pages/blogs/Blogs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <SignUp />
            }
        ]
    },
    {
        path: '/toydetails',
        element: <ViewDetails />,
        loader: ({params}) => fetch(`http://localhost:5000/alltoys/${params.id}`)
    },
    {
        path: '/blogs',
        element: <Blogs />
    }
]);

export default router;