import { useState } from "react";
const NewComponent=()=>{
    const [userdata,setUserData]=useState({
        username:"no username",
        messages:{
            text:"no message",
            id:1
        }
    })
    const [state,setState]=useState({
        fname:"peter",
        yoe:8
    })
    const updateValues=(attr,val)=>{
        setState({...state,[attr]:val})
    }
    const updateState=()=>{
        console.log(userdata)
      /*  setUserData({...userdata,
            username:"john",
            messages:
            {
                text:"sample text"
            }}
            )
        }*/
        setUserData({...userdata,
            username:"peter",
            messages:
            {
            ...userdata.messages, 
                text:"new text"
            }
           }
            )
        } 
    return(
        <div>
            <h1>Object Nesting</h1>
     {   /*    <h2>{userdata.username}</h2>
            <h3>{userdata.messages.text}</h3>
    <button onClick={updateState}>update</button>*/}
    <h2>{state.fname}</h2>
    <h3>{state.yoe}</h3>
    <button onClick={()=>updateValues("fname","admin")}>update</button>



        </div>
    )
}

export default NewComponent