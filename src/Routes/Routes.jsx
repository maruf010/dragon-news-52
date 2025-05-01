import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Root from "../layout/Root";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../layout/AuthLayout";


const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/category/:id',
                Component: CategoryNews,
                loader: () => fetch('/news.json')
            }
        ]
    },
    {
        path: '/auth',
        Component: AuthLayout,
        children: [
            {
                path: '/auth/login',
                Component: Login
            },
            {
                path: '/auth/register',
                Component: Register
            }
        ]
    }
])

export default router;