import { useContext } from "react"
import {UserContext} from "./ContextComponent"
const Profile=()=>{
  const userInfo=useContext(UserContext)
  console.log(UserContext.currentValue)
 
    return(
     <div>  
          {console.log("profile component")}
       <h1>{userInfo}</h1>
    </div>
    )
}
export default Profile