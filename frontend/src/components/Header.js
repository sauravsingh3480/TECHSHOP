import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

import Dropdown from "./SelectNavigate";


const Header = () => {
    const cartItems = useSelector(store => store.cart.items)

    //Updating cart-items in local storage when clicked on ( X ) in CartScreen
    localStorage.setItem("cartItems",JSON.stringify(cartItems)) 


    const loginData = useSelector(store => store.login.loginData)  //--> Either null or an object(userInfo)

    const [flag, setFlag] = useState(false);

    return (
        <div className="h-16 bg-slate-700 text-white w-full content-center sticky top-0">
            <nav>
                <ul className="flex justify-between sm:mx-5 mx-3">
                    <a href="/">
                        <li className="font-bold hover:cursor-pointer">TECHSHOP</li>
                    </a>
                    <ul className="flex sm:gap-10 gap-5 text-sm">
                        <Link to={"/cart"}>
                            <li className="hover:cursor-pointer font-bold ">CART <sup className=" text-green-500">{cartItems.length}</sup></li>
                        </Link>
                        <li className="hover:cursor-pointer font-bold">{loginData === null ? <Link to={"/users/login"}><p>LOGIN</p></Link> : <p>{Dropdown(loginData,[flag, setFlag])}</p>} 
                        </li>
                    </ul>
                </ul>
            </nav>
        </div>
    );
}

export default Header