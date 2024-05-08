import { useSelector } from "react-redux";

import ProductCardInShipping from "../components/ProductCardInShipping";
import UserAddress from "../components/UserAdderess";
import { Link } from "react-router-dom";

const ShippingPage = () => {

    const cartItems = useSelector(store => store.cart.items);
    const loginData = useSelector(store => store.login.loginData);
    if (cartItems.length > 0) {
        let totalPrice = 0;
        let totalDiscount = 0;
        for (let i = 0; i < cartItems.length; i++) {
            totalPrice += cartItems[i].price;
            totalDiscount += cartItems[i].discPrice;
        }
        if (loginData) {


            return (
                <div className="flex flex-col sm:flex-row my-4">
                    <div className="w-full sm:w-[60%] border sm:mx-2 border-b-0">
                        <UserAddress />
                    </div>
                    <div className="w-full sm:w-[40%] border p-5 bg-white shadow-sm flex flex-col gap-2 sm:mx-4">
                        <div className=" font-semibold text-slate-600">DELIVERY ESTIMATES</div>
                        <div>
                            {
                                cartItems.map((item) => {
                                    return <ProductCardInShipping{...item} key={item._id} />;
                                })
                            }
                        </div>


                        <div className="w-full font-semibold border-b-2 pb-2 text-slate-600">Product details({cartItems.length} items) </div>
                        <ul className="flex justify-between">
                            <li>Total MRP</li>
                            <li><span>₹</span>{totalPrice}</li>
                        </ul>
                        <ul className="flex justify-between">
                            <li>Discount on MRP</li>
                            <li className="text-green-500">- <span>₹</span>{totalDiscount}</li>
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
                            <li><spna className="text-lg">₹</spna>{totalPrice - totalDiscount}</li>
                        </ul>
                        <div>
                            <Link to={"/checkout/payment"}>
                                <div className="w-[100%] py-2 hover:bg-green-700 hover:text-white font-bold hover:cursor-pointer text-center rounded-md mx-auto bg-white  border border-green-600  delay-100">
                                    CONTINUE
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            );
        }
        else{
            return <h1>Chal nikal l**de <span className="underline font-bold text-xl text-red-600"><Link to={"/users/login"}>do login</Link></span></h1>
        }
    }
}
export default ShippingPage