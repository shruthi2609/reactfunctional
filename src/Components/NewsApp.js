import {useState,useEffect, useRef} from "react"
import axios from "axios"
const NewsApp=()=>{
    const [news,setNews]=useState([])
    const [text,setText]=useState("")
    const txtinp=useRef("")
     useEffect(  async ()=>{
        const res=await axios.get("https://hn.algolia.com/api/v1/search?query="+text)
        setNews(res.data.hits)
    }
    ,[text])
/*const handleAPI=async (e)=>{
    e.preventDefault()
   const res=await axios.get("https://hn.algolia.com/api/v1/search?query="+text)
  setNews(res.data.hits)
}*/
const setSearch=(e)=>{
e.preventDefault()
setText(txtinp.current.value)
}
    return(
        <div>
            <h2>News Application</h2>
        <form>
                <input type="text" ref={txtinp}></input>
        <button onClick={(e)=>setSearch(e)}>search</button>
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
export default NewsApp