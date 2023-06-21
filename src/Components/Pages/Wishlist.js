import { useManage } from "../Cartmanage-context";
import { useNavigate } from 'react-router-dom';

function Wishlist(){
    const Navigate=useNavigate();
    const {state,dispatch}=useManage();
    const checkcart=(item)=>{
        if(state.cartItems.includes(item)){
            return(
                <button className='cartButton' onClick={()=>Navigate("/cartpage")}>Go to Cart</button>
            )
        }
        else{
            return(
                <button className="cartbutton" onClick={()=>dispatch({type:"ADDTOCART",payload:1,addImage:item})}>Add to cart</button>

            )
        }
    }
    if(state.wishlist===0){
        return (
            <div className="emptyWishlist">
            <p className="wishlist_empty">Your Wishlist is Currently Empty !</p>
            <button className='startShopping' onClick={()=>Navigate("/products")}>Start Shopping !</button>
            </div>
        )
    }
    else{
    return(
        <div>
        {/* <h2 onClick={()=>dispatch({type:"ADDTOWISHLIST"})}>Items in wishlist{state.wishlist}</h2> */}
        <div className="row">
            {
            state.wishlistItems.map((item)=>(
                <div  >
                    {/* <img src={image} alt=""/>
                   <h1>{name}</h1>
                   <h2>{price}</h2>
                   <h3>{color}</h3>
                   <button>Add to cart</button>
                   <button>Add to wishlist</button> */}
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
                                
                                <span className="amount">Price: ${item.price}</span>
                            {/* </div>  */}
                            <div >
                                <span>Color: {item.color}</span>
                            </div>
                            <div className="buttonstyling">
                                <div>
                                <button className="wishlistremove" onClick={()=>dispatch({type:"REMOVEFROMWISHLIST",removeWishlist:item,payload:1})}>Remove from wishlist</button>
                                </div>
                                <div>
                                    {checkcart(item)}
                                {/* <button className="cartbutton" onClick={()=>dispatch({type:"ADDTOCART",payload:1,addImage:item})}>Add to cart</button> */}
                                </div>
                            </div>
                        </div>
                </div>
                </div>
            ))
            }
            
            {/* <h1>Items in cart{state.items}</h1> */}
            
        </div>
        </div>
        
    )
        }
}
export default Wishlist;