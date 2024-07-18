import { env } from "@/lib/enviroments";

export const UserEndpoints = {
    base: `${env.VITE_API_USER}`,
    byId: (id: string) => `${env.VITE_API_USER}/${id}`,
    authentication: `${env.VITE_API_USER}/auth`
};