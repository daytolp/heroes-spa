import { useContext } from "react"
import { AuthContext } from "../auth";
import { Navigate, useLocation } from "react-router-dom"


export const PrivateRoute = ({ children }) => {
    const { logged } = useContext(AuthContext);
    const { pathname, search} = useLocation();
    const lasPath = pathname + search;
    localStorage.setItem('lasPath', lasPath);

    return (logged) ? children : <Navigate to="/login"/>
}