// import {Link,Routes,Route,Redirect} from 'react-router-dom';
// import { useManage } from '../Cartmanage-context';
// import { useNavigate } from 'react-router-dom';

// import Products from './Products';
// import Cart from './Cart';
// import Wishlist from './Wishlist';
// function Home(){
//     const {state,dispatch}=useManage();
//     const Navigate=useNavigate();
//     const myFunc=(e)=>{
//         var k;
//         k=e.target.value;
//         state.search=k;
//     }
//     return (
//        <div >
//             <div className='all'>
//                 <div className='navlinks'>
//                     <div className='aboutlink'>
//                     {/* <Link to="/about">About</Link>  */}
//                     </div >
//                     <div className='aboutlink'>
//                     {/* <Link to="/contactus">Contact</Link> */}
//                     </div>
//                     <div className='aboutlink'>
//                     <Link to="/products" style={{textDecoration: 'none',color:"Black",fontStyle:"italic",fontWeight:"bold"}}>Products</Link>
//                     </div>
//                     <div class="topnav">
//                     Search: <input className='searchspace' type="search"  placeholder='search...' onChange={(e)=>myFunc(e)} name="search"/>
//                     <button className='searchbutton' onClick={()=>dispatch({type:"SEARCH-ITEM"})}>search</button>
//                     </div>
//                 </div>
//                 <div className='icons'>
//                     <i onClick={()=>Navigate("/wishlistpage")} class='fa fa-heart fa-2x' style={{color:'red',marginTop:"5px",marginRight:"15px"}}>({state.wishlist})</i>
//                     <i onClick={()=>Navigate("/cartpage")} class="fa fa-shopping-cart fa-2x" aria-hidden="true" style={{marginTop:"5px"}} >({state.items})</i>
//                 </div>
                
//             </div>
           
//             {/* <Link to="/cartpage"></Link> */}
//        {/* <Routes>
//        <Route exact path="/"  element={<Home />} />
//         <Route path="/cartpage" element={<Cart />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/wishlistpage" element={<Wishlist />} />
//           {/* <Redirect to="/" /> */}
//        {/* </Routes> */} 
//        </div>  
//     )
// }
// export default Home;