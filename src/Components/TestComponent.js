import {useState, usestate} from "react"
const TestComponent=(props)=>{
const [msg,setMsg]=useState(props.msg)
const [count,setCount]=useState(props.count)
const [toggle,setToggle]=useState(false)
const [tech,setTech]=useState([
    {
        techname:"react",
        yoe:4
    }
])
const [fav,setFav]=useState({
    color:"red"
})
const handleFav=()=>{
   // setFav({color:"green"})
   setFav({...fav,food:"xyz"})
}
const handleMessage=()=>{
    setTech([...tech,{
        techname:"js",
        yoe:5
    }])
}
const handleMsg=()=>{
setMsg("updated")
}
const handleCount=()=>{
    setCount(count+1)
}
const handleToggle=()=>{
   setToggle(!toggle)
  
}
    return(
        <div>
            {   console.log("render")}
            <h1>Test component</h1>
            {
                toggle?
                <div>
                    <h3>{msg}</h3>
                    <h3>{count}</h3>
                    {tech.map((item)=>(
                        <h3>{item.techname}:{item.yoe}years</h3>
                    ))}
                    <h4>{fav.color}</h4>
                    <h5>{fav.food}</h5>
                </div>:<div></div>
            }
             <button onClick={handleFav}>add/update Fav</button>
            <button onClick={handleMessage}>add data</button>
            <button onClick={handleToggle}>toggle</button>
            <button onClick={handleMsg}>update msg</button>
            <button onClick={handleCount}>update count</button>
        </div>
    )
}
export default TestComponent