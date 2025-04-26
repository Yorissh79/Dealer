import { createBrowserRouter } from "react-router";
import Notfound from "../components/notfound/Notfound";
import Layout from "../components/layout/Layout";
import Home from "../pages/home/Home";
import Admin from "../pages/admin/Admin";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                path: "/",
                Component: Home
            },
        ]
    },
    {
        path: "/admin",
        Component: Admin
    },
    {
        path: "*",
        Component: Notfound
    }
])