
import { Route } from "./Route";
import { ErrorPage } from "@/pages/error";
import { BasePage } from "@/layout/Base";


const routerPrivate = [
    {
        path: "/",
        errorElement: <ErrorPage />,
        element: (
            <Route>
                <BasePage />
            </Route>
        ),
        children: [

        ],
    },
];

export default routerPrivate;
