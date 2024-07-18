import { DashboardPage } from "@/pages/dashboard";
import { SignInPage } from "@/pages/signIn";
import { SignUpPage } from "@/pages/signUp";
import { EditUserPage } from "@/pages/userDetails";


const routerPublic = [
    {
        path: "/login",
        element: <SignInPage />,
    },
    {
        path: "/register",
        element: <SignUpPage />,
    },
    {
        path: "/dashboard",
        element: <DashboardPage />,
    },
    {
        path: "/edit-user",
        element: <EditUserPage />,
    }
];

export default routerPublic;
