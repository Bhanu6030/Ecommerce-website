// import { Navigation } from "react-router-dom";
// import '../../../public/Images/im';
import {  useNavigate } from 'react-router-dom';
// import { useAuth } from './Auth-context';
function Landingpage(){
    
//  const {login,setLogin}=useAuth();
  const navigate=useNavigate();
//   const location=useLocation();

    return(
        // <h1>this is landing page</h1>
        <div >
             <img src="https://cdn.pixabay.com/photo/2016/11/22/19/08/hangers-1850082__340.jpg" alt="Welcome to shop house" className="landingimage"></img>
             <p className='toptext'>ShopHouse</p>
             <p className='text'>Super Seasonal Sale</p>
             <p className='longtext'>“The odds of going to the store for a loaf of bread and<br></br> coming out with only a loaf of bread are three billion to one.”</p>
             <button className='landingbutton' onClick={()=>navigate("/products")}>Let's Shop</button> 

            {/* <button
       onClick={()=>{
        setLogin(((login)=>!login))
        navigate(location.state.from.pathname)
      }}
      >
        {login?"logout":"login"}
      </button> */}
        </div>
    )
}
export default Landingpage;