import { increment,decrement } from "../actions";
import { connect } from "react-redux";
import ReduxCounter from "../Components/ReduxCounter";
const mapStateToProps=(state)=>{
    return{
        count:state
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        increment:()=>dispatch(increment()),
        decrement:()=>dispatch(decrement()),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ReduxCounter)
