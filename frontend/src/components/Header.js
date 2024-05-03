import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () =>{
    const cartItems = useSelector(store => store.cart.items)
    return(
       <div className = "h-16 bg-slate-700 text-white w-full content-center sticky top-0">
          <nav>
            <ul className= "flex justify-between sm:mx-5 mx-3">
                <a href="/">
                    <li className="font-bold hover:cursor-pointer">TECHSHOP</li>
                </a>
                
                <ul className="flex sm:gap-10 gap-5 text-sm">
                <Link to={"/cart"}>
                    <li className="hover:cursor-pointer font-bold ">CART <sup className=" text-green-500">{cartItems.length}</sup></li>
                </Link>  
                <Link to={"/login"}>  
                    <li className="hover:cursor-pointer font-bold">LOGIN</li>
                </Link>    
                </ul>
            </ul>
          </nav>
       </div>
    );
}

export default Header