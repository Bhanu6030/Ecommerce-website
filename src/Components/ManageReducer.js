function ManageReducer(state, action) {
    switch (action.type) {
        case 'ADDTOCART':
            return {
                ...state, items: state.items + action.payload, cartItems: [...state.cartItems, action.addImage],totalprice:state.totalprice+action.value.price
            };
        case 'ADDTOWISHLIST':
            return {
                ...state, wishlist: state.wishlist + action.payload, wishlistItems: [...state.wishlistItems, action.addwishlist], isInWishList: true
                // products: [...products].fitr
            }
        case 'REMOVEFROMCART':
            return {
                ...state, cartItems: [...state.cartItems].filter(
                    (item) => item !== action.removeItem
                ), items: state.items - action.payload,
                totalprice:state.totalprice-action.removeItem.price
            }
        case 'REMOVEFROMWISHLIST':
            return {
                ...state,
                wishlistItems: [...state.wishlistItems].filter((item) => item !== action.removeWishlist), wishlist: state.wishlist - action.payload,
            }
        case 'PLUSCART':
            return {
                ...state,
                cartItems:state.cartItems.map((item)=>item.id===action.plusitem.id?
                {...item,quantity:action.plusitem.quantity+1}:item),
                totalprice:state.totalprice + action.plusitem.price
            }
        case 'MINUSCART':
            return {...state, 
                cartItems:state.cartItems.map((item)=>item.id===action.minusitem.id&& item.quantity>1?{...item,quantity:item.quantity-1}:item),
                    totalprice: state.totalprice - action.minusitem.price
            }
        case 'SEARCH-ITEM':
            return{
                ...state,
                Items:[...state.Items].filter(
                    (item)=>item.name.includes(state.search)
                )
            }
        case 'HIGH-TO-LOW':
            return{
                ...state,Items:[...state.Items2].sort((a,b)=>b.price-a.price)
            }
        case 'LOW-TO-HIGH':
            return{
                ...state,Items:[...state.Items2].sort((a,b)=>a.price-b.price)
            }
        case 'PRICE-RANGE1':
            return{
               ...state,Items:[...state.Items2].filter((item)=>item.price>99 && item.price<=500) 
            }
        case 'PRICE-RANGE2':
            return{
                ...state,Items:[...state.Items2].filter((item)=>item.price>500 && item.price<=1000) 
            }
        case 'PRICE-RANGE3':
            return{
                ...state,Items:[...state.Items2].filter((item)=>item.price>1000 && item.price<=1500) 
            }
        case 'PRICE-RANGE4':
            return{
                ...state,Items:[...state.Items2].filter((item)=>item.price>1500) 
            }
        case 'MENS-CLOTHING':
            return{
                ...state,Items:[...state.Items2].filter((item)=>item.category==="men")
            }
        case 'WOMENS-CLOTHING':
            return{
                ...state,Items:[...state.Items2].filter((item)=>item.category==="women")
            }
        
        // case 'TOTALAMOUNT':
        //     return {
        //         ...state
        //     };
        default:
            return state;
    }

}
export default ManageReducer;