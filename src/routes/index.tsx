import { createBrowserRouter } from "react-router-dom";
import routerPublic from "./public.routes";
import routerPrivate from "./private.routes";


const routes = createBrowserRouter([
    ...routerPrivate,
    ...routerPublic
]);

export default routes;