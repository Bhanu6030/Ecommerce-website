import './App.css';
import {Routes,Route} from 'react-router-dom';

// import Home from './Components/Pages/Home';
import Products from './Components/Pages/Products';
import Wishlist from './Components/Pages/Wishlist';
import Cart from './Components/Pages/Cart';
import Landingpage from './Components/Pages/Landingpage';
import Login from './Components/Login';
// import { useAuth } from './Components/Pages/Auth-context';
import RequireAuth from './Components/RequireAuth';


function App() {
  // const {login,setLogin}=useAuth();
  // const navigate=useNavigate();
  // const location=useLocation();
  //  console.log(location);
  // console.log(location.state.from.pathname);
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Landingpage /> */}
      <Routes>
       <Route path="/" element={<RequireAuth><Landingpage /></RequireAuth>} />
       <Route path="/login" element={<Login />} />
       {/* <Route path="/home" element={<Home /> } /> */}
        <Route path="/cartpage" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/wishlistpage" element={<Wishlist />} />
          {/* <Redirect to="/" /> */}
       </Routes>
       {/* <button
       onClick={()=>{
        setLogin(((login)=>!login))
        navigate(location.state.from.pathname)
      }}
      className="logbutton"
      >
        {login?"logout":"login"}
      </button> */}
    </div>
  );
}

export default App;

