import { Navigate,useLocation } from "react-router-dom";

import { useAuth } from "./Pages/Auth-context";

export default function RequireAuth({children}){

    const location=useLocation();
    const {login}=useAuth();

    return login? children : <Navigate to="/login" state={{from:location}} replace />

}