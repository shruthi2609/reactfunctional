import {useState} from "react"
import ContactDisplay from "./ContactDisplay"
const data=[
    {
        "id":1,
        "name":"john",
        "phone":"98877672"
    },
    {
        "id":2,
        "name":"peter",
        "phone":"98877673"
    },
    {
        "id":3,
        "name":"pete",
        "phone":"900000"
    },
]
const ContactBook =()=>{
    const [contacts,setContacts]=useState(data)
    return (
        <div>
       {console.log("inside contact book ")}
<ContactDisplay contact={contacts}></ContactDisplay>
</div>
    )
}
export default ContactBook