import { useState } from "react"
import { useNavigate } from "react-router-dom"

const LoginComponent = ()=>{
    const [user,setUser]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()
    const handleChange=(e,key)=>{
        if(key==="uname"){
            setUser(e.target.value)
        }
        else{
            setPassword(e.target.value)
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(password==="test123"){
            navigate(`/dashboard/${user}/admin`)
        }
        else{
            navigate("/about?search=india&profile=true")
        }
    }
    return(
        <div>
            <form onSubmit={(e)=>handleSubmit(e)}>
              Username:  <input type="text" onChange={(e)=>handleChange(e,"uname")}></input>
              Password:  <input type="text" onChange={(e)=>handleChange(e,"pword")}></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}
export default LoginComponent