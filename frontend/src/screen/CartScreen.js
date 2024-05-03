import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


import ProductCardInCart from "../components/ProductCardInCart";

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);

    if (cartItems.length > 0) 
    {
        let totalPrice = 0;
        let totalDiscount = 0;
        for (let i = 0; i < cartItems.length; i++)
        {
            console.log(cartItems[i].selectedQty)
            totalPrice += cartItems[i].price;
            totalDiscount += cartItems[i].discPrice;
        }
        return (
            <div className="w-full sm:flex">
                <div className="sm:w-[65%]">
                    <div>
                        {
                            cartItems.map((item) => {
                                return <ProductCardInCart {...item} key={item._id} />;
                            })
                        }
                    </div>
                </div>
                <div className="fixed bottom-0 w-full border py-2 z-10 bg-white shadow-sm sm:hidden">
                    <div className="w-fit mx-auto font-semibold"><span className=" text-red-400 font-bold text-lg">{cartItems.length}</span> items in cart place order</div>
                    <div className="w-[95%] py-4 bg-green-600 text-white font-bold hover:cursor-pointer text-center rounded-md mx-auto my-4 text">
                        PLACE ORDER
                    </div>
                </div>
                <div className="fixed right-0 w-[32%] border p-5 z-10 bg-white shadow-sm h-[78vh] mt-4 sm:flex flex-col justify-between mx-4 hidden">
                    <div className="w-full font-semibold border-b-2 text-center p-3"><span className=" text-red-400 font-bold text-lg ">{cartItems.length}</span> items in cart place order</div>
                    <ul className="flex justify-between">
                        <li>Total MRP</li>
                        <li><span>₹</span>{totalPrice}</li>
                    </ul>
                    <ul className="flex justify-between">
                        <li>Discount on MRP</li>
                        <li className="text-green-500">- <span>₹</span>{totalDiscount}</li>
                    </ul>
                    <ul className="flex justify-between">
                        <li>Coupon Discount</li>
                        <li className="text-orange-600 hover:cursor-pointer">Apply Coupon</li>
                    </ul>
                    <ul className="flex justify-between">
                        <li>Platform Fee</li>
                        <li className="text-green-400"> FREE</li>
                    </ul>
                    <ul className="flex justify-between border-b-2 pb-3">
                        <li>Shipping Fee</li>
                        <li className="text-green-400"><span className="line-through font-semibold text-black">₹79</span> FREE</li>
                    </ul>
                    <ul className="flex justify-between font-bold">
                        <li>Total Amount</li>
                        <li><spna className="text-lg">₹</spna>{totalPrice-totalDiscount}</li>
                    </ul>
                    <div className="w-[100%] py-2 hover:bg-green-700 hover:text-white font-bold hover:cursor-pointer text-center rounded-md mx-auto bg-white  border border-green-600  delay-100">
                        PLACE ORDER
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="w-full mt-24 text-center">
                <p className="font-bold">Hey,it feels so light!</p><br />
                <p>No Item In Cart. <span className="underline text-green-700 font-semibold"><Link to={'/'}> ADD NOW</Link></span></p>
            </div>
        );
    }
}

export default Cart