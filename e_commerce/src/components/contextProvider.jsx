import Context from "./createContext";
import { useState } from "react";
// import Entrance from './Entrance/entrance'
const Provider=(props)=>{
    const [arr,setarr]=useState([]);
    return(
        <>
        <Context.Provider value={{urr:arr,seturr:setarr}}>
        {props.children}
       </Context.Provider>
        </>
    )
}
export default Provider;