/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from "axios";
import { useServiceCall } from "./use-service-call.hook";

type ExtractAxiosReturn<T> = T extends AxiosResponse<infer R> ? R : never;

export type UseServiceCallReturn<T extends (...args: any) => any> = ReturnType<
    typeof useServiceCall<
        Parameters<T>,
        ExtractAxiosReturn<Awaited<ReturnType<T>>>
    >
>;