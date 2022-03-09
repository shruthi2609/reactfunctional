import { useEffect, useRef, useState } from "react"

export const User=()=>{
    const user=useRef({
        userName:"john",
        email:"john@123"

    })
    useEffect(()=>
    {
        setTimeout(
            ()=>
            {
                user.current={
                    userName:"peter",
                    email:"peter@123"
                }
            },4000

        )
    }
    )
    return(
        <div>
            <UserNameDisplay username={user.current.userName}></UserNameDisplay>
            <EmailDisplay email={user.email}></EmailDisplay>
        </div>
    )

}
const UserNameDisplay=(props)=>{
    console.log(props.username)
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


