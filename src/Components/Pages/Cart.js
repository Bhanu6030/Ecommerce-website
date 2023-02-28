import { useManage } from "../Cartmanage-context";
function Cart(){
    const {state,dispatch}=useManage();

    return(

        <div>
      <div className="row">
            {
            state.cartItems.map((item)=>(
                <div  >
                   <div className="column">
                        <div className="single-property">
                             <div className="card"></div>
                             <div className="property-thumb">
                                <div key={item.id} className="property-tag"></div>
                                <img src={item.image} alt=""/>
                             </div>
                            {/* <div className="property-content"> */}
                                <h3>{item.name}</h3>
                                
                                {/* <div className="mark">
                                    <i class="fa-solid fa-location-dot"></i>
                                    <span></span>
            </div> */}
                             <span className="amount">Price:{item.price*item.quantity}</span>
                             <h1>{state.individualprice}</h1>
                                
                            {/* </div>  */}
                            <div >
                                <span>Color: {item.color}</span>
                            </div>
                            <div>
                                
                                Quantity: <button onClick={()=>dispatch({type:"PLUSCART",plus:1,plusitem:item})}>+</button>
                                <button>{item.quantity}</button>
                                <button onClick={()=>dispatch({type:"MINUSCART",minus:1,minusitem:item})}>-</button>
                            </div>
                            
                            <div className="buttonstyling">
                                <div>
                                <button className="cartremove" onClick={()=>dispatch({type:"REMOVEFROMCART",removeItem:item,payload:1})}>Remove</button>
                                </div>
                                <div>
                                <button className="cartbuynow" >Buynow</button>
                                </div>
                            </div>
                            {/* <div>
                                <button onClick={()=>dispatch({type:"TOTALAMOUNT",payloadprice:item.price*item.quantity})}>Total price:</button>
                            </div> */}
                        </div>
                        
                </div>
                </div>
                
            ))}
            {/* <h1>Items in cart{state.items}</h1> */}
         
        </div>
        <h1 className="totalprice">Total Price is{state.totalprice}</h1>
        </div>
        
    )
}
export default Cart;