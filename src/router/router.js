import { createBrowserRouter } from "react-router";
import Notfound from "../components/notfound/Notfound";
import Layout from "../components/layout/Layout";
import Home from "../pages/home/Home";
import Admin from "../pages/admin/Admin";
import Layoutadmin from "../pages/admin/components/layout/Layoutadmin";
import Dashboard from "../pages/admin/components/dashboard/Dashboard";

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
        Component: Layoutadmin,
        children: [
            {
                path: "/admin",
                Component: Admin
            },
            {
                path: "/admin/dashboard",
                Component: Dashboard
            }
        ]
    },
    {
        path: "*",
        Component: Notfound
    }
])