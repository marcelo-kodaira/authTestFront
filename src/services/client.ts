import axios from "axios";

export const client = axios.create({
    headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "false",
    },
});

//Refresh Token
// type RefreshResponse = {
//     accessToken: string;
// };
// let isRefreshing = false;
// let refreshSubscribers: ((token: string) => void)[] = [];

// const  subscribeTokenRefresh = (cb: (token: string) => void): void  =>{
//     refreshSubscribers.push(cb);
// }

// const  onRefreshed = (token: string): void => {
//     refreshSubscribers.forEach(cb => cb(token));
//     refreshSubscribers = [];
// }

// const  refreshToken = (): Promise<string>  => {
//     if (!isRefreshing) {
//         isRefreshing = true;
//         const refreshToken = Cookies.get('refreshToken');
//         if (!refreshToken) {
//             isRefreshing = false;
//             return Promise.reject("No refresh token available");
//         }
//         return axios.post<RefreshResponse>('/api/auth/refresh', { refreshToken })
//             .then(response => {
//                 const { accessToken } = response.data;
//                 axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
//                 Cookies.set('accessToken', accessToken);
//                 isRefreshing = false;
//                 onRefreshed(accessToken);
//                 return accessToken;
//             }).catch(err => {
//                 isRefreshing = false;
//                 return Promise.reject(err);
//             });
//     }

//     return new Promise((resolve) => {
//         subscribeTokenRefresh(token => resolve(token));
//     });
// }

// axios.interceptors.response.use(response => response, error => {
//     if (error.response && error.response.status === 401) {
//         return refreshToken().then(token => {
//             error.config.headers['Authorization'] = `Bearer ${token}`;
//             return axios.request(error.config);
//         }).catch(err => {
//             console.error('Refresh token invalid, redirect to login');
//             window.location.href = '/login';
//             return Promise.reject(err);
//         });
//     }
//     return Promise.reject(error);
// });
