import { createContext,useState,useContext,useMemo } from "react";
const UserContext = createContext()
export const ContextUpdate=()=>{
    const [userName,setUserName]=useState("no user")
    const value=useMemo(
        ()=>({userName,setUserName})
    ,[userName])
    return(
        <UserContext.Provider value={value}>
            <UpdateUserName></UpdateUserName>
         <DisplayInfo></DisplayInfo>
        </UserContext.Provider>
    )
}
const UpdateUserName=()=>{
    const {userName,setUserName}=useContext(UserContext)
    const [text,setText]=useState("initial")
    console.log(userName)
    const handleChange=(e)=>{
        setText(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setUserName(text)
    }
    return(
        <div>
            {console.log("state",text)}
            <h1>Update Username</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
            <input type="text" onChange={(e)=>handleChange(e)}></input>
            <input type="submit" ></input>
            </form>
            {console.log(text)}

        </div>
    )
}
const DisplayInfo=()=>{
    const {userName,setUserName}=useContext(UserContext)
    const changeUsername=()=>{
        setUserName("empty")
    }
    return(
        <div>
            <h1>{userName}</h1>
            <button onClick={changeUsername}>change</button>
        </div>
    )
}