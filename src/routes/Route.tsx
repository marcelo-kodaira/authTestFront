import React, { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import Cookie from "js-cookie";


interface RouteProps extends PropsWithChildren {
    isPublic?: boolean;
    fallback?: JSX.Element | string;
}

export const Route: React.FC<RouteProps> = ({ children, isPublic = false, fallback }) => {
    const token = Cookie.get("@tokenUser");
    // Implement backend token validation for scenarios where API calls are not made on the page.

    if (!isPublic && !token) {
        if(!fallback)  return <Navigate to="/login" replace />;
        handleFallback(fallback);
    }

    return <>{children}</>;
};


const handleFallback = (fallback: JSX.Element | string) => {
    if(typeof fallback === "string") return <Navigate to={fallback} replace />;
    return fallback;
};