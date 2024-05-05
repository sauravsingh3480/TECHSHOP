import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { removeItem } from "../utils/cartSlice";


const ProductCardInCart = ({ _id, name, image, brand, price, discPrice, deliveryDays }) => {

    const cartItems = useSelector(store => store.cart.items);
    
    // REMOVING ITEM FROM CART
    let product = null
    for (let idx = 0; idx < cartItems.length; idx++) {
        if (cartItems[idx]._id === _id) {
            product = cartItems[idx]; //FINDING PRODUCT TO REMOVE
            break;
        }
    }
    const dispatch = useDispatch();
    const handleRemoveItem = (product) => {
        dispatch(removeItem(product));

        //NOTE -- Removeing product from local storage in Header component
    }
    //END

    return (
        <div className="w-100 my-4 p-2 flex gap-3 border shadow-sm  sm:h-44 sm:ml-3">
            <div className="w-[42%]">
                <img src={image} alt={name} className="h-full" />
            </div>
            <div className='flex flex-col w-[57%] justify-around'>
                <ul className="flex justify-between">
                    <span className="font-bold text-red-900">{brand}</span>
                    <span className="hover:cursor-pointer inline-block text-black" onClick={() => handleRemoveItem(product)}>
                        X
                    </span>
                </ul>
                <span className="text-md text-nowrap truncate">{name}</span>
                <ul>
                    <span className=" font-semibold text-xl"><span className=" text-green-600 text-sm font-bold">₹ </span>{price - discPrice}  </span>
                    <span className="line-through  italic"><span className=" text-green-600">  ₹</span>{price}</span>
                </ul>
                <span>Fast Delivery in<span className="font-semibold"> {deliveryDays} days</span> </span>

                <div className="w-full py-1 font-semibold hover:cursor-pointer text-center rounded-md mx-auto text border border-pink-600 hover:bg-pink-600 hover:text-white delay-100">
                    Move To Wishlist
                </div>
            </div>
        </div>
    );
}
export default ProductCardInCart