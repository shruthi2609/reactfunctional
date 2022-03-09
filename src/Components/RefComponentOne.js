import { useEffect, useState } from "react"

export const User=()=>{
    const [user,setUser]=useState({
        userName:"John",
        email:"john@123"
    })
    useEffect(()=>
    {
        setTimeout(
            ()=>
            {
                setUser({
                    userName:"Peter",
                    email:"peter@123"
                })
            },4000

        )
    }
    )
    return(
        <div>
            <UserNameDisplay username={user.userName}></UserNameDisplay>
            <EmailDisplay email={user.email}></EmailDisplay>
        </div>
    )

}
const UserNameDisplay=(props)=>{
    return(
        <div>
            <h1>{props.username}</h1>
        </div>
    )
}
const EmailDisplay=(props)=>{
    return(
        <div>
            <h1>{props.email}</h1>
        </div>
    )
}


