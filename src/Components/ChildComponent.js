import { useMemo,useEffect } from "react";
import React from "react";
const ChildComponent=(props)=>{
   /* useEffect(
        ()=>{
            console.log("child's useeffect")
        }
    ,[])*/

    return(
        <div>
            {console.log("inside child's render")}
            <h2>Child Component</h2>
            <h3>{props.msgProp}</h3>
        </div>
    )}
export default React.memo(ChildComponent)