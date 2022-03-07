import {useState,useEffect, useRef} from "react"
import axios from "axios"
const NewsAppCopy=(props)=>{
    const [news,setNews]=useState([])
    const [text,setText]=useState("")
    const txtinp=useRef("")
    //handle input and call api
    const handleSubmit=async (e)=>{
    e.preventDefault()
    const result=await props.handleAPI(text)
    setNews(result)
    }
    const handleInput=(e)=>{
        setText(e.target.value)
    }
    return(
        <div>
            <h2>News Application</h2>
        <form>
                <input type="text" onChange={(e)=>handleInput(e)}></input>
        <button onClick={(e)=>handleSubmit(e)}>search</button>
    </form>
    {
        news.map((item)=>(
            <div>
                <h1>{item.title}</h1>
                <a href={item.url}>read here</a>
                </div>
        ))
    }
        </div>
    )
}
export default NewsAppCopy