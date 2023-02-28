import { createContext, useContext, useState } from "react";


 const defaultContextValue={isloggedin:false};

const AuthContext=createContext(defaultContextValue);

const AuthProvider=({children})=>{
    const [login,setLogin]=useState(false);
    return (
    <AuthContext.Provider value={{login,setLogin}}>
        {children}
    </AuthContext.Provider>
    )
};
const useAuth=()=>useContext(AuthContext);
export {useAuth,AuthProvider};