import {useState, createContext, useEffect} from 'react';
import axios from "axios";
import { useRouter } from "next/router";
    const UserContext = createContext();

    const UserProvider = ({children}) => {
        const [state, setState] = useState({
            user: {},
            token: '',
        }); 

        useEffect(() => {
            setState(JSON.parse(window.localStorage.getItem('auth')));
        }, [])
    
    const router = useRouter();

    const token = state && state.token ? state.token : "";
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_API;
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    
    axios.interceptors.response.use(
        function (response) {
            return response;
        }, 
        function (error) {
            let res = error.response;
            if (res) {
                // Check specific error status codes and handle them accordingly
                if (res.status === 401 && res.config && !res.config.__isRetryRequest) {
                    setState(null);
                    window.localStorage.removeItem("auth");
                    router.push("/login");
                }
                // You can add more custom error handling here for other status codes if needed
            } else {
                // Handle network errors or other cases where error.response is not available
                // Let the original error handling continue
                return Promise.reject(error);
            }
        }
    );
    

    return (
        <UserContext.Provider value={[state, setState]}>
            {children}
        </UserContext.Provider>
    )
};

export { UserContext, UserProvider };