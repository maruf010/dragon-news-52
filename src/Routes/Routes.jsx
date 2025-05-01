import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Root from "../layout/Root";
import CategoryNews from "../Pages/CategoryNews";


const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children:[
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
    }
])

export default router;