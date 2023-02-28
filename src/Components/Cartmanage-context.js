import { useContext,createContext,useReducer } from "react";
import ManageReducer from "./ManageReducer";
import {Items} from './Pages/Products'
const useManage=()=>useContext(Cartmanagecontext)
const Cartmanagecontext=createContext(null);
const ItemsFinal=Items;
const UseManageProvider=({children})=>{
    const [state,dispatch]=useReducer(ManageReducer,
        {
        items:0,
        wishlist:0,
        cartItems:[],
        wishlistItems:[],
        total:[],
        totalprice:0,
        search:"",
        Items:ItemsFinal,
        sortBy:"",
        Items2:ItemsFinal
        }
        )
    return(
        <Cartmanagecontext.Provider value={{state,dispatch}}>
            {children}
        </Cartmanagecontext.Provider>
    )
}
export {useManage,UseManageProvider}