import { useState,useRef,useEffect } from "react"

const FormComponent=()=>{
   /* const [uname,setUsername]=useState("")
    const [password,setPassword]=useState("")*/
    const [userdata,setUserData]=useState({
        uname:"",
        password:""
    })
    const userRef=useRef()
    useEffect(()=>{
      console.log("inside useeffect")
     return ()=>console.log("unmounting")
    },[])
    useEffect(()=>{
        console.log("inside useeffect")
       return ()=>console.log("unmounting")
      },[])

   const handleChange=(e)=>{
   const {name,value}=e.target
    setUserData({...userdata,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(userdata)
        console.log(userRef.current.value)
    }
    return(
        <div>
            {console.log("render")}
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="username" 
            name="uname" onChange={handleChange}></input>
            <input type="text" placeholder="password"
             name="password" onChange={handleChange}></input>
             <input type="text" placeholder="country" ref={userRef}></input>
            <input type="submit"></input>
            </form>
            <h3>{userdata.uname}</h3>
            <h3>{userdata.password}</h3>
        </div>
    )
}
export default FormComponent