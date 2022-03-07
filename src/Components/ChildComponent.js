import { useMemo,useEffect } from "react";
import React from "react";
export const ChildComponent=(props)=>{
    
    useEffect(
        ()=>{
            console.log("child's useeffect")
        }
    ,[])
    const getDetails=useMemo(()=>console.log("details"),[props.msgProp])
    return(
        <div>
            {console.log("inside child's render")}
            <h2>Child Component</h2>
            <h3>{props.msgProp}</h3>
        </div>
    )}
