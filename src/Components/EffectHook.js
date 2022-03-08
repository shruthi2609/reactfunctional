import { useEffect,useState } from "react";
import  ChildComponent  from "./ChildComponent";
const EffectHook=()=>{
    const [msg,setMsg]=useState("")
    const [count,setCount]=useState(0)
    //end point 1 -> product name
    // end point 2 -> username 
   /*   useEffect(
        ()=>{
            console.log("useeffect of parent")
     //   return ()=>{console.log("unmounting")}
        }
     ,[msg])
  useEffect(
        ()=>{
            console.log("count changed")
        }
    ,[count])*/
    const updateMsg=()=>{
        setMsg("updated")
    }
    const updateCount=()=>{
        setCount(count+1)
    }
    return(
        <div>
            {console.log("parent's render")}
            <h1>Effect Hooks {msg}</h1>
            <h3>{count}</h3>
            <button onClick={updateMsg}>update</button>
            <button onClick={updateCount}>+</button>
            <ChildComponent msgProp={msg}></ChildComponent>
        </div>
    )

}
export default EffectHook