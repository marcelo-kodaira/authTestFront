import { AxiosResponse, isAxiosError } from "axios";
import { useCallback, useState } from "react";

type ServiceMethod<T extends unknown[], U> = (...args: T) => Promise<AxiosResponse<U>>;

export const useServiceCall = <T extends unknown[], U>(serviceMethod: ServiceMethod<T, U>) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<unknown>();
    const [value, setValue] = useState<U>();

    const callService = useCallback(async (...args: T) => {
        try {
            setLoading(true);
            setError(null);
            const response = await serviceMethod(...args);
            setValue(response.data);
            return {
                success: true,
                response: response,
            } as const;
        } catch (error: unknown) {
            if(!isAxiosError(error)) setError(error);
            return {
                success: false,
                error: error,
            } as const;
        } finally {
            setLoading(false);
        }
    }, [serviceMethod]);

    const clear = useCallback(() => {
        setLoading(false);
        setError(null);
        setValue(undefined);
    }, []);

    return { loading, error, value, callService, clear, hasError: !!error };
};
