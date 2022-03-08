import {useState} from "react"
import ContactDisplay from "./ContactDisplay"
const ContactBook =()=>{
    const [contacts,setContacts]=useState([
        {
            "id":1,
            "name":"john",
            "phone":"98877672"
        },
        {
            "id":2,
            "name":"peter",
            "phone":"no number"
        },
        {
            "id":3,
            "name":"pete",
            "phone":"new nu,ber"
        },
    ])
    return (
        <div>
       {console.log("inside contact book ")}
<ContactDisplay contact={contacts}></ContactDisplay>
</div>
    )
}
export default ContactBook