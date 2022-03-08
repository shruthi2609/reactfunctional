const Cart=(props)=>{
    
    return(
        <div>
<h3>Counter App</h3>
<h2>{props.count}</h2>
<button onClick={props.updateCount}>+</button>
</div>
    )
}
export default Cart