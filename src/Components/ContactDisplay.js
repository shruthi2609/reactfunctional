import {useState,useMemo} from "react"
import React from "react"
const ContactDisplay =(props)=>{
    const [text,setText]=useState("")
    const [searchText,setsearchText]=useState("")
    const handleChange=(e)=>{
        setText(e.target.value)
    }
    const handleSearch=(e)=>{
        e.preventDefault()
        setsearchText(text)
    }
    const getContacts=useMemo(()=>{
        console.log("inside get contacts")
        const arr=[...props.contact.filter((item)=>item.name===searchText)]
        return arr
    },[props.contact,searchText])
    
    return(
        <div>
            {}
            {console.log("inside contact display")}
            
            <form>
            <input type="text" placeholder="enter name" onChange={(e)=>handleChange(e)}></input>
           <button onClick={(e)=>handleSearch(e)}>search</button>
            </form>
            {
                getContacts.map(
                    (item)=>(
                        <div>
                            <h2>{item.name}</h2>
                            <h3>{item.phone}</h3>
                            </div>
                    )
                )
            }
        </div>
    )
}
export default ContactDisplay