import { useState } from "react"

export const Parent =()=>{
    const [userName,setUserName]=useState("inital")
    return(
        <div>
            <h1>{userName}</h1>
            <Child userName={userName}></Child>
        </div>
    )
}
const Child=(props)=>{
    const changeUsername=()=>{
        props.userName="final"
    }
return(
    <div>
        <h1>Child Component{props.userName}</h1>
        <button onClick={changeUsername}>change</button>
    </div>
)
}