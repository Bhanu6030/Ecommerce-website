// import { Items } from "./Data"; 
import {useManage} from '../Cartmanage-context';
import {Link} from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
export const Items=[
    {
        "id":"1",
        "category":"men",
        "name":"Men Regular Fit Casual Shirt",
        "image":"Images/image3.jpg",
        "price":1200,
        "color":"Blue and white",
        "quantity":1
    },
    {
        "id":"2",
        "category":"men",
        "name":"Men Formal shirt",
        "image":"Images/image4.jpg",
        "price":400,
        "color":"Black",
        "quantity":1
    },
    {
        "id":"3",
        "category":"men",
        "name":"Men T-shirt",
        "image":"Images/image5.jpg",
        "price":900,
        "color":"Green and white",
        "quantity":1
    },
    {
        "id":"4",
        "category":"men",
        "name":"Men hoodie",
        "image":"Images/image6.jpg",
        "price":1900,
        "color":"Light color",
        "quantity":1
    },
    {
        "id":"5",
        "category":"men",
        "name":"Men Check style hoodie",
        "image":"Images/image7.jpg",
        "price":1400,
        "color":"Blue and Black",
        "quantity":1
    },
    {
        "id":"6",
        "category":"men",
        "name":"Men Contrast Hoodie",
        "image":"Images/image8.jpg",
        "price":2400,
        "color":"White",
        "quantity":1
    },
    {
        "id":"7",
        "category":"men",
        "name":"Men Check style hoodie",
        "image":"Images/image9.jpg",
        "price":1400,
        "color":"Blue and white",
        "quantity":1
    },
    {
        "id":"8",
        "category":"women",
        "name":"Women Fashion designed tops",
        "image":"Images/image10.jpg",
        "price":700,
        "color":"White",
        "quantity":1
    },
    {
        "id":"9",
        "category":"women",
        "name":"Women stylish designer top",
        "image":"Images/image11.jpg",
        "price":1100,
        "color":"white",
        "quantity":1
    },
    {
        "id":"10",
        "category":"women",
        "name":"Women latest style top",
        "image":"Images/image12.jpg",
        "price":1500,
        "color":"Green",
        "quantity":1
    },
    {
        "id":"11",
        "category":"women",
        "name":"Women stylish top",
        "image":"Images/image13.jpg",
        "price":950,
        "color":"White",
        "quantity":1
    },
]
function Products(){
    const {state,dispatch}=useManage();
    const myFunc=(e)=>{
        var k;
        k=e.target.value;
        state.search=k;
    }
    const Navigate=useNavigate()
    const wishlist=(item)=>{
        if(state.wishlistItems.includes(item)){
            return(
                <button className="gotowishlist" onClick={()=>Navigate("/wishlistpage")}>Go to wishlist</button>
            )
        }
        else{
            return(
                <button className="wishlistbutton" onClick={()=>dispatch({type:"ADDTOWISHLIST",payload:1,addwishlist:item})}>Add to wishlist</button>
            )
        }
    }
    const Addtocart=(item)=>{
      if(state.cartItems.includes(item)){
        return(
         <button className='cartButton' onClick={()=>Navigate("/cartpage")}>Go to Cart</button>
        )
      }
      else{
        return(
            <button className="cartbutton" onClick={()=>dispatch({type:"ADDTOCART",payload:1,addImage:item,value:item})}>Add to cart</button>  
        )
      }
    }
    
    return(
        <div>
            <div >
            <div className='all'>
                <div className='navlinks'>
                    <div className='aboutlink'>
                    {/* <Link to="/about">About</Link>  */}
                    </div >
                    <div className='aboutlink'>
                    {/* <Link to="/contactus">Contact</Link> */}
                    </div>
                    <div className='aboutlink'>
                    <Link to="/products" style={{textDecoration: 'none',color:"Black",fontStyle:"italic",fontWeight:"bold"}}>Products</Link>
                    </div>
                    <div class="topnav">
                    Search: <input className='searchspace' type="search"  placeholder='search...' onChange={(e)=>myFunc(e)} name="search"/>
                    <button className='searchbutton' onClick={()=>dispatch({type:"SEARCH-ITEM"})}>search</button>
                    </div>
                </div>
                <div className='icons'>
                    <i onClick={()=>Navigate("/wishlistpage")} class='fa fa-heart fa-2x' style={{color:'red',marginTop:"5px",marginRight:"15px"}}>({state.wishlist})</i>
                    <i onClick={()=>Navigate("/cartpage")} class="fa fa-shopping-cart fa-2x" aria-hidden="true" style={{marginTop:"5px"}} >({state.items})</i>
                </div>
                
            </div>
           
            {/* <Link to="/cartpage"></Link> */}
       {/* <Routes>
       <Route exact path="/"  element={<Home />} />
        <Route path="/cartpage" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/wishlistpage" element={<Wishlist />} />
          {/* <Redirect to="/" /> */}
       {/* </Routes> */} 
       </div>  
<div class="sidenav">
<h1 className='filters' style={{fontStyle:"italic"}}>Filters</h1>
  
  <div className='sortbuttons'>
  <button onClick={()=>dispatch({type:'HIGH-TO-LOW'})} className='sort'>sort price(high to low)</button>
  <button onClick={()=>dispatch({type:'LOW-TO-HIGH'})} className='sort'>sort price(low to high)</button>
  </div>
  <div className='pricebuttons'>
    <button onClick={()=>dispatch({type:'PRICE-RANGE1'})} className='sort'>price range(100rs - 500rs)</button>
    <button onClick={()=>dispatch({type:'PRICE-RANGE2'})} className='sort'>price range(501rs - 1000rs)</button>
    <button onClick={()=>dispatch({type:'PRICE-RANGE3'})} className='sort'>price range(1001rs - 1500rs)</button>
    <button onClick={()=>dispatch({type:'PRICE-RANGE4'})} className='sort'>price range(1501rs - 2000rs)</button>
  </div>
  <div className='categorybuttons'>
    <button onClick={()=>dispatch({type:'MENS-CLOTHING'})} className='sort'>Men's Clothing</button>
    <button onClick={()=>dispatch({type:'WOMENS-CLOTHING'})} className='sort'>Women's Clothing</button>
  </div>

</div>

        
        <div className="row">
            {
            state.Items.map((item)=>(
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
                                {/* <div className="property-tag">for sale</div> */}
                                <img src={item.image} alt=""/>
                                </div>
                            {/* <div className="property-content"> */}
                                <h3>{item.name}</h3>
                                {/* <div className="mark">
                                    <i class="fa-solid fa-location-dot"></i>
                                    <span></span>
                                </div> */}
                                
                                <span className="amount">Price: Rs.{item.price}/-</span>
                            {/* </div>  */}
                            <div >
                                <span>Color: {item.color}</span>
                            </div>
                            <div className="buttonstyling">
                                {wishlist(item)}
                                {/* <div>
                                    wishlist()
                                </div> */}
                                {/* <div> */}
                                {Addtocart(item)}
                                {/* <button className="cartbutton" onClick={()=>dispatch({type:"ADDTOCART",payload:1,addImage:item})}>Add to cart</button> */}
                                {/* </div> */}
                            </div>
                        </div>
                </div>
                </div>
            ))}
            {/* <h1>Items in cart{state.items}</h1> */}
            
        </div>
        </div>
    )
}

export default Products;
