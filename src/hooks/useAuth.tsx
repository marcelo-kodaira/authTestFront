import React, {
    PropsWithChildren,
    createContext,
    useContext,
    useEffect,
    useState,
    useMemo,
} from "react";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useServiceCall } from "./use-service-call";
import { service } from "@/services";
import { client } from "@/services/client";

export type UserType = {
    id: string;
    name: string;
    email: string;
    token: string;
    createdAt: string;
    updatedAt?: string
};


type handleSignUpProps = {
    name: string;
    email: string;
    password: string;
};

type AuthContextType = {
    user?: UserType;
    setUser: React.Dispatch<React.SetStateAction<UserType | undefined>>;
    handleLogin: (email: string, password: string) => Promise<void>;
    handleSignUp: (args: handleSignUpProps) => Promise<void>;
    handleLogout: () => void;
    isLoading: boolean;
};


const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: PropsWithChildren) {
    const [user, setUser] = useState<UserType>();
    const [isLoading, setIsLoading] = useState(false);


    const { callService: signIn, value: authenticatedUser } = useServiceCall(service.authentication.signIn);
    const { callService: signUp } = useServiceCall(service.authentication.signUp);

    const handleLogin = async (email: string, password: string) => {
        setIsLoading(true);
        await signIn({ email, password });

        if (authenticatedUser && authenticatedUser.token) {
            Cookies.set("@tokenUser", authenticatedUser.token, { httpOnly: true });
            client.defaults.headers.common.Authorization = `Bearer ${authenticatedUser.token}`;
            toast("Authentication successful", { type: "success" });
            setUser(authenticatedUser);
            window.location.href = "/dashboard";
        } else {
            toast("Incorrect email or password", { type: "error" });
        }
        setIsLoading(false);
    };

    const handleSignUp = async ({name, email, password}: handleSignUpProps) => {
        try {
            await signUp({ name, email, password });
            window.location.href = "/login";
            toast("Registration successful. Please log in.", { type: "success" });
        } catch (error) {
            toast("O Cadastro falhou, tente novamente mais tarde.", { type: "error" });
            console.error(error)
        }
    };

    const handleLogout = () => {
        Cookies.remove("@tokenUser");
        setUser(undefined);
        client.defaults.headers.common.Authorization = '';
        window.location.href = "/login";
        toast("You have been logged out.", { type: "info" });
    };

    useEffect(() => {
        const tokenUser = Cookies.get("@tokenUser");
        if (tokenUser) {
            client.defaults.headers.common.Authorization = `Bearer ${tokenUser}`;
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, handleLogin, handleSignUp, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(): AuthContextType {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return useMemo(() => context, [context]);
}
